"use strict";

function play(i) {
    setTimeout(function() {
        //document.getElementById("time").value = i.toString();
        $("#time").data("ionRangeSlider").update({ from: i });
        timeChange();
    }, 500 * i);
}

function playStart() {
    for (var i = 0; i < 36; i++) {
        if (currentValue.pie[0][35 - i].value == "NaN")
            continue;
        play(i);
    }
}

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
    let titlename = name.substr(0, name.length - 4);
    $.ajax({
        url: "getTradingdata",
        type: 'GET',
        data: { "graph": 1, "name": titlename },
        success: function(msg) {
            subGraph(msg.left_up, msg.left_down, msg.right_up, msg.right_down);
        }
    })
    document.querySelector("#Fig1Title").innerHTML = titlename + "当期值"
    document.querySelector("#Fig2Title").innerHTML = titlename + "同比增长"
    document.querySelector("#Fig3Title").innerHTML = titlename + "累计值"
    document.querySelector("#Fig4Title").innerHTML = titlename + "累计增长"
        //需要加参数表示画哪一个
}

function bigGraph(month) { //画饼图和漏斗图，要有参数表示是哪一个月
    if ($("#nestpie").length) {
        drawNestPie(document.querySelector("#nestpie"), currentValue.pie, 35 - month)
    }

    if ($("#funnel").length) {
        let data = {};
        data.name = ["粮油、食品、饮料、烟酒类商品零售类值_当期值", "粮油、食品类商品零售类值_当期值", "饮料类商品零售类值_当期值", "烟酒类商品 零售类值_当期值", "服装鞋帽、针、纺织品类商品零售类值_当期值", "服装类商品零售类值_当期值", "化妆品类商品零售类值_当期值", "金银珠宝类商品零售类值_当期值", "日用品类商品零售类值_当期值", "体育、娱乐用品类商品零售类值_当期值", "书报杂志类商品零售类值_当期值", "家用电器和音像器材类商品零售类值_当期值", "中西药品类商品零售类值_当期值", "文化办公用品类商品零售类值_当期值", "家具类商品零售类值_当期值", "通讯器材类商品零售类值_当期值", "石油及制品类商品零售类值_当期值", "建筑及装潢材料类商品零售类值_当期值", "汽车类商品零售类值_当期值", "其他商品零售类值_当期值", "粮油、食品、饮料、烟酒类商品零售类值_当期值", "粮油、食品类商品零售类值_当期值", "饮料类商品零售类值_当期值", "烟酒类商品零售类值_当期值", "服装鞋帽、针、纺织品类商品零售类值_ 当期值", "服装类商品零售类值_当期值", "化妆品类商品零售类值_当期值", "金银珠宝类商品零售类值_当期值", "日用品类商品零售类值_当期值", "体育、娱乐用品类商品零售类值_当期值", "书报杂志类商品零售类值_当期值", "家用电器和音像器材类商品零售类值_当期值", "中西药品类商品零售类值_当期值", "文化办公用品类商品零售类值_当期值", "家具类商品零售类值_当期值", "通讯器材类商品零售类值_当期值", "石油及制品类商品零售类值_当期值", "建筑及装潢材料类商品零售类值_当期值", "汽车类商品零售类值_当期值", "其他商品零 售类值_当期值", "粮油、食品、饮料、烟酒类商品零售类值_当期值", "粮油、食品类商品零售类值_当期值", "饮料类商品零售类值_当期 值", "烟酒类商品零售类值_当期值", "服装鞋帽、针、纺织品类商品零售类值_当期值", "服装类商品零售类值_当期值", "化妆品类商品零 售类值_当期值", "金银珠宝类商品零售类值_当期值", "日用品类商品零售类值_当期值", "体育、娱乐用品类商品零售类值_当期值", "书报杂志类商品零售类值_当期值", "家用电器和音像器材类商品零售类值_当期值", "中西药品类商品零售类值_当期值", "文化办公用品类商品零售类值_当期值", "家具类商品零售类值_当期值", "通讯器材类商品零售类值_当期值", "石油及制品类商品零售类值_当期值", "建筑及装潢材料类商品零售类值_当期值", "汽车类商品零售类值_当期值", "其他商品零售类值_当期值"]
        data.data = currentValue.funnel.map(d => d[35 - month]);

        drawFunnel(document.querySelector("#funnel"), data)
    }
}

function subGraph(left_up, left_down, right_up, right_down) { //画下面四个框，与月份没有关系

    //画当期值（含line与bar)
    if ($("#achart-bar").length) {
        drawLineBar(left_up, document.querySelector("#achart-bar"))
    }

    if ($("#negative-bar").length) {
        drawNegative(document.querySelector("#negative-bar"), left_down)
    }

    if ($("#stack-line").length) {
        drawStackLine(document.querySelector("#stack-line"), right_up);
    }

    if ($("#negative-bar-2").length) {
        drawNegative(document.querySelector("#negative-bar-2"), right_down)
    }

}

var currentValue = {}
    /* [ charts ] */
function Trading() {
    $.ajax({
        url: "getTradingdata",
        type: 'GET',
        data: { "graph": 0 },
        success: function(msg) {
            currentValue = msg;
            bigGraph(0);
            updateLineBar("社会消费品零售总额_当期值");
        }
    })


    /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }
}



window.onload = Trading;