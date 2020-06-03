function drawNestPie(dom, data, month) {
    var myChart = echarts.init(dom);
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 15,
            top: 20,
            data: ['社会消费品零售总额_当期值', '城镇社会消费品零售总额_当期值', '乡村社会消费品零售总额_当期值', '餐饮收入_当期值', '商品零售_当期值'],
            textStyle: {  color: '#acacac' }
        },
        series: [{
                name: '总额',
                type: 'pie',
                // selectedMode: 'single',
                radius: [0, '10%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    data[0][month]
                ]
            },
            {
                name: '城乡',
                type: 'pie',
                // selectedMode: 'single',
                radius: ['30%', '50%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    data[1][month], data[2][month]
                ]
            },

            {
                name: '餐饮商品',
                type: 'pie',
                radius: ['60%', '85%'],
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },

                data: [
                    data[3][month], data[4][month]
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            updateLineBar(params.name);
        });
    }
}

function drawFunnel(dom, dataset) {
    var myChart = echarts.init(dom);
    let valuearr = Object.keys(dataset.data).map(key => dataset.data[key]["value"]);
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        title: {
            text: "限上单位商品零售类值",
            textStyle: { //标题内容的样式
                color: 'white', //京东红
                fontStyle: 'normal', //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                fontWeight: "lighter", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                fontFamily: "songti", //主题文字字体，默认微软雅黑
                fontSize: 20, //主题文字字体大小，默认为18px
            },
            left: 'center',
            bottom: '20px'

        },
        // legend: {
        //     data: dataset.name
        // },

        series: [{
            name: '限上单位商品零售类当期值',
            type: 'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: d3.min(valuearr),
            max: d3.max(valuearr),
            minSize: '0',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
                show: false,
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: dataset.data
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            updateLineBar(params.name);
        });
    }
}