function radar(id,label,datasets){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    var name=["商品住宅","办公楼","商业营业用房"];
    option = null;
// Schema:
    var lineStyle = {
        normal: {
            width: 3,
            opacity: 1
        }
    };

    option = {
        backgroundColor: 'black',
        title: {
            show:false,
            text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        tooltip : {
            //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
            confine: true,
            enterable: true, //鼠标是否可以移动到tooltip区域内
        },
        legend: {
            bottom: 5,
            data: name,
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // }

        radar: {
            center:["57.5%","45%"],
            radius:100,
            indicator: [
                {name: label[0]},
                {name: label[1]},
                {name: label[2]},
                {name: label[3]},
                {name: label[4]},
                {name: label[5]}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: name[0],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[0]],
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.5
                }
            },
            {
                name: name[1],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[1]],
                symbol: 'none',
                itemStyle: {
                    color: '#B3E4A1'
                },
                areaStyle: {
                    opacity: 0.5
                }
            },
            {
                name: name[2],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[2]],
                symbol: 'none',
                itemStyle: {
                    color: 'rgb(238, 197, 102)'
                },
                areaStyle: {
                    opacity: 0.05
                }
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}