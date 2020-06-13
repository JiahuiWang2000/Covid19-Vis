var curProvince;
var pData;
var cData;
var iData;
var townVillage, curtime; //0:all,1:town,2:village
var timer = []

function play(i, t) {

    timer.push(setTimeout(function() {
        $("#time").data("ionRangeSlider").update({ from: i });
        animateRightUp($("#time").data("ionRangeSlider").options.values[i]);
    }, 500 * t));
}

function playStart() {
    if (timer.length)
        pause();
    var i = $("#time").data("ionRangeSlider").options.from;
    if (i == 10) i = 0;
    for (var t = i; t < 11; t++) {
        play(t, t - i);
    }
}

function pause() {
    timer.forEach(function(sto) { clearTimeout(sto) });
    timer.splice(0, timer.length)
}

function animateRightUp(time) {
    curtime = time;
    updateRightUp(townVillage, time);
}

function updateProvince(province) {
    curProvince = province
    document.querySelector("#FigTitle").innerHTML = province + "居民收支情况"
    $.ajax({
        url: "getLivingdata",
        type: 'GET',
        data: { "graph": 0, "name": province },
        success: function(msg) {
            pData = msg.data;
            cData = msg.country;
            iData = msg.increase;
            console.log(iData);
            bigGraph(pData)
            updateLeftDown("居民", province)
            townVillage = "居民";
            curtime = "2017C";
            updateRightUp(townVillage);
            updateRightDown(townVillage);
        }
    })

}

function updateLeftDown(name) {
    townVillage = name;
    document.querySelector("#Fig2Title").innerHTML = curProvince + name + "收支同比增长"
    if ($("#ProvinceStack").length) {
        if (name == "居民") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), iData[0], iData[1]);
        } else if (name == "城镇") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), iData[2], iData[3]);
        } else if (name == "农村") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), iData[4], iData[5]);
        }
    }

}

function updateRightUp(name) {
    document.querySelector("#Fig3Title").innerHTML = "全国" + name + "收支情况"
    if ($("#funnel").length) {
        drawFunnel(document.querySelector("#funnel"), cData[name][curtime])
    }
}

function updateRightDown(name) {
    var title = name;
    if (name != "居民")
        name = name + "居民"
    if ($("#LivingChange").length) {
        drawChangeLine(document.querySelector("#LivingChange"), cData[title][name + "人均可支配收入_累计增长"], cData[title][name + "人均消费支出_累计增长"], cData[title][name + "人均可支配收入_当期值"], cData[title][name + "人均消费支出_当期值"])
    }
}

function bigGraph(data) {
    if ($("#ProvinceLiving").length) {
        drawProvinceLiving(document.querySelector("#ProvinceLiving"), data);
    }
}

function static() {
    if ($("#ProvinceChoose").length) {
        drawChinamap(document.querySelector("#ProvinceChoose"));
    }
}
/* [ charts ] */
function Living() {
    static();
    curProvince = "北京"
    updateProvince(curProvince)
        //subGraph();
        /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }
}

window.onload = Living;