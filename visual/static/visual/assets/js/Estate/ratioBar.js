function ratioBar(id,data){
    var myratioBar = echarts.init(document.getElementById(id));
    var color=["#038cf5",'#27e97b'];

    option = {
        backgroundColor:'black',
        title:{
            show: false,
            text:'本市危货种类占比',
            textStyle:{
                color:'#FFFFFF'
            },
            left:'300px',
            top: '300'

        },
        tooltip: {
            show: false,
            formatter: "{b} <br> {c}%"

        },
        color:color,
        legend: {
            x:"middle",
            y:"bottom",
            icon: "circle",
            bottom: '43%',
            left:'10%',
            itemWidth: 7,
            itemHeight: 7,
            itemGap: 40,
            textStyle:{
                color:'#89A7AF',
            },
            data:[{
                name :'商品住宅'
            },
                {
                    name :'其他'
                }
            ]
        },
        xAxis: [{
            type :'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }],
        yAxis: [{
            //type: 'category',
            data: [''],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }

        }],
        series: [
            {
                name:'商品住宅',
                type:'bar',
                barWidth:16,
                stack: '危货种类占比',
                label: {
                    normal: {
                        borderWidth: 10,
                        distance: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 1,
                        borderColor: color[0],
                        backgroundColor: color[0],
                        show: true,
                        position: 'top',
                        formatter: '{c}%',
                        color: '#000'
                    }
                },
                itemStyle: {
                    color: color[0]
                },
                data:[{
                    value:data,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: color[0] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: color[0] // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }]
            },
            {
                name:'其他',
                type:'bar',
                barWidth:16,
                stack: '危货种类占比',
                itemStyle: {
                    color: color[1]
                },
                label: {
                    normal: {
                        borderWidth: 10,
                        distance: 20,
                        align: 'center',
                        verticalAlign: 'middle',
                        borderRadius: 1,
                        borderColor: color[1],
                        backgroundColor: color[1],
                        show: true,
                        position: 'top',
                        formatter: '{c}%',
                        color: '#000'
                    }
                },
                data:[{
                    value:100-data,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: color[1]// 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: color[1]// 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }]
            }

        ]
    };


    myratioBar.setOption(option);





}