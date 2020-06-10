function drawGDPpie() {
	var domain = ["2017B", "2017C", "2017D", "2018A", "2018B", "2018C", "2018D", "2019A", "2019B", "2019C", "2019D", "2020A"];
	var data1 = [
				{value: 201950.3, name: '2017B'},
				{value: 212789.3, name: '2017C'},
				{value: 235428.7, name: '2017D'},
				{value: 202035.7, name: '2018A'},
				{value: 223962.2, name: '2018B'},
				{value: 234474.3, name: '2018C'},
				{value: 258808.9, name: '2018D'},
				{value: 218062.8, name: '2019A'},
				{value: 242573.8, name: '2019B'},
				{value: 252208.7, name: '2019C'},
				{value: 278019.7, name: '2019D'},
				{value: 206504.3, name: '2020A'}
	];
	var data2 = [
				{name: "第一产业", value: 12644.9}, 
				{name: "第二产业", value: 82323}, 
				{name: "第三产业", value: 106982.4,},
				{name: "第一产业", value: 18255.8}, 
				{name: "第二产业", value: 84574.1}, 
				{name: "第三产业", value: 109959.5}, 
				{name: "第一产业", value: 22992.9}, 
				{name: "第二产业", value: 95368}, 
				{name: "第三产业", value: 117067.8}, 
				{name: "第一产业", value: 8575.7}, 
				{name: "第二产业", value: 76598.2}, 
				{name: "第三产业", value: 116861.8}, 
				{name: "第一产业", value: 13003.8}, 
				{name: "第二产业", value: 91100.6}, 
				{name: "第三产业", value: 119857.8}, 
				{name: "第一产业", value: 18226.9}, 
				{name: "第二产业", value: 93112.5}, 
				{name: "第三产业", value: 123134.9}, 
				{name: "第一产业", value: 24938.7}, 
				{name: "第二产业", value: 104023.9}, 
				{name: "第三产业", value: 129846.2}, 
				{name: "第一产业", value: 8769.4}, 
				{name: "第二产业", value: 81806.5}, 
				{name: "第三产业", value: 127486.9}, 
				{name: "第一产业", value: 14437.6}, 
				{name: "第二产业", value: 97315.6}, 
				{name: "第三产业", value: 130820.6}, 
				{name: "第一产业", value: 19798}, 
				{name: "第二产业", value: 97790.4}, 
				{name: "第三产业", value: 134620.4}, 
				{name: "第一产业", value: 27461.6}, 
				{name: "第二产业", value: 109252.8}, 
				{name: "第三产业", value: 141305.2}, 
				{name: "第一产业", value: 10186.2}, 
				{name: "第二产业", value: 73638}, 
				{name: "第三产业", value: 122680.1}
	];
	option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		color: ['#bde9e8', '#62b6cb', '#1b4965', '#cae9ff', '#5fa8d3','#133c55', '#386fa4', '#59a5d8', '#84d2f6', '#91e5f6', '#68d8d6', '#d62828'],
		series: [
			{
				name: 'GDP',
				type: 'pie',
				selectedMode: 'single',
				radius: ['25%', '90%'],
            	roseType: 'area',
				label: {
					normal: {
						position: 'inside'
					}
				},
				labelLine: {
					show: false
				},
				data: data1
			}
		]
	};
	var data3 = [];
	for(var i = 0; i < 3; ++i)
		data3.push(data2[11 * 3 + i]);
	option2 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		color: [
			'#59a5d8',
			'#386fa4',
			'#133c55'],
		series: [
			{
				name: '产业',
				type: 'pie',
				radius: ['50%', '70%'],
				label: {
					normal: {
						position: 'inside'
					}
				},
				labelLine: {
					show: false
				},
				clockwise: true,
				data: data3
			}
		]
	};
	var data4 = [1.8, 1.6, 1.5, 1.7, 1.7, 1.5, 1.5, 1.6, 1.5, 1.3, 1.5, -9.8];
	option3 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#c4ccd3',
					width: 1,
					type: 'solid'
				}
			}
		},
		xAxis: [
			{
				type: 'category',
				data: domain,
				boundaryGap: false,
				axisLine:{
					lineStyle:{
						color:'#c4ccd3'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '环比增速',
				min: d3.min(data4),
				max: d3.max(data4),
				axisLabel: {
					formatter: '{value}%'
				},
				axisLine:{
					lineStyle:{
						color:'#c4ccd3'
					}
				}
			}
		],
		series: [
			{
				name: '环比增速',
				type: 'line',
				smooth: true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					color: 'rgb(61,204,199)'
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(132,210,246)'
					}, {
						offset: 1,
						color: 'rgb(61,204,199)'
					}])
				},
				data: data4
			}
		]
	};
	var data5 = [];
	for(var i = 0; i < 12; ++i)
		data5.push(data2[i * 3])
	option4 = {
		tooltip: {
			show: true
		},
		angleAxis: {
			type: 'category',
			data: domain,
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		radiusAxis: {
			axisLine:null
		},
		polar: {
		},
		series: [{
			type: 'bar',
			data: data5,
			itemStyle: {
				//通常情况下：
				normal:{
					//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
					color: function (params){
						if(params.dataIndex!=11)
							return "#4cabce";
						else return "#e76f51";
					}
				}},
			coordinateSystem: 'polar',
			name: '全国产业情况'
		}]
	};

	document.getElementById("drawRose").style.width = "320px";
	document.getElementById("drawRose").style.height = "300px";
    var myChart = echarts.init(document.getElementById("drawRose"));
    myChart.setOption(option, true);
	document.getElementById("drawPie").style.width = "320px";
	document.getElementById("drawPie").style.height = "300px";
    var myChart2 = echarts.init(document.getElementById("drawPie"));
	myChart2.setOption(option2, true);
	document.getElementById("drawLine").style.width = "550px";
	document.getElementById("drawLine").style.height = "250px";
    var myChart3 = echarts.init(document.getElementById("drawLine"));
	myChart3.setOption(option3, true);
	document.getElementById("drawPolarBar").style.width = "370px";
	document.getElementById("drawPolarBar").style.height = "315px";
    var myChart4 = echarts.init(document.getElementById("drawPolarBar"));
	myChart4.setOption(option4, true);
	
	myChart.on('click', function(params){
		data3 = [];
		var start = params.dataIndex;
		for(var i = 0; i < 3; ++i)
			data3.push(data2[start * 3 + i]);
		option2.series[0].data = data3;
		myChart2.setOption(option2, true);
	});
	myChart2.on('click', function(params){
		data5 = [];
		var num = params.dataIndex;
		for(var i = 0; i < 12; ++i)
			data5.push(data2[i * 3 + num]);
		option4.series[0].data = data5;
		myChart4.setOption(option4, true);
	});
}
