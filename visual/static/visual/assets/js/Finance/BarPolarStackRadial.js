function BarPolarStackRadial(id,datasets){
    console.log(datasets);
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    var highlight=["#f4a261","#e76f51"];
    var color=["#90e0ef", "#48cae4"];
    option = null;
    option = {

        angleAxis: {
            type: 'category',
            axisLabel : {
                textStyle: {
                    color: '#89A7AF',
                }
            },
            data: ["202003","202002","201911","201910","201909","201908","201907","201906","201905","201904","201903"]
        },
        radiusAxis: {
        },
        polar: {
            center: ['50%', '45%'],
            radius:['0%', '72%'],
        },

        tooltip: {
            trigger: 'item',
            //formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color:["#90e0ef", "#48cae4"],
        series: [{
            type: 'bar',
            data: datasets[0],
            itemStyle: {
                //通常情况下：
                normal:{
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        if(params.dataIndex!=0&&params.dataIndex!=1)
                        return color[0];
                        else return highlight[0];
                    }
                }},
            name:"国家财政收入当期值（亿元）",
            coordinateSystem: 'polar',
            stack: 'a'
        }
        , {
            type: 'bar',
            data: datasets[1],
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            if(params.dataIndex!=0&&params.dataIndex!=1)
                                return color[1];
                            else return highlight[1];
                        }
                    }},
            name:"国家财政支出当期值（亿元）",
            coordinateSystem: 'polar',
            stack: 'a'
        }, ],
        legend: {
            y:"bottom",
            itemWidth: 7,
            itemHeight: 7,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ["国家财政收入当期值（亿元）","国家财政支出当期值（亿元）"]
        }
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}