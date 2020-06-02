"use strict";

function timeChange() {
    const time = document.getElementById('time');
    let timeVal = parseFloat(time.value);
    var str = "20";
    if (timeVal < 8) {
        str += "17年";
        str += timeVal + 5;
        str += "月";
    } else if (timeVal < 20) {
        str += "18年";
        str += timeVal - 7;
        str += "月";
    } else if (timeVal < 32) {
        str += "19年";
        str += timeVal - 19;
        str += "月";
    } else {
        str += "20年0";
        str += timeVal - 31;
        str += "月";
    }
    document.querySelector("#FigTitle").innerHTML = str + "国内贸易整体情况"
    bigGraph(timeVal);

    const timePercent = parseFloat((timeVal / 36), 2) * 100

    time.style.background = `linear-gradient(to right, #ffa200, white ${timePercent}%, white`
}

function updateLineBar(name) {
    let titlename;
    if (name.indexOf("商品零售类值") != -1) {
        titlename = name.substr(0, name.length - 8);

    } else if (name.length == 8) {
        titlename = name.substr(0, 4);
    } else if (name.indexOf("城镇") != -1 || name.indexOf("乡村") != -1) {
        titlename = name;
    } else {
        titlename = name;
    }
    document.querySelector("#Fig1Title").innerHTML = titlename + "当期值"
    document.querySelector("#Fig2Title").innerHTML = titlename + "同比增长"
    document.querySelector("#Fig3Title").innerHTML = titlename + "累计值"
    document.querySelector("#Fig4Title").innerHTML = titlename + "累计增长"
    subGraph(); //需要加参数表示画哪一个
}

function bigGraph(month) { //画饼图和漏斗图，要有参数表示是哪一个月
    if ($("#nestpie").length) {
        drawNestPie(document.querySelector("#nestpie"))
    }

    if ($("#funnel").length) {
        let data = {};
        data.name = ["体育、娱乐用品类商品零售类值_当期值", "书报杂志类商品零售类值_当期值", "饮料类商品零售类值_当期值",
            "家具类商品零售类值_当期值",
            "建筑及装潢材料类商品零售类值_当期值",
            "金银珠宝类商品零售类值_当期值",
            "化妆品类商品零售类值_当期值",
            "文化办公用品类商品零售类值_当期值",
        ]
        data.data = [{
                "value": 55.7,
                "name": "体育、 娱乐用品类商品零售类值_当期值"
            },

            {
                "value": 89.2,
                "name": "书报杂志类商品零售类值_当期值"
            },
            {
                "value": 166.3,
                "name": "饮料类商品零售类值_当期值"
            },
            {
                "value": 115.3,
                "name": "家具类商品零售类值_当期值"
            },
            {
                "value": 223.6,
                "name": "建筑及装潢材料类商品零售类值_当期值"
            },
            {
                "value": 261.5,
                "name": "金银珠宝类商品零售类值_当期值"
            },
            {
                "value": 300,
                "name": "化妆品类商品零售类值_当期值"
            },
            {
                "value": 386.3,
                "name": "文化办公用品类商品零售类值_当期值"
            }
        ]


        drawFunnel(document.querySelector("#funnel"), data)
    }
}

function subGraph() { //画下面四个框，与月份没有关系
    /* chart-apex */
    var data_act = [];
    for (var i = 0; i < 36; i++) {
        data_act.push([i, Math.floor(Math.random() * 100)]);
    }
    console.log(data_act);
    //画当期值（含line与bar)
    if ($("#achart-bar").length) {
        drawLineBar(data_act, document.querySelector("#achart-bar"))
    }

    if ($("#negative-bar").length) {
        let data = [];
        data = [-7.5, -15.8, NaN, NaN, 8, 8, 7.2, 7.8, 7.5, 7.6, 9.8, 8.6, 7.2, 8.7, NaN, NaN, 8.160813607, 8.1, 8.6, 9.2, 9, 8.8, 9, 8.5, 9.4, 10.1, NaN, NaN, 9.4, 10.2, 10, 10.3, 10.1, 10.4, 11, 10.7]
            // for (var i = 0; i < 36; i++) {
            //     data.push(Math.random() * 100 - 50);
            // }
        drawNegative(document.querySelector("#negative-bar"), data)
    }


    let data = [];
    data[0] = [34734.1, 34108.2, 34240.9, 30870.3, 30329.7, 29609.8, 29807.6, 29459.2, NaN, NaN, NaN, NaN];
    data[0] = data[0].reverse();
    data[1] = [35893.49834, 35259.7, 35534.4, 32005.4, 31542.3, 30733.7, 30841.6, 30359.1, 28541.9, 29193.6, NaN, NaN]
    data[1] = data[1].reverse();
    data[2] = [38776.7, 38093.8, 38104.3, 34494.9, 33896.3, 33073.3, 33878.1, 32955.7, 30586.1, 31725.7, NaN, NaN]
    data[2] = data[2].reverse();
    data[3] = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 28177.8, 26449.9, NaN, NaN];
    data[3] = data[3].reverse();
    data = d3.transpose(data)
    if ($("#stack-line").length) {
        drawStackLine(document.querySelector("#stack-line"), data);
    }

    if ($("#negative-bar-2").length) {
        let data = [];
        data = [-16.2, -19, -20.5, NaN, 8, 8, 8.1, 8.2, 8.2, 8.3, 8.4, 8.1, 8, 8.3, 8.2, NaN, 8.981749407, 9.1, 9.2, 9.3, 9.3, 9.3, 9.4, 9.5, 9.7, 9.8, 9.7, NaN, 10.2, 10.3, 10.3, 10.4, 10.4, 10.4, 10.4, 10.3]
        drawNegative(document.querySelector("#negative-bar-2"), data)
    }



}
/* [ charts ] */
function Trading() {

    bigGraph();
    subGraph();

    /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }
}



window.onload = Trading;