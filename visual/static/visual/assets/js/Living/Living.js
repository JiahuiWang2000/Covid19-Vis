function updateProvince(province) {
    console.log(province)
    document.querySelector("#FigTitle").innerHTML = province + "居民收支情况"
    $.ajax({
        url: "getLivingdata",
        type: 'GET',
        data: { "graph": 0, "name": province },
        success: function(msg) {
            console.log(msg);
            bigGraph(msg.data)
            updateSubGraph("居民", province, msg.data)
        }
    })

}

function updateSubGraph(name, province, data) {
    console.log(name);
    name = name.substr(0, 2);
    document.querySelector("#Fig2Title").innerHTML = province + name + "收支累计值"
    document.querySelector("#Fig3Title").innerHTML = "全国" + name + "收支情况"
    if (name == "居民") {
        subGraph([data[0], data[1]])
    } else if (name == "城镇") {
        subGraph([data[2], data[3]])
    } else if (name == "农村") {
        subGraph([data[4], data[5]])
    }
}

function subGraph(left_down, right_up) {
    if ($("#ProvinceStack").length) {
        drawProvinceStack(document.querySelector("#ProvinceStack"), left_down[0].reverse(), left_down[1].reverse());
    }
    if ($("#funnel").length) {
        var data = [];
        data[0] = [4896, 1376, 741, 1548]
        data[1] = [1708, 369, 1238, 283, 605, 350, 417, 112]
        drawFunnel(document.querySelector("#funnel"), data)
    }

    if ($("#LivingChange").length) {
        console.log("HI")
        var data = [-3.9, 5.8, 6.146341463, 6.457925636, 6.777996071, 6.5, 6.6, 6.6, 6.6, 7.320338575, 7.487684729, 7.297830375]
        datat = data.reverse()
        drawChangeLine(document.querySelector("#LivingChange"), data);
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
    updateProvince("北京")
    subGraph();
    /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }
}

window.onload = Living;