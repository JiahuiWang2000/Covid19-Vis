var yearlygoodsdata,yearlycustomdata;
var linesChart;
function initLines(){
    linesChart=echarts.init(document.getElementById("linesChart"));
}

function drawLines(data1,data2){
    option = {
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            dimension: 0,
            min: 0,
            max: data1.length - 1
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: data2.length - 1
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            data: [202001,202002,202003,202004],
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
        },
        {
            type: 'category',
            data: [201805,201806,201807,201808,201809,201810,201811,201812,201901,201902,201903,201904,201905,201906,201907,201908,201909,201910,201911,201912,202001,202002,202003],
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            },
            gridIndex: 1
        }],
        yAxis: [{
            type: 'value',
            splitLine: {show: false},
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            },
            min:getmin(data1),
            max:getmax(data1)
        },
        {
            type: 'value',
            splitLine: {show: false},
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            },
            gridIndex: 1,
            min:getmin(data2),
            max:getmax(data2)
        }],
        grid: [{
            right: '55%'
        }, {
            left: '55%'
        }],
        series: [{
            data: data1,
            type: 'line',
            smooth: true
        },
        {
            data: data2,
            type: 'line',
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1
        }]
    };
    linesChart.setOption(option,true);
}

function getmin(data){
    var m=999;
    for(var i=0;i<data.length;i++){
        if(data[i]<m){
            m=data[i];
        }
    }
    return m;
}

function getmax(data){
    var m=0;
    for(var i=0;i<data.length;i++){
        if(data[i]>m){
            m=data[i];
        }
    }
    return m;
}