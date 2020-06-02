
"use strict";

/* Styling */
const	glowLineLightColor = "#ffffff",
    glowLineWarningColor = "#2af270",
    glowLinePrimaryColor = "#2e6ee2";

/* [ charts ] */
function Finance() {

    /* ChartJS */
    if ($('#_chartJS_min').length > 0) {

        /*BarPolarStackRadial*/
        if($("#BarPolarStackRadial" ).length) {
            var id="BarPolarStackRadial" ;
            var datasets=[[10752.0,10530.3,11262.7,17026.0,13616.0,11438.0,17778.0,17926.0,17268.0,18995.0,14553.0],
                [22934.2,13099.1,15876.2,11975.0,25543.0,15106.0,14425.0,30515.0,17356.0,17038.0,25316.0]];
            BarPolarStackRadial(id,datasets);
        }

        /*AreaStack*/
        if($("#AreaStack" ).length) {
            id="AreaStack";
            var datasets=[[39104.0,53656.0,72651.0,89919.0,107846.0,125623.0,137061.0,150678.0,167704.0,178967.0,190382.0],
                [33314.0,58629.0,75667.0,93023.0,123538.0,137963.0,153069.0,178612.0,190587.0,206463.0,238874.0],
                [35232.0,45984.0,62133.0],
                [32350.0,55284.0,73596.0]];
            AreaStack(id,datasets);
        }



        /*BarLableRotation*/
        if($("#BarLabelRotation" ).length) {
            id="BarLabelRotation";
            var datasets=[[83022.21,88187.05,93249.16,77189.47,73973.82,73395.40,74129.75,73152.62,72689.25,72580.96,72798.46,73965.76,74941.58],
                [575050.29,552700.73,545531.79,576009.15,562486.52,558143.92,557137.95,556798.09,553043.11,567696.18,544355.64,540614.60,547575.54],
                [2080923.41,2030830.42,2023066.49,1986488.82,1961429.56,1945600.55,1952250.49,1935492.43,1919410.82,1921360.19,1891153.70,1884670.33,1889412.14]];
            BarLabelRotation(id,datasets);
        }

        /*PieDoughnut*/
        if($("#PieDoughnut" ).length) {
            id="PieDoughnut";


            var select=document.getElementById("monthSelect");

            select.onchange=function(){
                var id="PieDoughnut";
                var sel=document.getElementById("monthSelect");
                var index=sel.options[sel.options.selectedIndex].value;
                console.log(index);
                PieDoughnut(id,index);
            };


            datasets=[10.8,5.0,10.1];
            PieDoughnut(id,0);
        }

        /*BidirectionalBar*/
        if($("#BidirectionalBar" ).length) {
            id="BidirectionalBar";
            var datasets=[[165213108,191057245,183411013,169898075,178474843,179959655,176940637,161859791,172187571,179647719,165984372,131119542,178409792],
                [185146228,238267589,221337434,212916095,218123102,214786135,221553908,212835863,213845417,193481260,198655790,135200630,217566642]];
            BidirectionalBar(id,datasets);
        }

        /*PNbar*/
        if($("#PNbar" ).length) {
            id="PNbar";
            var rawdata=[[-1.0,-4.0,16.5,0.8,-6.5,-8.5,-5.6,-5.3,-7.3,-8.5,4.0,-7.6,-5.2,-1.6],
                [-6.6,-17.2,7.9,-1.3,-0.9,-3.2,-1.0,3.3,-1.3,1.1,-2.7,14.2,-20.8,9.3],
                [-4.0,-11.0,11.5,-0.3,-3.5,-5.7,-3.2,-0.7,-4.0,-3.4,0.4,3.1,-13.8,4.1]];

            var datasets1=[
                [0,0,16.5,0.8,0,0,0,0,0,0,4.0,0,0,0],
                [-1.0,-4.0,0,0,-6.5,-8.5,-5.6,-5.3,-7.3,-8.5,0,-7.6,-5.2,-1.6]
            ];
            var datasets2=[
                [0,0,7.9,0,0,0,0,3.3,0,1.1,0,14.2,0,9.3],
                [-6.6,-17.2,0,-1.3,-0.9,-3.2,-1.0,0,-1.3,0,-2.7,0,-20.8,0]
            ];
            var datasets3=[
                [0,0,11.5,0,0,0,0,0,0,0,0.4,3.1,0,4.1],
                [-4.0,-11.0,0,-0.3,-3.5,-5.7,-3.2,-0.7,-4.0,-3.4,0,0,-13.8,0]
            ];
            PNbar(id,datasets1,"进口总值同比增长");

            var button1 = document.getElementById("button1");
            button1.onclick = function () {
                PNbar(id,datasets1,"进口总值同比增长");
            }

            var button2 = document.getElementById("button2");
            button2.onclick = function () {
                PNbar(id,datasets2,"出口总值同比增长");
            }

            var button3 = document.getElementById("button3");
            button3.onclick = function () {
                PNbar(id,datasets3,"进出口总值同比增长");
            }
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



window.onload = Finance;