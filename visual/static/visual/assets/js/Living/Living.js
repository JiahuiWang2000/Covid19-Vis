var curProvince;
var pData;
var cData;
var townVillage, curtime; //0:all,1:town,2:village
function play(i) {

    setTimeout(function() {
        $("#time").data("ionRangeSlider").update({ from: i });
        animateRightUp($("#time").data("ionRangeSlider").options.values[i]);
    }, 500 * i);
}

function playStart() {
    for (var i = 0; i < 12; i++) {
        play(i);
    }
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
            bigGraph(pData)
            updateLeftDown("居民", province)
            townVillage = "居民";
            curtime = "2017B";
            updateRightUp(townVillage, curtime);
            updateRightDown(townVillage);
        }
    })

}

function updateLeftDown(name) {
    townVillage = name;
    document.querySelector("#Fig2Title").innerHTML = curProvince + name + "收支累计值"
    if ($("#ProvinceStack").length) {
        if (name == "居民") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), pData[0].reverse(), pData[1].reverse());
        } else if (name == "城镇") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), pData[2].reverse(), pData[3].reverse());
        } else if (name == "农村") {
            drawProvinceStack(document.querySelector("#ProvinceStack"), pData[4].reverse(), pData[5].reverse());
        }
    }

}

function updateRightUp(name, time) {
    document.querySelector("#Fig3Title").innerHTML = "全国" + name + "收支情况"
    if ($("#funnel").length) {
        drawFunnel(document.querySelector("#funnel"), cData[name][time])
    }
}

function updateRightDown(name) {
    var title = name;
    if (name != "居民")
        name = name + "居民"
    if ($("#LivingChange").length) {
        drawChangeLine(document.querySelector("#LivingChange"), cData[title][name + "人均可支配收入_累计增长"].reverse(), cData[title][name + "人均消费支出_累计增长"].reverse(), cData[title][name + "人均可支配收入_累计值"].reverse(), cData[title][name + "人均可支配收入_累计值"].reverse())
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