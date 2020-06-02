function PNbar(id,datasets,choose){
    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);


    var data = { //标准参数
        id: 'multipleThree',
        barWidth: 8,
        yAxis: ["202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902","201901"],
        xAxis: datasets,
        color: ['#5e94dd', '#f54545'],
        //totalCost: [100, 100, 100, 100, 100, 100,100,100, 100, 100, 100, 100, 100,100],
        //totalCostf: [-100, -100, -100, -100, -100, -100,-100,-100, -100, -100, -100, -100, -100,-100]
        totalCost:[-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,-25,-25],
        totalCostf:[25,25,25,25,25,25,25,25,25,25,25,25,25,25],
    }


    option = {
        backgroundColor: "black",
        title: {
            text: data.title,
            left: 20,
            textStyle: {
                fontSize: 16,
                fontWeight: 500,
                color: '#414957'
            },
            top: 12
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
                var str = '';
                for (var i of params) {
                    if(i.data!=25&&i.data!=-25&&i.data!=0)
                        str+=i.data;
                }
                return choose+": "+str+"%";
            },
        },
        color: data.color,
        grid: {
            x: 50,
            y:10,
            x2: 50,
            y2: 10,
            containLabel: true
        },
        xAxis: {
            show: false,

        },
        yAxis: [{
            type: 'category',
            offset: 30,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: '0',
                textStyle: {
                    fontSize: 12,
                    color: 'white',
                },
            },
            data:  ["202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902","201901"]
        }],
        series: [{
            type: 'bar',
            barWidth: data.barWidth,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#687284',
                    fontSize: '10',
                    formatter: function(params) {
                        return "";
                    }
                },

            },
            data: data.xAxis[0]
        },
            {
                type: 'bar',
                barWidth: data.barWidth,
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#687284',
                        fontSize: '10',
                        formatter: function(params) {
                            return "";
                        }
                    }
                },
                data: data.xAxis[1]
            },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: data.barWidth,
                z: 1,
                data: data.totalCostf,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#666',
                        fontSize: 12,
                        offset: [0, 0],
                        formatter: function(param) {
                            return "25%";
                            // var dd = datas.chartData;
                            // return dd[param.dataIndex] + '%';
                        },
                    }
                },
                itemStyle: {
                    emphasis: {
                        color: "#4f4f48"
                    },
                    normal: {
                        color: "#212032",
                    }
                },
            },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: data.barWidth,
                z: 1,
                data: data.totalCost,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        color: '#666',
                        fontSize: 12,
                        offset: [0, 0],
                        formatter: function(param) {
                            return "-25%";
                            // var dd = datas.chartData;
                            // return dd[param.dataIndex] + '%';
                        },
                    }
                },
                itemStyle: {
                    emphasis: {
                        color: 'eee'
                    },
                    normal: {
                        color: "#212032",
                    }
                },
            }
        ]
    }


    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}