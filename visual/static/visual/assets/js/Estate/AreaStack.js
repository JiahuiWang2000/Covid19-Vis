function AreaStack(id,datasets){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};

    option = null;
    option = {
        title:{
            text:'房地产投资',
            x:'center',
            y:0,
            textStyle:{
                //文字颜色
                color:'#ccc',
                //字体风格,'normal','italic','oblique'
                fontStyle:'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight:'bold',
                //字体系列
                fontFamily:'sans-serif',
                //字体大小
                fontSize:18
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params, ticket, callback) {
                var res=params[1].axisValueLabel+"</br>";
                for(var i=0;i<2;++i){
                    res+=params[i].marker;
                    res+=params[i].seriesName;
                    res+=": ";
                    res+=params[i].value;
                    res+="亿元";
                    res+='</br>'
                }
                return res;
            },
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
        color:["#0097c1","#004e71","#e76f51","#f4a261"],
        legend: [{
            y:25,
            itemWidth: 7,
            itemHeight: 7,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['2019年房地产投资累计值', '2019年房地产住宅投资累计值']
        },
            {
                y:40,
                itemWidth: 7,
                itemHeight: 7,
                textStyle:{
                    color:'#89A7AF',
                },
                show: true,
                data: [ '2020年房地产投资累计值', '2020年房地产住宅投资累计值']
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
            y:80,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
               // boundaryGap: true,
                data: ["Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec"],
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
                name: '2019年房地产投资累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[0]
            },
            {
                name: '2019年房地产住宅投资累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[1]
            },
            {
                name: '2020年房地产投资累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[2]
            },
            {
                name: '2020年房地产住宅投资累计值',
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