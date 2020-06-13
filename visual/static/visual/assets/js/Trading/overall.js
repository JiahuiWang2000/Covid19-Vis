function drawNestPie(dom, data, month) {
    var myChart = echarts.init(dom);
    option = null;
    var color = [
            ['#16415b', '#397EA8'],
            ['#3A7B5A', "#71C79C"],
            ['#2F6690', '#5EA5DB'],
            ['#ADE8F4', '#CFF7FF'],
            ['#48CAEF', '#66DEFF'],


        ]
        // var color = ['#16415b',
        //     '#3a7ba5', '#2f6690',
        //     '#ade8f4', '#48cae4'
        // ]
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
                color: new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [
                        { offset: 0, color: color[0][0] },
                        { offset: 1, color: color[0][1] }
                    ]
                ),
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
                color: [new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [
                        { offset: 0, color: color[1][0] },
                        { offset: 1, color: color[1][1] }
                    ]
                ), new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [
                        { offset: 0, color: color[2][0] },
                        { offset: 1, color: color[2][1] }
                    ]
                )],
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
                color: [new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [
                        { offset: 0, color: color[3][0] },
                        { offset: 1, color: color[3][1] }
                    ]
                ), new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [
                        { offset: 0, color: color[4][0] },
                        { offset: 1, color: color[4][1] }
                    ]
                )],
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
                fontSize: 15, //主题文字字体大小，默认为18px
            },
            left: 'center',
            bottom: '30px'

        },
        color: ['#bde9e8', '#62b6cb', '#1b4965', '#cae9ff', '#5fa8d3', '#133c55', '#386fa4', '#59a5d8', '#84d2f6', '#91e5f6', '#68d8d6', '#3dccc7'],
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
                // formatter: function(params) {
                //     return params.name.substr(0, params.name.length - 7)
                // }
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
                borderWidth: 1,

            },
            emphasis: {
                label: {
                    fontSize: 10
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