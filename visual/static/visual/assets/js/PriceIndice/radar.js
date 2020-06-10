var goodsdata,customdata;
var radarChart;

function initRadar(){
    radarChart=echarts.init(document.getElementById("radars"));
}

function drawRadar(data1,data2){
    var max1=getmax(data1);
    var min1=getmin(data1);
    var max2=getmax(data2);
    var min2=getmin(data2);
    option = {
        title: [ {
            text: '居民消费价格分类指数',
            left: '75%',
            top: '90%',
            textAlign: 'center',
            textStyle:{
                color: '#c4ccd3'
            }
        }, {
            text: '商品零售价格分类指数',
            left: '25%',
            top: '90%',
            textAlign: 'center',
            textStyle:{
                color: '#c4ccd3'
            }
        }],
        tooltip: {
            trigger: 'axis'
        },
        radar: [
            {
                indicator: [
                    {text: '食品类', max: max1,min:min1},
                    {text: '饮料烟酒类', max: max1,min:min1},
                    {text: '服装鞋帽类', max: max1,min:min1},
                    {text: '纺织品类', max: max1,min:min1},
                    {text: '家用电器及音像器材类', max: max1,min:min1},
                    {text: '文化办公用品类', max: max1,min:min1},
                    {text: '日用品类', max: max1,min:min1},
                    {text: '体育娱乐用品类', max: max1,min:min1},
                    {text: '交通通信用品类', max: max1,min:min1},
                    {text: '家具类', max: max1,min:min1},
                    {text: '化妆品类', max: max1,min:min1},
                    {text: '金银珠宝类', max: max1,min:min1},
                    {text: '中西药品及医疗保健类', max: max1,min:min1},
                    {text: '书报杂志及电子出版类', max: max1,min:min1},
                    {text: '燃料类', max: max1,min:min1},
                    {text: '建筑材料及五金类', max: max1,min:min1}
                ],
                center: ['25%', '50%'],
                radius: 100,
                name: {
                    textStyle: {
                        color: '#F9713C'
                    }
                }
            },
            {
                indicator: [
                    {text: '食品烟酒类', max: max2,min:min2},
                    {text: '衣着类', max: max2,min:min2},
                    {text: '居住类', max: max2,min:min2},
                    {text: '生活用品及服务类', max: max2,min:min2},
                    {text: '交通及通信类', max: max2,min:min2},
                    {text: '教育文化及娱乐类', max: max2,min:min2},
                    {text: '医疗保健类', max: max2,min:min2},
                    {text: '其他用品及服务类', max: max2,min:min2}
                ],
                radius: 100,
                center: ['75%', '50%'],
                name: {
                    textStyle: {
                        color: '#B3E4A1'
                    }
                }
            }
        ],
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [
                    {
                        value: data1,
                        name: province+' '+time
                    }
                ],
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.5
                }
            },
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                data: [
                    {
                        value: data2,
                        name: province+' '+time
                    }
                ],
                itemStyle: {
                    color: '#B3E4A1'
                },
                areaStyle: {
                    opacity: 0.5
                },
                radarIndex: 1
            }
        ]
    };
    radarChart.setOption(option,true);
}
