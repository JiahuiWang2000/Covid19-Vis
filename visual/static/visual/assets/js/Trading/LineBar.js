function drawLineBar(data_act, dombar) {
    var myChart = echarts.init(dombar);
    option = null;


    // option
    option = {
        grid: {
            left: "13%",
        },
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
        xAxis: {
            data: [202004, 202003, 202002, 202001, 201912, 201911, 201910, 201909, 201908, 201907, 201906, 201905, 201904, 201903, 201902, 201901, 201812, 201811, 201810, 201809, 201808, 201807, 201806, 201805, 201804, 201803, 201802, 201801, 201712, 201711, 201710, 201709, 201708, 201707, 201706, 201705],
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
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100
            }
        ],
        series: [{
            name: '当期值',
            type: 'bar',
            //barWidth: 10,

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
            data: data_act
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawNegative(dom, dataset) {
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
        //     data: ['增长']
        // },
        label: {
            textStyle: { color: '#d27d39', fontSize: "18" }
        },
        dataZoom: [{
                type: 'slider',
                yAxisIndex: 0,
                start: 0,
                end: 90
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                start: 0,
                end: 90
            }
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            y: "20px",
            containLabel: true
        },
        xAxis: [{
            type: 'value',
                //  改变x轴颜
            //  axisLine: {
            //     lineStyle: {  color: 'white' }
            // },
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
                   
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: [202004, 202003, 202002, 202001, 201912, 201911, 201910, 201909, 201908, 201907, 201906, 201905, 201904, 201903, 201902, 201901, 201812, 201811, 201810, 201809, 201808, 201807, 201806, 201805, 201804, 201803, 201802, 201801, 201712, 201711, 201710, 201709, 201708, 201707, 201706, 201705]
        }],
        color: ['#abcdef'],
        series: [

            {
                name: '增长',
                type: 'bar',
                stack: '总量',
                label: {
                    show: false,
                },

                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: function(params) {
                            if (params.dataIndex != 0 && params.dataIndex != 1 && params.dataIndex != 2 && params.dataIndex != 3)
                                return new echarts.graphic.LinearGradient(
                                    0, 0, 1, 1, [
                                        { offset: 0, color: '#5d93dc' },
                                        { offset: 1, color: '#A2BEE1' }
                                    ])
                            return new echarts.graphic.LinearGradient(
                                1, 1, 0, 0, [
                                    { offset: 0, color: '#f54545' },
                                    { offset: 1, color: '#F78F8F' }
                                ]
                            )
                        }
                    }
                },

                data: dataset,
                // itemStyle: {
                //     //通常情况下：
                //     normal: {
                //         //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //         color: function(params) {
                //             if (params.dataIndex != 0 && params.dataIndex != 1 && params.dataIndex != 2 && params.dataIndex != 3)
                //                 return "#5d93dc";
                //             else return "#f54545";
                //         }
                //     }
                // },
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}


function drawStackLine(dom, dataset) { //dataset[0~4]表示12个月份的累计值，无数据则为NaN
    var myChart = echarts.init(dom);
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        color: ["#0077b6", "#00b4d8", "#48cae4", "#e76f51", ],
        legend: {
            y: 15,
            itemWidth: 7,
            itemHeight: 7,
            textStyle: {
                color: '#89A7AF',
            },
            show: true,
            data: ['2017', '2018', '2019', '2020']

        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        }],
        series: [{
                name: '2017',
                type: 'line',
                areaStyle: {},
                data: dataset[0]
            },
            {
                name: '2018',
                type: 'line',
                areaStyle: {},
                data: dataset[1]
            },
            {
                name: '2019',
                type: 'line',
                areaStyle: {},
                data: dataset[2]
            },
            {
                name: '2020',
                type: 'line',
                areaStyle: {},
                data: dataset[3]
            }

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}