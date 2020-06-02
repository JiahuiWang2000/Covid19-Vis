function drawNestPie(dom, data) { //data[3]，每一个都是一个json，[{"value":123,"name":"城镇"}]
    //data = { "nodes": [{ "name": "社会消费品零售总额_当期值202004" }, { "name": "社会消费品零售总额_当期值202003" }, { "name": "社会消费品零售总额_当期值202002" }, { "name": "社会消费品零售总额_当期值202001" }, { "name": "社会消费品零售总额_当期值201912" }, { "name": "社会消费品零售总额_当期值201911" }, { "name": "社会消费品零售总额_当期值201910" }, { "name": "社会消费品零售总额_当期值201909" }, { "name": "社会消费品零售总额_当期值201908" }, { "name": "社会消费品零售总额_当期值201907" }, { "name": "社会消费品零售总额_当期值201906" }, { "name": "社会消费品零售总额_当期值201905" }, { "name": "社会消费品零售总额_当期值201904" }, { "name": "城镇社会消费品零售总额_当期值" }, { "name": "乡村社会消费品零售总额_当期值" }, { "name": "餐饮收入_当期值" }, { "name": "商品零售_当期值" }], "links": [{ "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202004", "value": "24557.7" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202003", "value": "22974" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202002", "value": "0" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202001", "value": "0" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201912", "value": "32703.8" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201911", "value": "32345.4" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201910", "value": "32744.1" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201909", "value": "29112.4" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201908", "value": "29134.3" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201907", "value": "28353.8" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201906", "value": "28959" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201905", "value": "28303.9" }, { "source": "城镇社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201904", "value": "26259" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202004", "value": "3620.1" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202003", "value": "3475.9" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202002", "value": "0" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值202001", "value": "0" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201912", "value": "6072.9" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201911", "value": "5748.4" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201910", "value": "5360.2" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201909", "value": "5382.5" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201908", "value": "4762.1" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201907", "value": "4719.5" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201906", "value": "4919.2" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201905", "value": "4651.8" }, { "source": "乡村社会消费品零售总额_当期值", "target": "社会消费品零售总额_当期值201904", "value": "4327.1" }, { "source": "社会消费品零售总额_当期值202004", "target": "餐饮收入_当期值", "value": "2306.6" }, { "source": "社会消费品零售总额_当期值202003", "target": "餐饮收入_当期值", "value": "1832" }, { "source": "社会消费品零售总额_当期值202002", "target": "餐饮收入_当期值", "value": "0" }, { "source": "社会消费品零售总额_当期值202001", "target": "餐饮收入_当期值", "value": "0" }, { "source": "社会消费品零售总额_当期值201912", "target": "餐饮收入_当期值", "value": "4824.6" }, { "source": "社会消费品零售总额_当期值201911", "target": "餐饮收入_当期值", "value": "4963.7" }, { "source": "社会消费品零售总额_当期值201910", "target": "餐饮收入_当期值", "value": "4367.5" }, { "source": "社会消费品零售总额_当期值201909", "target": "餐饮收入_当期值", "value": "3770.2" }, { "source": "社会消费品零售总额_当期值201908", "target": "餐饮收入_当期值", "value": "3857.1" }, { "source": "社会消费品零售总额_当期值201907", "target": "餐饮收入_当期值", "value": "3658" }, { "source": "社会消费品零售总额_当期值201906", "target": "餐饮收入_当期值", "value": "3723.3" }, { "source": "社会消费品零售总额_当期值201905", "target": "餐饮收入_当期值", "value": "3631.3" }, { "source": "社会消费品零售总额_当期值201904", "target": "餐饮收入_当期值", "value": "3280.7" }, { "source": "社会消费品零售总额_当期值202004", "target": "商品零售_当期值", "value": "25871.2" }, { "source": "社会消费品零售总额_当期值202003", "target": "商品零售_当期值", "value": "24617.9" }, { "source": "社会消费品零售总额_当期值202002", "target": "商品零售_当期值", "value": "0" }, { "source": "社会消费品零售总额_当期值202001", "target": "商品零售_当期值", "value": "0" }, { "source": "社会消费品零售总额_当期值201912", "target": "商品零售_当期值", "value": "33952.1" }, { "source": "社会消费品零售总额_当期值201911", "target": "商品零售_当期值", "value": "33130.1" }, { "source": "社会消费品零售总额_当期值201910", "target": "商品零售_当期值", "value": "33736.9" }, { "source": "社会消费品零售总额_当期值201909", "target": "商品零售_当期值", "value": "30724.7" }, { "source": "社会消费品零售总额_当期值201908", "target": "商品零售_当期值", "value": "30039.2" }, { "source": "社会消费品零售总额_当期值201907", "target": "商品零售_当期值", "value": "29415.2" }, { "source": "社会消费品零售总额_当期值201906", "target": "商品零售_当期值", "value": "30154.8" }, { "source": "社会消费品零售总额_当期值201905", "target": "商品零售_当期值", "value": "29324.4" }, { "source": "社会消费品零售总额_当期值201904", "target": "商品零售_当期值", "value": "27305.3" }] };
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
            data: ['总额', '城镇总额', '乡村总额', '餐饮收入_当期值', '商品零售_当期值'],
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
                    { value: 335, name: '总额' },
                    // { value: 679, name: '营销广告' },
                    // { value: 1548, name: '搜索引擎' }
                ]
            },
            {
                name: '城乡',
                type: 'pie',
                // selectedMode: 'single',
                radius: ['20%', '35%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 705, name: '城镇总额' },
                    { value: 279, name: '乡村总额' },
                ]
            },

            {
                name: '餐饮商品',
                type: 'pie',
                radius: ['45%', '70%'],

                // label: {
                //     formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                //     backgroundColor: '#eee',
                //     borderColor: '#aaa',
                //     borderWidth: 1,
                //     borderRadius: 4,
                //     // shadowBlur:3,
                //     // shadowOffsetX: 2,
                //     // shadowOffsetY: 2,
                //     // shadowColor: '#999',
                //     // padding: [0, 7],
                //     rich: {
                //         a: {
                //             color: '#999',
                //             lineHeight: 22,
                //             align: 'center'
                //         },
                //         // abg: {
                //         //     backgroundColor: '#333',
                //         //     width: '100%',
                //         //     align: 'right',
                //         //     height: 22,
                //         //     borderRadius: [4, 4, 0, 0]
                //         // },
                //         hr: {
                //             borderColor: '#aaa',
                //             width: '100%',
                //             borderWidth: 0.5,
                //             height: 0
                //         },
                //         b: {
                //             fontSize: 16,
                //             lineHeight: 33
                //         },
                //         per: {
                //             color: '#eee',
                //             backgroundColor: '#334455',
                //             padding: [2, 4],
                //             borderRadius: 2
                //         }
                //     }
                // },
                data: [
                    { value: 335, name: '餐饮收入_当期值' },
                    { value: 1310, name: '商品零售_当期值' },
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

        // legend: {
        //     data: dataset.name
        // },

        series: [{
            name: '漏斗图',
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
                show: true,
                position: 'inside'
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
                // [
                //     { value: 60, name: '访问' },
                //     { value: 40, name: '咨询' },
                //     { value: 20, name: '订单' },
                //     { value: 70, name: 'a' },
                //     { value: 55, name: 'b' },
                //     { value: 30, name: 'c' },
                //     { value: 40, name: 'd' },
                //     { value: 22, name: 'e' },
                //     { value: 130, name: 'f' },
                //     { value: 40, name: 'g' },
                //     { value: 80, name: 'h' },
                //     { value: 60, name: 'i' },
                //     { value: 90, name: 'j' },
                //     { value: 100, name: '展现' }
                // ]
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            updateLineBar(params.name);
        });
    }
}