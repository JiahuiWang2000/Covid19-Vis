function PieDoughnut(id,choosemonth){


    var rawdata0=[10.8,10.9,6.6,5.4,4.8,4.7,4.0,4.8,4.5,4.3,4.3,3.5,3.1];
    var rawdata1=[5.0,4.8,0.0,4.4,3.5,3.3,3.4,3.4,3.1,4.4,3.4,2.9,4.6];
    var rawdata2=[10.1,8.8,8.4,8.7,8.2,8.4,8.4,8.2,8.1,8.5,8.5,8.5,8.6];

    var datasets=[rawdata0[choosemonth],rawdata1[choosemonth],rawdata2[choosemonth]];
    console.log(datasets);

    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}% '
        },
        color:['#003366', '#006699', '#4cabce'],
        legend: {
            y:"bottom",
            x:120,
            itemWidth: 20,
            itemHeight: 16,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['M0', 'M1', 'M2']
        },
        series: [
            {
                name: '供应量同比增长',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: datasets[0], name: 'M0'},
                    {value: datasets[1], name: 'M1'},
                    {value: datasets[2], name: 'M2'},
                ]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}