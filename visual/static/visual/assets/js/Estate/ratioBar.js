function ratioBar(id,data,name){
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
        grid: {
            left: '6%',
            right: '1%',
            top:"80%",
            containLabel: true
        },
        legend: {
            show:true,
            selectedMode:true,
            y:"58%",
            left:"30%",
            icon: "circle",
            itemWidth: 7,
            itemHeight: 7,
            itemGap: 40,
            textStyle:{
                color:'#89A7AF',
            },
            data:[{
                name :'现房'
            },
                {
                    name :'非现房'
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
                show: false,
            },
            splitLine: {
                show: false,
            }
        }],
        yAxis: [{
            //type: 'category',
            data: [name],
            axisTick: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: 'white',
                }
            }

        }],
        series: [
            {
                name:'现房',
                type:'bar',
                barWidth:10,
                stack: '危货种类占比',
                label: {
                    normal: {
                        borderWidth: 10,
                        height:5,
                        distance: 15,
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
                name:'非现房',
                type:'bar',
                barWidth:16,
                stack: '危货种类占比',
                itemStyle: {
                    color: color[1]
                },
                label: {
                    normal: {
                        borderWidth: 10,
                        distance: 15,
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