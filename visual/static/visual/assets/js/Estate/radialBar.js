var myradiaChart;
function radialBar(id,labels,datasets){
    var dom = document.getElementById(id);

    if (myradiaChart != null && myradiaChart != "" && myradiaChart != undefined) {
        myradiaChart.dispose();
    }




    myradiaChart = echarts.init(dom);
    var app = {};
    //console.log(datasets)


    option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '0%',
            top: '0%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                //console.log(params)
                res="";
                res+=params[0].axisValue;
                res+="下降率: ";
                res+=params[0].value;
                res+="%";
                return res;
            }
        },
        backgroundColor: "black",
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: labels
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function(value) {
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '万';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: [60,60,60,60,60,60]
        }],
        series: [{
            name: labels[0],
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 10,
            data: datasets
        },
            {
                name: '背景',
                type: 'bar',
                barWidth: 10,
                barGap: '-100%',
                data: [60,60,60,60,60,60],
                itemStyle: {
                    normal: {
                        color: 'rgba(24,31,68,1)',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };

    if (option && typeof option === "object") {
        myradiaChart.setOption(option, true);
    }
}