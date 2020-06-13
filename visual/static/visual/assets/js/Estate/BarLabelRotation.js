function BarLabelRotation(id,datasets){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    var label=["202004","202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902"]
    option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];
    var name=['房地产施工面积累计增长', '房地产新开工施工面积累计增长', '房地产竣工面积累计增长'];

    var color=[ '#006699','#227bbb', '#4cabce'];
    var highlight=["#f4d35e","#ee964b","#f95738"]

    option = {
        color: [ '#006699','#227bbb', '#4cabce'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },

            formatter: function (params, ticket, callback) {
                var res=params[1].axisValueLabel+"</br>";
                for(var i=0;i<3;++i){
                    res+=params[i].marker;
                    res+=params[i].seriesName;
                    res+=": ";
                    res+=params[i].value;
                    res+="%";
                    res+='</br>'
                }
                return res;
            }
        },
        legend: {
            y:30,
            itemWidth: 20,
            itemHeight: 16,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: name,
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
                data: label,
                inverse: true,
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                },
            }
        ],
        series: [
            {
                name: name[0],
                type: 'bar',
                barGap: 0,
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
                name: name[1],
                type: 'bar',
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
                name: name[2],
                type: 'bar',
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
        var sel=document.getElementById("monthSelect");
        sel.options[params.dataIndex].selected = true;

        var id="chart-radar";
        var labels=["新开工施工面积","竣工面积累计增长","施工面积累计增长","新开工施工面积累计增长","竣工面积","施工面积"];
        var datasets=radardata[params.dataIndex];
        radar(id,labels,datasets);
    });

}