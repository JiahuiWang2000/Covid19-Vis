function drawFunnel(dom, dataset) { //dataset[2]，每一维的每个元素都是一个json，含有value和name
    var myChart = echarts.init(dom);
    //let valuearr = Object.keys(dataset.data).map(key => dataset.data[key]["value"]);
    option = null;
    let downwidth = 0.8 * d3.max(dataset[1]) / d3.max(dataset[0]) * 100;
    option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        toolbox: {
            orient: 'vertical',
            top: 'center'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['居民人均可支配工资性收入_累计值', '居民人均可支配经营净收入_累计值', '居民人均可支配财产净收入_累计值', '居民人均可支配转移净收入_累计值', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        },

        series: [{
                name: '收入',
                type: 'funnel',
                width: '80%',
                height: '30%',
                left: '10%',
                top: '5%',
                sort: 'ascending',
                data: dataset[0]
            },
            {
                name: '支出',
                type: 'funnel',
                width: downwidth + '%',
                height: '60%',
                left: (80 - downwidth) / 2 + 10 + '%',
                top: '35%',
                data: dataset[1]
            },
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            console.log(params);
        });
    }
}

function drawPolarBar(dom, dataset) { //要给当期值，累计值相减
    var myChart = echarts.init(dom);
    option = null;
    option = {
        chart: {
            id: "polar"
        },
        angleAxis: {
            axisLabel: {
                show: false
            },
        },
        tooltip: {
            trigger: 'axis',
        },
        radiusAxis: {
            type: 'category',
            data: ['2017', '2018', '2019', '2020'],
            z: 10,
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        polar: {},
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: '第一季度',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: '第二季度',
            stack: 'a'
        }, {
            type: 'bar',
            data: [3, 6, 13, 14],
            coordinateSystem: 'polar',
            name: '第三季度',
            stack: 'a'
        }, {
            type: 'bar',
            data: [5, 8, 23, 24],
            coordinateSystem: 'polar',
            name: '第四季度',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            console.log(params);
        });
    }
}

function drawChangeLine(dom, dataset) {
    var myChart = echarts.init(dom);
    option = null;
    option = {
        chart: {
            id: "changeline"
        },
        tooltip: {
            trigger: 'axis',
            position: function(pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['2020A', '2019D', '2019C', '2019B', '2019A', '2018D', '2018C', '2018B', '2018A', '2017D', '2017C', '2017B'].reverse()
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        series: [{
            data: dataset,
            type: 'line',
            areaStyle: {}
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            console.log(params);
        });
    }
}

function drawProvinceLiving(dom, dataset) {
    var myChart = echarts.init(dom);
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // legend: {
        //     data: ['居民人均可支配收入', '居民人均消费支出', '城镇人均可支配收入', '城镇人均消费支出', '农村人均可支配收入', '农村人均消费支出']
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['2020A', '2019D', '2019C', '2019B', '2019A', '2018D', '2018C', '2018B', '2018A', '2017D', '2017C', '2017B']
        }],
        series: [{
                name: '居民人均可支配收入',
                type: 'bar',
                stack: 'all',
                data: dataset[0]
            },
            {
                name: '居民人均消费支出',
                type: 'bar',
                stack: 'all',
                data: dataset[1].map(d => -d)
            },
            {
                name: '城镇人均可支配收入',
                type: 'bar',
                stack: 'town',
                data: dataset[2]
            },
            {
                name: '城镇人均消费支出',
                type: 'bar',
                stack: 'town',
                data: dataset[3].map(d => -d)
            }, {
                name: '农村人均可支配收入',
                type: 'bar',
                stack: 'v',
                data: dataset[4]
            }, {
                name: '农村人均消费支出',
                type: 'bar',
                stack: 'v',
                data: dataset[5].map(d => -d)
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            console.log(params);
        });
    }

}

function drawProvinceStack(dom, dataset) {
    var myChart = echarts.init(dom);
    option = null;
    // Generate data
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 20; i++) {
        var date = new Date(dottedBase += 1000 * 3600 * 24);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b)
        lineData.push(d + b);
    }


    // option
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    //show: true,
                    backgroundColor: '#333'
                }
            }
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        dataZoom: [{
                type: 'slider',
                xAxisIndex: 0,
                start: 10,
                end: 60
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 10,
                end: 60
            }
        ],
        series: [{
                name: '可支配收入',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            }, {
                name: '消费支出',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [
                                { offset: 0, color: '#14c8d4' },
                                { offset: 1, color: '#43eec6' }
                            ]
                        )
                    }
                },
                data: barData
            },

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}