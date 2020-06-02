function BidirectionalBar(id,datasets) {
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);

var xData = ["202003","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902","201901"]
var lineData = [100, 100, 100, 100, 100, 100, 100]
var lastYearData = datasets[0];
var thisYearData = datasets[1];
var timeLineData = [0];
let legend=['进口', '出口'];
var background = "black"; //背景

let textColor = "#fff";
let lineColor="rgba(255,255,255,0.2)";
let colors = [{
    borderColor: "rgba(227,161,96,1)",
    start: "rgba(227,161,96,0.8)",
    end: "rgba(227,161,96,0.3)"
},
    {
        borderColor: "rgba(0,222,255,1)",
        start: "rgba(0,222,255,0.3)",
        end: "rgba(0,222,255,0.8)"
    },
];
let borderData = [];
let scale = 2;
borderData = xData.map(item => {
    return scale;
});
var option = {
    baseOption: {
        backgroundColor: background,
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                //type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: '2%',
            right: '5%',
            itemWidth: 20,
            itemHeight: 5,
            // itemGap: 343,
            icon: 'horizontal',
            textStyle: {
                color: '#ffffff',
                fontSize: 15,
            },
            data: legend
        },
        grid: [{
            show: false,
            left: '5%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '39%'
        }, {
            show: false,
            left: '52%',
            top: '16%',
            bottom: '7%',
            width: '2%'
        }, {
            show: false,
            right: '5%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '39%'
        }],
        xAxis: [{
            type: 'value',
            max:250000000,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: true,
                color: textColor,

                    formatter: function (value) {
                        var res = value.toString();
                        var numN1 = 0;
                        var numN2 = 1;
                        var num1=0;
                        var num2=0;
                        var t1 = 1;
                        for(var k=0;k<res.length;k++){
                            if(res[k]==".")
                                t1 = 0;
                            if(t1)
                                num1++;
                            else
                                num2++;
                        }

                        return res[0]+"."+res[1]+"E"+num1.toString();
                    }


            },
            splitLine:{
                show: true,
                lineStyle:{
                    color:lineColor
                }
            },

        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                formatter: function (value) {
                    var res = value.toString();
                    var numN1 = 0;
                    var numN2 = 1;
                    var num1=0;
                    var num2=0;
                    var t1 = 1;
                    for(var k=0;k<res.length;k++){
                        if(res[k]==".")
                            t1 = 0;
                        if(t1)
                            num1++;
                        else
                            num2++;
                    }

                    return res[0]+"."+res[1]+"E"+num1.toString();
                },
                show: true,
                color: textColor
            },
            splitLine:{
                show: true,
                lineStyle:{
                    color:lineColor
                }
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle:{
                    color:lineColor
                },
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                }

            },

            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: xData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                //y:5px,
                //padding:[5,0,10,0],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
                align: "center"

            },
            data: xData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle:{
                    color:lineColor
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            data: xData
        }],
        series: []

    },
    options: []
}

option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    series: [{
        name: "进口",
        type: "bar",
        barWidth: 15,
        stack: "1",
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: colors[0].start
                },
                    {
                        offset: 1,
                        color: colors[0].end
                    }
                ]),
            }
        },
        label: {
            normal: {
                show: false,
            }
        },
        data: lastYearData,
        animationEasing: "elasticOut"
    },
        {
            name: "出口",
            type: "bar",
            stack: "2",
            barWidth: 15,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: colors[1].start
                    },
                        {
                            offset: 1,
                            color: colors[1].end
                        }
                    ]),
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            data: thisYearData,
            animationEasing: "elasticOut"
        },

    ]
});

    myChart.setOption(option, true);


}