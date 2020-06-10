function AreaStack(id,datasets){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};

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

        toolbox: {
            trigger: 'axis',//鼠标经过提示
            show:true,
            feature:{
                dataZoom: {
                    yAxisIndex:"none"
                },
                //其他功能性按钮查看官网进行增加，包括（显示数据，下载图片，改为柱状图等）
            }
        },
        dataZoom:
            [
                {
                    show: true,
                },
                {
                    type: 'inside',
                }
            ],
        color:["#0097c1","#004e71","#f4a261","#e76f51"],
        legend: [{
            y:5,
            itemWidth: 7,
            itemHeight: 7,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['2019年国家财政收入累计值', '2019年国家财政支出累计值']
        },
            {
                y:20,
                itemWidth: 7,
                itemHeight: 7,
                textStyle:{
                    color:'#89A7AF',
                },
                show: true,
                data: [ '2020年国家财政收入累计值', '2020年国家财政支出累计值']
            },

        ],

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
        xAxis: [
            {
                type: 'category',
               // boundaryGap: true,
                data: ["Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct","Nov.","Dec"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                }


            }
        ],
        yAxis: [
            {
                min:"dataMin",
                max:"dataMax",
                type: 'value',
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                }

            }

        ],
        series: [
            {
                name: '2019年国家财政收入累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[0]
            },
            {
                name: '2019年国家财政支出累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[1]
            },
            {
                name: '2020年国家财政收入累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[2]
            },
            {
                name: '2020年国家财政支出累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data:datasets[3]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}