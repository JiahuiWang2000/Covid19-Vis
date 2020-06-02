function LineChart(id,datasets){


    /* chart-apex */


    var options_act = {
        chart: {
            id: "chart2",
            type: "area",
            height: 350,
            width: 800,
            foreColor: "#ccc",
            toolbar: {
                autoSelected: "pan",
                show: false
            }
        },
        colors: ["#2af270"],
        stroke: {
            width: 3
        },
        grid: {
            borderColor: "#2af270",
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 1,
                gradientToColors: ['#18c3ac', '#18c3ac'],
                opacityFrom: 0.55,
                opacityTo: 0.55,
                stops: [0, 100]
            }
        },
        markers: {
            size: 5,
            colors: ["#01001a"],
            strokeColor: "#2af270",
            strokeWidth: 3
        },
        series: [
            {   name:"房地产投资累计值（亿元）",
                data:datasets[0]
            },
            {   name:"房地产住宅投资累计值（亿元）",
                data:datasets[1]
            }
        ],
        tooltip: {
            theme: "dark"
        },
        xaxis: {
            min:0,
            max:13
            //type: "datetime"
        },
        yaxis: {
            min: 0,
            max:15,
            tickAmount: 4
        }
    }


    let achart = new ApexCharts(
        document.querySelector(id),
        options_act
    );
    achart.render();

}


function LineBar(id,dataset){
    var chartLineLG = document.querySelector(id).getContext("2d"),
        gradientStroke = chartLineLG.createLinearGradient(700, 0, 100, 0),
        gradientgridLines = chartLineLG.createLinearGradient(700, 0, 100, 0),
        gradientFill = chartLineLG.createLinearGradient(0, 0, 0, 400);
    gradientStroke.addColorStop(0, 'rgba(32, 73, 219, .6)');
    gradientStroke.addColorStop(.5, 'rgba(255, 255, 255, 1)');
    gradientStroke.addColorStop(1, 'rgba(42, 242, 112, .4)');
    gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
    gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
    gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
    gradientFill.addColorStop(0, "rgba(32, 73, 219, 1)");
    gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
    new Chart(chartLineLG, {
        type: 'bar',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
            datasets: [{
                type: 'line',
                borderColor: gradientStroke,
                pointBorderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                borderWidth: "2",
                data: dataset,
                label: '房地产施工面积累计值（万平方米）',
                name:"房地产施工面积累计值（万平方米）",
                fill: false,
                radius: 0
            }, {
                type: 'bar',
                hoverBackgroundColor: gradientFill,
                backgroundColor: gradientFill,
                data: dataset,
                label: '房地产施工面积累计值（万平方米）',
                fill: gradientFill
            }
            ]},
        options: {
            spanGaps: false,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.1,
                    gridLines: {
                        color: "rgba(42, 242, 112, 0)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: gradientgridLines,
                        zeroLineColor: "rgba(42, 242, 112, .7)",
                    }
                }]
            },
            title: {
                display: true
            },
            plugins: {
                labels: false
            }
        }
    });
}


function SedChart(id,datasets){
    let chart_sed = document.querySelector(id).getContext("2d"),
        chart_sed_gradientgridLines = chart_sed.createLinearGradient(700, 0, 100, 0),
        chart_sed_gradientFill_03 = chart_sed.createLinearGradient(0, 100, 0, 200),
        chart_sed_gradientFill_02 = chart_sed.createLinearGradient(0, 100, 0, 200),
        chart_sed_gradientFill = chart_sed.createLinearGradient(0, 100, 0, 200);
    chart_sed_gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
    chart_sed_gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
    chart_sed_gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
    chart_sed_gradientFill_03.addColorStop(0, "rgba(221, 235, 247, 1)");
    chart_sed_gradientFill_03.addColorStop(1, "rgba(49, 118, 179, 1)");
    chart_sed_gradientFill_02.addColorStop(0, "rgba(225, 73, 125, 1)");
    chart_sed_gradientFill_02.addColorStop(1, "rgba(212, 7, 77, 1)");
    chart_sed_gradientFill.addColorStop(0, "rgba(207, 245, 255, 1)");
    chart_sed_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
    new Chart(chart_sed, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13'],
            datasets: [{
                type: 'bar',
                hoverBackgroundColor: chart_sed_gradientFill,
                backgroundColor: chart_sed_gradientFill,
                data: datasets[0],
                label: '房地产新开工施工面积（万平方千米）',
                fill: chart_sed_gradientFill
            },
                {
                    type: 'bar',
                    hoverBackgroundColor:  chart_sed_gradientFill_03,
                    backgroundColor: chart_sed_gradientFill_03,
                    data: datasets[1],
                    label: '房地产竣工面积（万平方千米）',
                    fill: chart_sed_gradientFill
                }
            ]
        },
        options: {
            spanGaps: false,
            maintainAspectRatio: false,
            tooltips: {
                intersect: false
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.25,
                    gridLines: {
                        color: "rgba(42, 242, 112, 0)",
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: "rgba(42, 242, 112, 0)",
                        zeroLineColor: "rgba(42, 242, 112, 0)",
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            title: {
                display: true
            },
            plugins: {
                labels: false
            }
        }
    });
}