var array=[];
var radialbardata=[];
var ratiobardata=[];
var radardata=[];


"use strict";

/* Styling */
const	glowLineLightColor = "#ffffff",
    glowLineWarningColor = "#2af270",
    glowLinePrimaryColor = "#2e6ee2";

/* [ charts ] */
function Estate(province) {
    var sel=document.getElementById("monthSelect");
    sel.options[0].selected = true;

    var rad0=document.getElementById("radio0");
    var rad1=document.getElementById("radio1");
    var rad2=document.getElementById("radio2");
    rad0.checked=true;
    rad1.checked=false;
    rad2.checked=false;

    var rad0=document.getElementById("radio00");
    var rad1=document.getElementById("radio11");
    var rad2=document.getElementById("radio22");
    rad0.checked=true;
    rad1.checked=false;
    rad2.checked=false;


    $.ajax({
        url:"getdata",
        type:'GET',
        data:{"province":province},
        success:function(msg){
            //consoleg(1111);


            array=msg.data;




            setTimeout(function () {

                radardata.length=0;
                radardata=array[2];

                ratiobardata.length=0;
                ratiobardata=array[3];

                radialbardata.length=0;
                radialbardata=array[4];
            /* ChartJS */
            if ($('#_chartJS_min').length > 0) {

                /*AreaStack*/
                if($("#AreaStack" ).length) {
                    id="AreaStack";
                    var datasets=array[0];
                    AreaStack(id,datasets);
                }

                /*BarLableRotation*/
                if($("#BarLabelRotation" ).length) {
                    id="BarLabelRotation";
                    var datasets=array[1];
                    BarLabelRotation(id,datasets);
                }

                /* chart-sed */
                if($("#chart-sed").length) {
                    id="#chart-sed";
                    datasets=[[280,205,195,228,150,175,175,200,215,187,214,210,200],[124,190,225,198,150,175,175,210,215,187,214,210,190]];
                    SedChart(id,datasets);
                }



                /* radar-chart */
                if($("#chart-radar").length) {
                    var id="chart-radar";
                    var labels=["新开工施工面积","竣工面积累计增长","施工面积累计增长","新开工施工面积累计增长","竣工面积","施工面积"];
                    var datasets=array[2][0];
                    radar(id,labels,datasets);


                    var select=document.getElementById("monthSelect");

                    select.onchange=function(){
                        var sel=document.getElementById("monthSelect");
                        var index=sel.options[sel.options.selectedIndex].value;
                       // console.log(index);
                        var id="chart-radar";
                        var labels=["新开工施工面积","竣工面积累计增长","施工面积累计增长","新开工施工面积累计增长","竣工面积","施工面积"];
                        var datasets=radardata[index];
                        radar(id,labels,datasets);
                    };

                }




                /* ratiolBar */
                if($("#ratioBar").length) {
                    datasets=array[3][0];
                    id="ratioBar";
                    ratioBar(id,datasets[0],"商品住宅销售面积");
                    id="ratioBar_2";
                    ratioBar(id,datasets[1]," 商品房销售面积");


                    var radio00=document.getElementById("radio00");
                    radio00.onclick=function(){
                        id1="ratioBar";
                        id2="ratioBar_2";
                        datasets=ratiobardata[0];
                        ratioBar(id1,datasets[0],"商品住宅销售面积");
                        ratioBar(id2,datasets[1]," 商品房销售面积");
                    }

                    var radio11=document.getElementById("radio11");
                    radio11.onclick=function(){
                        id1="ratioBar";
                        id2="ratioBar_2";
                        datasets=ratiobardata[1];
                        ratioBar(id1,datasets[0],"商品住宅销售面积");
                        ratioBar(id2,datasets[1]," 商品房销售面积");
                    }

                    var radio22=document.getElementById("radio22");
                    radio22.onclick=function(){
                        id1="ratioBar";
                        id2="ratioBar_2";
                        datasets=ratiobardata[2];
                        ratioBar(id1,datasets[0],"商品住宅销售面积");
                        ratioBar(id2,datasets[1]," 商品房销售面积");
                    }



                }


                /* apexCharts-radialBar */
                if($("#chart-radialBar_B").length) {
                    id="chart-radialBar_B";
                    labels=['商品房销售面积', '商品房现房销售面积','商品住宅现房销售面积','商品住宅销售额','商品房销售额','商品住宅销售面积'];


                    var radio1=document.getElementById("radio0");
                    radio1.onclick=function(){
                        id="chart-radialBar_B";
                        labels=['商品房销售面积', '商品房现房销售面积','商品住宅现房销售面积','商品住宅销售额','商品房销售额','商品住宅销售面积'];
                        datasets=radialbardata[0];
                        radialBar(id,labels,datasets);
                    }

                    var radio1=document.getElementById("radio1");
                    radio1.onclick=function(){
                        id="chart-radialBar_B";
                        labels=['商品房销售面积', '商品房现房销售面积','商品住宅现房销售面积','商品住宅销售额','商品房销售额','商品住宅销售面积'];
                        datasets=radialbardata[1];
                        radialBar(id,labels,datasets);
                    }

                    var radio1=document.getElementById("radio2");
                    radio1.onclick=function(){
                        id="chart-radialBar_B";
                        labels=['商品房销售面积', '商品房现房销售面积','商品住宅现房销售面积','商品住宅销售额','商品房销售额','商品住宅销售面积'];
                        datasets=radialbardata[2];
                        radialBar(id,labels,datasets);
                    }



                    datasets=array[4][0];
                    radialBar(id,labels,datasets);
                }


            }

            /* Preloader */
            let preloader = document.getElementsByClassName('preloaderWrapper');
            if (preloader.length > 0) {
                document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
            }


            }, 100);
        }
    })





}



