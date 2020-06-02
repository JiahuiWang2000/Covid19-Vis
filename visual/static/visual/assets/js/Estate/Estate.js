

"use strict";

/* Styling */
const	glowLineLightColor = "#ffffff",
    glowLineWarningColor = "#2af270",
    glowLinePrimaryColor = "#2e6ee2";

/* [ charts ] */
function Estate() {

    /* ChartJS */
    if ($('#_chartJS_min').length > 0) {

        /*linechart*/
        if($("#achart-line").length) {
            var id="#achart-line";
            var datasets=[[2,3,4,5,6,7,8,9,10,11,12,13,14],[0,1,2,3,4,5,6,7,8,9,10,11,12]];
            LineChart(id,datasets);
        }


        /* line-chart */
        if($("#chart-line-bar").length) {
            id="#chart-line-bar";
            var dataset=[50,35,75,100,150,135,160,125,175,190,200,215,250];
            LineBar(id,dataset);
        }


        /* chart-sed */
        if($("#chart-sed").length) {
            id="#chart-sed";
            datasets=[[280,205,195,228,150,175,175,200,215,187,214,210,200],[124,190,225,198,150,175,175,210,215,187,214,210,190]];
            SedChart(id,datasets);
        }



        /* radar-chart */
        if($("#chart-radar").length) {
                var id="#chart-radar";
                var labels=["施工面积","新开工施工面积","竣工面积","施工面积累计增长","新开工施工面积累计增长","竣工面积累计增长"];
                var datasets=[ [30,27,24,26,27,25],[29,25,27,30,24,28],[25,26,30,29,28,28]];
            radar(id,labels,datasets);

        }


        /* apexCharts-radialBar */
        if($("#chart-radialBar_B").length) {
            id="#chart-radialBar_B";
            labels=['商品房销售面积', '商品房现房销售面积','商品房销售额','商品住宅销售面积', '商品住宅现房销售面积','商品住宅销售额'];
            datasets=[20,18,23,47,10,15];
            radialBar(id,labels,datasets);
        }


        /* ratiolBar */
        if($("#ratioBar").length) {
            datasets=[29,80,48];
            id="ratioBar";
            ratioBar(id,datasets[0]);
            id="ratioBar_2";
            ratioBar(id,datasets[1]);
            id="ratioBar_3";
            ratioBar(id,datasets[2]);



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