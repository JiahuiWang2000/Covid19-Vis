function subGraph() {
    if ($("#LivingAdd").length) {
        var data = [];
        data[0] = [4896, 1376, 741, 1548]
        data[1] = [1708, 369, 1238, 283, 605, 350, 417, 112]
        drawPolarBar(document.querySelector("#LivingAdd"), data)
    }
    if ($("#LivingChange").length) {
        console.log("HI")
        var data = [-3.9, 5.8, 6.146341463, 6.457925636, 6.777996071, 6.5, 6.6, 6.6, 6.6, 7.320338575, 7.487684729, 7.297830375]
        datat = data.reverse()
        drawChangeLine(document.querySelector("#LivingChange"), data);
    }
}

function bigGraph(month) { //画饼图和漏斗图，要有参数表示是哪一个月
    if ($("#funnelAll").length) {
        var data = [];
        data[0] = [4896, 1376, 741, 1548]
        data[1] = [1708, 369, 1238, 283, 605, 350, 417, 112]
        drawFunnel(document.querySelector("#funnelAll"), data)
    }
    if ($("#funnelTown").length) {
        var data = [];
        data[0] = [4896, 1376, 741, 1548]
        data[1] = [1708, 369, 1238, 283, 605, 350, 417, 112]
        drawFunnel(document.querySelector("#funnelTown"), data)
    }
    if ($("#funnelVillage").length) {
        var data = [];
        data[0] = [4896, 1376, 741, 1548]
        data[1] = [1708, 369, 1238, 283, 605, 350, 417, 112]
        drawFunnel(document.querySelector("#funnelVillage"), data)
    }

}

function Firstpage() { //全国
    echarts.init(document.querySelector("#ProvinceChoose")).dispose();
    echarts.init(document.querySelector("#ProvinceLiving")).dispose();
    var lc = document.getElementsByClassName("l_c");
    for (var ele of lc) {
        ele.style.visibility = 'visible';
    }
    var lp = document.getElementsByClassName("l_p");
    for (var ele of lp) {
        ele.style.visibility = 'hidden';
    }
    bigGraph();
    subGraph();
    // document.getElementById("footer").setAttribute("style", "position:absolute;top:1100px;width:900px");
    document.getElementById("charts").setAttribute("style", "position:absolute;height:900px");
}

function Secondpage() { //分省
    echarts.init(document.querySelector("#LivingAdd")).dispose();
    echarts.init(document.querySelector("#LivingChange")).dispose();
    echarts.init(document.querySelector("#funnelAll")).dispose();
    echarts.init(document.querySelector("#funnelTown")).dispose();
    echarts.init(document.querySelector("#funnelVillage")).dispose();
    var lc = document.getElementsByClassName("l_c");
    for (var ele of lc) {
        ele.style.visibility = 'hidden';
    }
    var lp = document.getElementsByClassName("l_p");
    for (var ele of lp) {
        ele.style.visibility = 'visible';
    }
    // document.getElementById("footer").setAttribute("style", "position:absolute;top:600px;width:900px");
    document.getElementById("charts").setAttribute("style", "position:absolute;height:500px");
    if ($("#ProvinceLiving").length) {
        var data = [];
        data[0] = [17874.24243, 67755.91239, 50540.59119, 33860.38259, 17068.92302, 62361, 46426, 31079, 15767, 57229.83222, 42641.16666, 28566.27554]
        data[1] = [10003.02856, 43038.29025, 31541.51733, 21134.44904, 10636.707, 39842.68845, 29298, 19670, 9902, 37425.33801, 27448.15497, 18380.92129]
        data[2] = [19348.84228, 73848.51337, 54864.61291, 36758.8258, 18454.14897, 67990, 50406, 33743, 17049, 62406.34222, 46296.42111, 31016.18009]
        data[3] = [10679.74805, 46358.17449, 34003.55887, 22788.74767, 11440.31173, 42925.64798, 31592, 21216, 10651.61207, 40346.28592, 29610.28395, 19828.57196]
        data[4] = [8476.771156, 28928.43094, 22982.62624, 15389.00898, 8241.025623, 26490, 21062, 14102, 7599, 24240.4948, 19346.78276, 12953.28924]
        data[5] = [5690.36574, 21881.03011, 15850.37171, 10591.83506, 5515.419626, 20195.32122, 14678, 9816, 5124, 18810.45344, 13669.23392, 9155.194479]
        drawProvinceLiving(document.querySelector("#ProvinceLiving"), data);
    }
    if ($("#ProvinceStack").length) {
        drawProvinceStack(document.querySelector("#ProvinceStack"));
    }
}
/* [ charts ] */
function Living() {
    bigGraph();
    subGraph();
    /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }
}

window.onload = Living;