function radialBar(id,labels,datasets){
    new ApexCharts(
        document.querySelector(id),
        {
            chart: {
                height: 300,
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    track: {
                        background: "#27263b"
                    },
                    hollow: {
                        margin: 1,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            fontSize: '1rem',
                        },
                        value: {
                            fontSize: '.75rem',
                            color: 'rgba(255,255,255, .8)'
                        },

                    }
                }
            },
            colors: ['#0084ff', '#0084ff', '#2af270', '#0077B5'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#2af270', '#da2f69','#0084ff','#2af270'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            series: datasets,
            stroke: {
                lineCap: 'round'
            },
            labels: labels,
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }]
        }
    ).render();
}