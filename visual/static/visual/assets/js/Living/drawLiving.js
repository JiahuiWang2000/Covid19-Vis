function drawFunnel(dom, dataset) { //dataset[2]，每一维的每个元素都是一个json，含有value和name
    var myChart = echarts.init(dom);
    //let valuearr = Object.keys(dataset.data).map(key => dataset.data[key]["value"]);
    option = null;
    let downwidth = 0.8 * d3.max(dataset[1].map(d => d['value'])) / d3.max(dataset[0].map(d => d['value'])) * 100;
    option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        title: { // 图表标题
            text: '收支明细', // 标题文本内容
            left: '5%', // 标题距容器左侧5%
            top: '5%', // 标题距容器顶部5%
            textStyle: { // 标题文本样式
                color: '#acacac', // 字体颜色
                fontSize: 15, // 字体大小
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: dataset[0].map(d => d['name']).concat(dataset[1].map(d => d['name']))
        // },

        series: [{
                name: '收入',
                type: 'funnel',
                width: '80%',
                height: '30%',
                left: '10%',
                top: '5%',
                sort: 'ascending',
                label: {
                    show: true,
                    formatter: function(params) {
                        return params.name.substr(4, params.name.length - 8);
                    },
                    //position: 'inside'
                },
                data: dataset[0],
                color: ['#0377a8', '#118fb0', '#1fa6b8', '#2fb5c7'],
            },
            {
                name: '支出',
                type: 'funnel',
                width: downwidth + '%',
                height: '60%',
                left: (80 - downwidth) / 2 + 10 + '%',
                top: '35%',
                label: {
                    show: true,
                    //position: 'inside'
                    formatter: function(params) {
                        return params.name.substr(4, params.name.length - 10);
                    },

                },
                data: dataset[1],
                color: ['#3ec4d6', '#51ccd1', '#63d4cc', '#84a98c',
                    '#47c8e3', '#00b4d8', '#0095c6', '#0077b6',
                ]
            },
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


function drawChangeLine(dom, data1, data2, data3, data4) {
    var linecolor = ["#f4d35e", "#ee964b"]
    var barcolor1 = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [
            { offset: 0, color: '#68d8d6' },
            { offset: 1, color: '#037171' }
        ]
    );
    var barcolor2 = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [
            { offset: 0, color: '#ade8f4' },
            { offset: 1, color: '#00b4d8' }
        ]
    );
    var highlight1 = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [
            { offset: 0, color: '#ffb600' },
            { offset: 1, color: '#ff4800' }
        ]
    );
    var highlight2 = new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [
            { offset: 0, color: '#ffe94e' },
            { offset: 1, color: '#fdb833' }
        ]
    );


    var myChart = echarts.init(dom);
    option = null;
    option = {
        title: { // 图表标题
            text: '累计增长与当期值', // 标题文本内容
            left: '5%', // 标题距容器左侧5%
            top: '5%', // 标题距容器顶部5%
            textStyle: { // 标题文本样式
                color: '#acacac', // 字体颜色
                fontSize: 15, // 字体大小
            }
        },
        grid: {
            right: "18%"
        },
        chart: {
            id: "changeline"
        },
        tooltip: {
            trigger: 'axis',
            // position: function(pt) {
            //     return [pt[0], '10%'];
            // }
        },
        xAxis: {
            type: 'category',
            //boundaryGap: false,
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['2020A', '2019D', '2019C', '2019B', '2019A', '2018D', '2018C', '2018B', '2018A', '2017D', '2017C'].reverse()
        },
        yAxis: [{
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        }, {
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        }],
        series: [{
            name: "人均可支配收入_累计增长",
            data: data1,
            type: 'line',
            color: linecolor[0],
            yAxisIndex: 0,
        }, {
            name: "人均消费支出_累计增长",
            data: data2,
            type: 'line',
            color: linecolor[1],
            yAxisIndex: 0,
        }, {
            name: "人均可支配收入_当期值",
            data: data3,
            itemStyle: {
                //通常情况下：
                normal: {
                    barBorderRadius: 3,
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function(params) {
                        if (params.dataIndex != 10)
                            return barcolor1;
                        else return highlight1;
                    }
                }
            },
            type: 'bar',

            yAxisIndex: 1,
            areaStyle: {}
        }, {
            name: "人均消费支出_当期值",
            data: data4,

            itemStyle: {
                //通常情况下：
                normal: {
                    barBorderRadius: 3,
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function(params) {
                        if (params.dataIndex != 10)
                            return barcolor2;
                        else return highlight2;
                    }
                }
            },
            type: 'bar',
            yAxisIndex: 1,
            areaStyle: {}
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawProvinceLiving(dom, dataset) {
    var myChart = echarts.init(dom);
    option = null;
    var color = ["#0077b6", "#2f4554", "#61a0a8",
        "#d48265", "#91c7ae", "#739e83",
    ]
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            orient: 'horizontal',
            left: 125,
            top: 20,
            textStyle: {  color: '#acacac' },
            data: ['居民人均可支配收入', '居民人均消费支出', '城镇人均可支配收入', '城镇人均消费支出', '农村人均可支配收入', '农村人均消费支出']
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['2020A', '2019D', '2019C', '2019B', '2019A', '2018D', '2018C', '2018B', '2018A', '2017D', '2017C']
        }],
        series: [{
                name: '居民人均可支配收入',
                type: 'bar',
                stack: 'all',
                data: dataset[0],
                color: color[0]
            },
            {
                name: '居民人均消费支出',
                type: 'bar',
                stack: 'all',
                data: dataset[1].map(d => -d),
                color: color[1]
            },
            {
                name: '城镇人均可支配收入',
                type: 'bar',
                stack: 'town',
                data: dataset[2],
                color: color[2]
            },
            {
                name: '城镇人均消费支出',
                type: 'bar',
                stack: 'town',
                data: dataset[3].map(d => -d),
                color: color[3]
            }, {
                name: '农村人均可支配收入',
                type: 'bar',
                stack: 'v',
                data: dataset[4],
                color: color[4]
            }, {
                name: '农村人均消费支出',
                type: 'bar',
                stack: 'v',
                data: dataset[5].map(d => -d),
                color: color[5]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            var name = params.seriesName.substr(0, 2);
            updateLeftDown(name);
            updateRightUp(name);
            updateRightDown(name);
        });
    }

}

function drawProvinceStack(dom, income, disburse) {
    var myChart = echarts.init(dom);
    option = null;
    // Generate data
    var category = [];


    // option
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    //show: true,
                    backgroundColor: '#333'
                }
            }
        },
        // legend: {
        //     data: ['人均可支配收入', '人均消费支出'],
        //     textStyle: {
        //         color: '#ccc'
        //     }
        // },
        grid: {
            left: "15%"
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            data: ['2018C', '2018D', '2019A', '2019B', '2019C', '2019D', '2020A']
        },
        yAxis: {
            splitLine: { show: true },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        dataZoom: [{
                type: 'slider',
                xAxisIndex: 0,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100
            }
        ],
        series: [{
                name: '人均可支配收入同比增长',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                data: income,
                color: "#40ffef"
            }, {
                name: '人均消费支出同比增长',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 10,
                color: "#00b4d8",
                //    itemStyle: {
                //         normal: {
                //             barBorderRadius: 5,
                //             color: function(params) {
                //                 if (params.dataIndex != 10)
                //                     return new echarts.graphic.LinearGradient(
                //                         0, 0, 0, 1, [
                //                             { offset: 0, color: '#ade8f4' },
                //                             { offset: 1, color: '#00b4d8' }
                //                         ]
                //                     );
                //                 else return new echarts.graphic.LinearGradient(
                //                     0, 0, 0, 1, [{
                //                             offset: 0,
                //                             color: '#ffb600'
                //                         },
                //                         {
                //                             offset: 1,
                //                             color: '#ff4800'
                //                         }
                //                     ]
                //                 );
                //             },


                //         }
                //     },
                data: disburse
            },

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawChinamap(dom) {
    var data7 = [
        { name: '北京', value: 593 },
        { name: '天津', value: 192 },
        { name: '上海', value: 672 },
        { name: '重庆', value: 579 },
        { name: '河北', value: 328 },
        { name: '河南', value: 1276 },
        { name: '云南', value: 185 },
        { name: '辽宁', value: 149 },
        { name: '黑龙江', value: 945 },
        { name: '湖南', value: 1019 },
        { name: '安徽', value: 991 },
        { name: '山东', value: 790 },
        { name: '新疆', value: 76 },
        { name: '江苏', value: 653 },
        { name: '浙江', value: 1268 },
        { name: '江西', value: 937 },
        { name: '湖北', value: 68135 },
        { name: '广西', value: 254 },
        { name: '甘肃', value: 139 },
        { name: '山西', value: 198 },
        { name: '内蒙古', value: 232 },
        { name: '陕西', value: 308 },
        { name: '吉林', value: 155 },
        { name: '福建', value: 358 },
        { name: '贵州', value: 147 },
        { name: '广东', value: 1593 },
        { name: '青海', value: 18 },
        { name: '西藏', value: 1 },
        { name: '四川', value: 564 },
        { name: '宁夏', value: 75 },
        { name: '海南', value: 169 },
        { name: '香港', value: 1079 },
        { name: '澳门', value: 45 }
    ]
    option = {
        tooltip: {
            formatter: function(params, ticket, callback) {
                return params.seriesName + '<br />' + params.name + '：' + params.value
            }
        },
        visualMap: {
            min: 2,
            max: 1700,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            textStyle: {
                color: '#fff',
            },
            inRange: {
                color: ['#b1dee3', '#ea3e00']
            },
            show: false
        },
        geo: {
            map: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                    areaColor: '#F3B329',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: [{
            name: "5.29 确诊人数",
            type: 'map',
            geoIndex: 0,
            data: data7
        }]
    };

    var myChart = echarts.init(dom);
    myChart.setOption(option, true);
    myChart.on('click', function(params) {
        province = params.name;
        updateProvince(province);
    });

}

function drawPolarBar(dom, dataset) { //要给当期值，累计值相减
    var myChart = echarts.init(dom);
    option = null;
    option = {
        chart: {
            id: "polar"
        },
        angleAxis: {
            axisLabel: {
                show: false
            },
        },
        tooltip: {
            trigger: 'axis',
        },
        radiusAxis: {
            type: 'category',
            data: ['2017', '2018', '2019', '2020'],
            z: 10,
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        polar: {},
        series: [{
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: '第一季度收入',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 8],
                coordinateSystem: 'polar',
                name: '第二季度收入',
                stack: 'a'
            }, {
                type: 'bar',
                data: [3, 6, 13, 14],
                coordinateSystem: 'polar',
                name: '第三季度收入',
                stack: 'a'
            }, {
                type: 'bar',
                data: [5, 8, 23, 24],
                coordinateSystem: 'polar',
                name: '第四季度收入',
                stack: 'a'
            },
            {
                type: 'bar',
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: '第一季度支出',
                stack: 'b'
            }, {
                type: 'bar',
                data: [2, 4, 6, 8],
                coordinateSystem: 'polar',
                name: '第二季度支出',
                stack: 'b'
            }, {
                type: 'bar',
                data: [3, 6, 13, 14],
                coordinateSystem: 'polar',
                name: '第三季度支出',
                stack: 'b'
            }, {
                type: 'bar',
                data: [5, 8, 23, 24],
                coordinateSystem: 'polar',
                name: '第四季度支出',
                stack: 'b'
            }
        ],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);

    }
}