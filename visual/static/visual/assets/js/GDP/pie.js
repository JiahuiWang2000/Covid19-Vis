function drawGDPpie() {
	var flag = true;
	data1 = [
				{value: 206504.3, name: '2020A'},
				{value: 278019.7, name: '2019D'},
				{value: 252208.7, name: '2019C'},
				{value: 242573.8, name: '2019B'},
				{value: 218062.8, name: '2019A'},
				{value: 258808.9, name: '2018D'},
				{value: 234474.3, name: '2018C'},
				{value: 223962.2, name: '2018B'},
				{value: 202035.7, name: '2018A'},
				{value: 235428.7, name: '2017D'},
				{value: 212789.3, name: '2017C'},
				{value: 201950.3, name: '2017B'}
	];
	data2 = [
				{name: "第一产业增加值", value: 10186.2}, 
				{name: "第二产业增加值", value: 73638}, 
				{name: "第三产业增加值", value: 122680.1}, 
				{name: "第一产业增加值", value: 27461.6}, 
				{name: "第二产业增加值", value: 109252.8}, 
				{name: "第三产业增加值", value: 141305.2}, 
				{name: "第一产业增加值", value: 19798}, 
				{name: "第二产业增加值", value: 97790.4}, 
				{name: "第三产业增加值", value: 134620.4}, 
				{name: "第一产业增加值", value: 14437.6}, 
				{name: "第二产业增加值", value: 97315.6}, 
				{name: "第三产业增加值", value: 130820.6}, 
				{name: "第一产业增加值", value: 8769.4}, 
				{name: "第二产业增加值", value: 81806.5}, 
				{name: "第三产业增加值", value: 127486.9}, 
				{name: "第一产业增加值", value: 24938.7}, 
				{name: "第二产业增加值", value: 104023.9}, 
				{name: "第三产业增加值", value: 129846.2}, 
				{name: "第一产业增加值", value: 18226.9}, 
				{name: "第二产业增加值", value: 93112.5}, 
				{name: "第三产业增加值", value: 123134.9}, 
				{name: "第一产业增加值", value: 13003.8}, 
				{name: "第二产业增加值", value: 91100.6}, 
				{name: "第三产业增加值", value: 119857.8}, 
				{name: "第一产业增加值", value: 8575.7}, 
				{name: "第二产业增加值", value: 76598.2}, 
				{name: "第三产业增加值", value: 116861.8}, 
				{name: "第一产业增加值", value: 22992.9}, 
				{name: "第二产业增加值", value: 95368}, 
				{name: "第三产业增加值", value: 117067.8}, 
				{name: "第一产业增加值", value: 18255.8}, 
				{name: "第二产业增加值", value: 84574.1}, 
				{name: "第三产业增加值", value: 109959.5}, 
				{name: "第一产业增加值", value: 12644.9}, 
				{name: "第二产业增加值", value: 82323}, 
				{name: "第三产业增加值", value: 106982.4,}
	];
	option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		color: ['#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#a8861b', '#c23531', '#2f4554'],
		series: [
			{
				name: 'GDP',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '50%'],
				label: {
					normal: {
						position: 'inside'
					}
				},
				labelLine: {
					show: false
				},
				data: data1
			},
			{
				name: '产业',
				type: 'pie',
				radius: ['53%', '80%'],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(255, 255, 255, 0.5)'
					}
				},
				clockwise: true,
				data: data2
			}
		]
	};
	var domain = ["2020A", "2019D", "2019C", "2019B", "2019A", "2018D", "2018C", "2018B", "2018A", "2017D", "2017C", "2017B"];
	var season = 1;
	var singleData = [];
	for(var i = 0; i < 12; ++i)
		singleData.push(data2[i * 3 + season]);
	option2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		xAxis: [
			{
				type: 'category',
				data: domain,
				axisPointer: {
					type: 'shadow'
				},
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
				name: '产业',
				min: 0,
				max: d3.max(singleData),
				interval: 50,
				axisLabel: {
					formatter: '{value} 亿元'
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
				name: 'gdp',
				type: 'bar',
				data: singleData
			}
		]
	};
	
	document.getElementById("drawDoublePie").style.width = "750px";
	document.getElementById("drawDoublePie").style.height = "600px";
    var myChart = echarts.init(document.getElementById("drawDoublePie"));
	document.getElementById("drawSinglePie").style.width = "400px";
	document.getElementById("drawSinglePie").style.height = "300px";
    var myChart2 = echarts.init(document.getElementById("drawSinglePie"));
    myChart.setOption(option, true);
	myChart2.setOption(option2, true);
	
	myChart.on('click', function(params){
		if(flag){console.log("aaa")
			flag = false;
			var data3 = [];
			var start;
			if(params.seriesName == "产业"){
			    start = parseInt(params.dataIndex / 3);
			}
			else{
				start = params.dataIndex;
			}
			for(var i = 0; i < 3; ++i)
				data3.push(data2[start * 3 + i]);
		
			singleOption = {
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b}: {c} ({d}%)'
				},
				color: ['#61a0a8', '#d48265', '#91c7ae'],
				series: [
					{
						name: '产业',
						type: 'pie',
						radius: [0, '80%'],
						clockwise: true,
						data: data3
					}
				]
			};
			myChart.setOption(singleOption, true);
			
			season = params.dataIndex % 3;
			singleData = [];
			for(var i = 0; i < 12; ++i)
				singleData.push(data2[i * 3 + season]);
			singleOption2 = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				toolbox: {
					feature: {
						dataView: {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore: {show: true},
						saveAsImage: {show: true}
					}
				},
				xAxis: [
					{
						type: 'category',
						data: domain,
						axisPointer: {
							type: 'shadow'
						},
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
						name: '产业',
						min: 0,
						max: d3.max(singleData),
						interval: 50,
						axisLabel: {
							formatter: '{value} 亿元'
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
						name: 'gdp',
						type: 'bar',
						data: singleData
					}
				]
			};
			myChart2.setOption(singleOption2, true);
		}
		else if(!flag){
			flag = true;
			myChart.clear();
			myChart.setOption(option, true);
		}
	});
}
