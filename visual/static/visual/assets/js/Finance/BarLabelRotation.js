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


    option = {
        color: ['#003366', '#006699', '#4cabce'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            y:"top",
            left:320,
            itemWidth: 20,
            itemHeight: 16,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['M0', 'M1', 'M2']
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
                restore: {show: true},
                saveAsImage: {show: true}
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
                //label: labelOption,
                data: datasets[0]
            },
            {
                name: 'M1',
                type: 'bar',
                //label: labelOption,
                data: datasets[1]
            },
            {
                name: 'M2',
                type: 'bar',
               // label: labelOption,
                data: datasets[2]
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