function BarLabelRotation(id,datasets){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    var label=["202003","202002","202001","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903"]
    option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];

    var color=[ '#006699','#227bbb', '#4cabce'];
    var highlight=["#f4d35e","#ee964b","#f95738"]


    option = {
        color: [ '#006699','#227bbb', '#4cabce'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            y:20,
            itemWidth: 20,
            itemHeight: 16,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['M0', 'M1', 'M2'],
            selectedMode: 'single',
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                },
                data: label
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale:true,
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                },
            }
        ],
        series: [
            {
                name: 'M0',
                type: 'bar',
                barGap: 0,
                barWidth:15,
                //label: labelOption,
                data: datasets[0],
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            if(params.dataIndex!=0&&params.dataIndex!=1&&params.dataIndex!=2)
                                return color[0];
                            else return highlight[0];
                        }
                    }},

            },
            {
                name: 'M1',
                type: 'bar',
                barWidth:15,
                //label: labelOption,
                data: datasets[1],
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            if(params.dataIndex!=0&&params.dataIndex!=1&&params.dataIndex!=2)
                                return color[1];
                            else return highlight[1];
                        }
                    }},
            },
            {
                name: 'M2',
                type: 'bar',
                barWidth:15,
               // label: labelOption,
                data: datasets[2],
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            if(params.dataIndex!=0&&params.dataIndex!=1&&params.dataIndex!=2)
                                return color[2];
                            else return highlight[2];
                        }
                    }},
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    myChart.on('click',function(params){
        var id="PieDoughnut";
        PieDoughnut(id,params.dataIndex);
        var sel=document.getElementById("monthSelect");
        sel.options[params.dataIndex+1].selected = true;
    });

}