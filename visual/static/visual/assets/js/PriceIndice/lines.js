var yearlygoodsdata,yearlycustomdata;
var linesChart1,linesChart2;
function initLines(){
    linesChart1=echarts.init(document.getElementById("linesChart1"));
    linesChart2=echarts.init(document.getElementById("linesChart2"));
}

function drawLines(data1,data2){
    option1 = {
        visualMap:{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            dimension: 0,
            min: 0,
            max: data1.length - 1
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: [202001,202002,202003,202004],
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
        },
        yAxis:{
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
        grid:{
            left:'15%'
        },
        series:{
            data: data1,
            type: 'line',
            smooth: true
        }
    };
    option2={
        visualMap:{
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: data2.length - 1
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis:{
            type: 'category',
            data: [201805,201806,201807,201808,201809,201810,201811,201812,201901,201902,201903,201904,201905,201906,201907,201908,201909,201910,201911,201912,202001,202002,202003],
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            }
        },
        yAxis:{
            type: 'value',
            splitLine: {show: false},
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            },
            min:getmin(data2),
            max:getmax(data2)
        },
        grid:{
            left:'15%'
        },
        series:{
            data: data2,
            type: 'line',
            smooth: true
        }
    };
    linesChart1.setOption(option1,true);
    linesChart2.setOption(option2,true);
}

function getmin(data){
    var m=999;
    for(var i=0;i<data.length;i++){
        if(data[i]<m){
            m=data[i];
        }
    }
    return m.toFixed(2);
}

function getmax(data){
    var m=0;
    for(var i=0;i<data.length;i++){
        if(data[i]>m){
            m=data[i];
        }
    }
    return m.toFixed(2);
}