function drawLineBar(data_act, dombar) {
    var myChart = echarts.init(dombar);
    option = null;


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
        xAxis: {
            data: d3.range(36),
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
            name: '当期值',
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
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
                    show: true,
                    position: 'left'
                },
                data: dataset
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}


function drawStackLine(dom, dataset) { //dataset[0~4]表示12个月份的累计值，无数据则为NaN
    console.log(dataset);
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
        legend: {
            y: 15,
            itemWidth: 7,
            itemHeight: 7,
            textStyle: {
                color: '#89A7AF',
            },
            show: true,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
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
            data: ['2017', '2018', '2019', '2020']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        }],
        series: [{
                name: 'Jan',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[0]
            },
            {
                name: 'Feb',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[1]
            },
            {
                name: 'Mar',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[2]
            },
            {
                name: 'Apr',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[3]
            },
            {
                name: 'May',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[4]
            },
            {
                name: 'Jun',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[5]
            },
            {
                name: 'Jul',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[6]
            },
            {
                name: 'Aug',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[7]
            },
            {
                name: 'Sep',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[8]
            },
            {
                name: 'Oct',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[9]
            },
            {
                name: 'Nov',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[10]
            },
            {
                name: 'Dec',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: dataset[11]
            },

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}