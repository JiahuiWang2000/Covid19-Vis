function radar(id,labels,datasets){
    let chart_radar = document.querySelector(id), // chart ID
        chart_radar_chartLineLG = chart_radar.getContext("2d"),
        chart_radar_gradientFill = chart_radar_chartLineLG.createRadialGradient(275,250,15,290,260, 300),
        chart_radar_gradientFill_02 = chart_radar_chartLineLG.createRadialGradient(275,250,15,290,260, 300);
        chart_radar_gradientFill_03 = chart_radar_chartLineLG.createRadialGradient(275,250,15,290,260, 300);

    chart_radar_gradientFill.addColorStop(0, "rgba(42, 242, 112, .4)");
    chart_radar_gradientFill.addColorStop(.5, "rgba(101, 249, 153, .5)");
    chart_radar_gradientFill.addColorStop(1, "rgba(42, 242, 112, .4)");

    chart_radar_gradientFill_02.addColorStop(0, "rgba(36, 202, 241, .4)");
    chart_radar_gradientFill_02.addColorStop(.5, "rgba(126, 224, 249, .4)");
    chart_radar_gradientFill_02.addColorStop(1, "rgba(36, 202, 241, .4)");

    chart_radar_gradientFill_03.addColorStop(0, "rgba(220,159,180,0.4)");
    chart_radar_gradientFill_03.addColorStop(.5, "rgba(244,167,185,0.4)");
    chart_radar_gradientFill_03.addColorStop(1, "rgba(187,187,187,0.4)");

    new Chart(chart_radar_chartLineLG, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: chart_radar_gradientFill_02,
                borderColor: "rgba(36, 202, 241, 1)",
                borderWidth: "2",
                data:datasets[0],
                name:"商品住宅",
                label: "商品住宅",
                pointBackgroundColor: "rgba(1, 0, 25, 1)",
                pointBorderColor: "#ffffff"
            }, {
                backgroundColor: chart_radar_gradientFill_03,
                borderColor: "#d22f67",
                borderWidth: "2",
                data: datasets[1],
                name:"办公楼",
                label: "办公楼",
                pointBackgroundColor: "rgba(1, 0, 25, 1)",
                pointBorderColor: "#ff5f6d"
            },
                {
                    backgroundColor: chart_radar_gradientFill,
                    borderColor: "#2af270",
                    borderWidth: "2",
                    name:"商业营业用房",
                    label: "商业营业用房",
                    data: datasets[2],
                    pointBackgroundColor: "rgba(1, 0, 25, 1)",
                    pointBorderColor: "#2af270"
                }

            ]
        },
        options: {
            spanGaps: false,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: false
            },
            scale: {
                angleLines: {
                    color: 'rgba(255, 255, 255, .15)'
                },
                gridLines: {
                    color: 'rgba(255, 255, 255, .15)'
                },
                ticks: {
                    showLabelBackdrop: true,
                    backdropColor: "rgba(5,1,54, .95)",
                    min: 20
                }
            }
        }
    });

}