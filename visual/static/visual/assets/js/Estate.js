

"use strict";

/* Styling */
const	glowLineLightColor = "#ffffff",
    glowLineWarningColor = "#2af270",
    glowLinePrimaryColor = "#2e6ee2";

/* [ charts ] */
function Estate() {

    /* ChartJS */
    if ($('#_chartJS_min').length > 0) {



        /* radar-chart */
        if($("#chart-radar").length) {
                var id="#chart-radar";
                var labels=['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'];
                var datasets=[ [30,27,24,26,27,25,30,22,27,30],[29,25,27,30,24,28,30,29,24,28]];
            radar(id,labels,datasets);

        }


        /* apexCharts-radialBar */
        if($("#chart-radialBar_B").length) {
            id="#chart-radialBar_B";
            labels=['商品房销售面积', '商品房现房销售面积','商品房销售额','商品住宅销售面积', '商品住宅现房销售面积','商品住宅销售额'];
            datasets=[20,18,23,47,10,15];
            radialBar(id,labels,datasets);
        }


        if($("#achart-line").length&&$("#achart-bar").length) {
            var id1="#achart-line";
            var id2="#achart-bar";
            LineBar(id1,id2);
        }


        /* initChart */
        let chartA_item = document.querySelectorAll('[data-chart="animated"]');
        initChart(chartA_item);

    }



    /* Preloader */
    let preloader = document.getElementsByClassName('preloaderWrapper');
    if (preloader.length > 0) {
        document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
    }




}



window.onload = Estate;