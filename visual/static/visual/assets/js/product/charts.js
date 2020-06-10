var province = "湖北", time = "202004", mon = 24, product = "布";

function getTreemap(){
	$.ajax({
		url:"getproducttreemap",
		type:"GET",
		data:{"province":province,"time":mon},
		success:function(msg){
			datadata=msg.data;
			for(var i = 0; i < datadata.length; ++i)
				datadata[i].value = parseFloat(datadata[i].value);
			data1 = [{
				name: "黑色金属矿",
				children: [datadata[0]]
				}, {
				name: "非金属矿",
				children: [datadata[1], datadata[2]]
				}, {
				name: "食品及加工盐",
				children: [datadata[3]]
				}, {
				name: "饮料、酒及酒精",
				children: [datadata[4]]
				}, {
				name: "纺织产品",
				children: [datadata[5],datadata[6]]
				}, {
				name: "纸及纸制品",
				children: [datadata[7],datadata[8]]
				}, {
				name: "化学原料及化学制品",
				children: [datadata[9],datadata[10],datadata[11],datadata[12],datadata[13],datadata[14],datadata[15],datadata[16]]
				}, {
				name: "化学纤维",
				children: [datadata[17]]
				}, {
				name: "塑料制品、半成品及辅料",
				children: [datadata[18]]
				}, {
				name: "非金属矿物制品",
				children: [datadata[19],datadata[20]]
				}, {
				name: "黑色金属冶炼及压延产品",
				children: [datadata[21],datadata[22],datadata[23]]
				}, {
				name: "有色金属冶炼及压延产品",
				children: [datadata[24],datadata[25],datadata[26],datadata[27]]
				}, {
				name: "通用设备",
				children: [datadata[28],datadata[29],datadata[30],datadata[31]]
				}, {
				name: "专用设备",
				children: [datadata[32],datadata[33],datadata[34],datadata[35],datadata[36],datadata[37],datadata[38]]
				}, {
				name: "交通运输设备",
				children: [datadata[39],datadata[40],datadata[41]]
				}, {
				name: "电气机械及器材",
				children: [datadata[42],datadata[43],datadata[44],datadata[45],datadata[46],datadata[47]]
				}, {
				name: "通信设备、计算机及其他电子设备",
				children: [datadata[48],datadata[49],datadata[50],datadata[51],datadata[52],datadata[53],datadata[54]]
				}, {
				name: "仪器仪表及文化、办公用机械",
				children: [datadata[55],datadata[56]]
				}, {
				name: "电力和热力",
				children: [datadata[57],datadata[58],datadata[59]]
			}];
			drawTreemap(data1, province, mon, time);
		}
	})
}

function drawTreemap(data1){
	treemapOption = {
		title: {
			text: province,
			subtext: time,
			left: "center",
			textStyle:{
				color: '#c4ccd3'
			}
		},
		color: [ '#62b6cb',
			'#1b4965',
			'#5fa8d3',
			'#133c55',
			'#386fa4',
			'#59a5d8',
			'#07bdb8',
			'#3dccc7',
			'#68d8d6',
			'#00b9ae',
			'#3dccc7',
		],
		tooltip: {},
		series: [{
			name: '产品',
			type: 'treemap',
			visibleMin: 0,
			data: data1,
			roam: false,
			leafDepth: 1,
			levels: [
			{
				itemStyle: {
					normal: {
						borderColor: '#555',
						borderWidth: 1,
						gapWidth: 4
					}
				}
			},
			{
				colorSaturation: [0.3, 0.6],
				itemStyle: {
					normal: {
						borderColorSaturation: 0.7,
						gapWidth: 1,
						borderWidth: 2
					}
				}
			}
			]
		}]
	};
	document.getElementById("drawTreemap").style.width = "620px";
	document.getElementById("drawTreemap").style.height = "480px";
	var treemapChart = echarts.init(document.getElementById("drawTreemap"));
	treemapChart.setOption(treemapOption, true);
	treemapChart.on('click', function(params){
		if(params.treePathInfo.length == 3){
			product = params.name;
			getRank1(product, mon, time);
			getRank2(product, mon, time);
			getBar(province, product);
		}
	});
}

function getRank1(){
	$.ajax({
		url:"getproductrank1",
		type:"GET",
		data:{"product":product,"time":mon},
		success:function(msg){
			data2=msg.data;
			drawRank1(data2, product, time);
		}
	})
}

function drawRank1(data2){
	var keys = [], values = [];
	for(var i = 0; i < data2.length; ++i){
		keys.push(data2[i].key);
		values.push(parseFloat(data2[i].value));
	}
	rankOption1 = {
		title: {
			text: product,
			subtext: time,
			left: "center",
			textStyle:{
				color: '#c4ccd3'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid:{
			x: 60
		},
		xAxis: {
			type: 'value',
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		yAxis: {
			type: 'category',
			data: keys,
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'

				}
			}
		},
		series: [
			{
				name: '产量',
				type: 'bar',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: values,
				itemStyle: {
					//通常情况下：
					normal:{
						//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
						color: "#5fa8d3"
						}
					},
			}
		],
        dataZoom: [
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 20,
                height: '62%',
                showDataShadow: false,
                left: '0%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
	};
	document.getElementById("drawBar1").style.width = "350px";
	document.getElementById("drawBar1").style.height = "315px";
	var rankChart1 = echarts.init(document.getElementById("drawBar1"));
	rankChart1.setOption(rankOption1, true);
}

function getRank2(){
	$.ajax({
		url:"getproductrank2",
		type:"GET",
		data:{"product":product,"time":mon},
		success:function(msg){
			data3=msg.data;
			drawRank2(data3, product, time);
		}
	})
}

function drawRank2(data3){
	var keys = [], values = [];
	for(var i = 0; i < data3.length; ++i){
		keys.push(data3[i].key);
		values.push(parseFloat(data3[i].value));
	}
	rankOption2 = {
		title: {
			text: product,
			subtext: time,
			left: "center",
			textStyle:{
				color: '#c4ccd3'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid:{
			x: 60
		},
		xAxis: {
			type: 'value',
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		yAxis: {
			type: 'category',
			data: keys,
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		series: [
			{
				name: '产量',
				type: 'bar',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: values,
				itemStyle: {
					//通常情况下：
					normal:{
						//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
						color: "#07bdb8"

					}
				},
			}
		],
        dataZoom: [
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 20,
                height: '62%',
                showDataShadow: false,
                left: '0%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
	};
	document.getElementById("drawBar2").style.width = "350px";
	document.getElementById("drawBar2").style.height = "315px";
	var rankChart2 = echarts.init(document.getElementById("drawBar2"));
	rankChart2.setOption(rankOption2, true);
}

function getMap(){
	data4=[
		{name: '北京', value: 593},
		{name: '天津', value: 192},
		{name: '上海', value: 672},
		{name: '重庆', value: 579},
		{name: '河北', value: 328},
		{name: '河南', value: 1276},
		{name: '云南', value: 185},
		{name: '辽宁', value: 149},
		{name: '黑龙江', value: 945},
		{name: '湖南', value: 1019},
		{name: '安徽', value: 991},
		{name: '山东', value: 790},
		{name: '新疆', value: 76},
		{name: '江苏', value: 653},
		{name: '浙江', value: 1268},
		{name: '江西', value: 937},
		{name: '湖北', value: 68135},
		{name: '广西', value: 254},
		{name: '甘肃', value: 139},
		{name: '山西', value: 198},
		{name: '内蒙古', value: 232},
		{name: '陕西', value: 308},
		{name: '吉林', value: 155},
		{name: '福建', value: 358},
		{name: '贵州', value: 147},
		{name: '广东', value: 1593},
		{name: '青海', value: 18},
		{name: '西藏', value: 1},
		{name: '四川', value: 564},
		{name: '宁夏', value: 75},
		{name: '海南', value: 169},
		{name: '香港', value: 1079},
		{name: '澳门', value: 45}
	]
	/*$.ajax({
		url:"getproductrank2",
		type:"GET",
		data:{"product":product,"time":mon},
		success:function(msg){
			data3=msg.data;*/
			drawMap(data4, province, product, mon, time);
		/*}
	})*/
}

function drawMap(data4){
	mapOption = {
		tooltip: {
			formatter:function(params,ticket, callback){
				return params.seriesName+'<br />'+params.name+'：'+params.value
			}
		},
		visualMap: {
			min: 0,
			max: 1700,
			left: 'left',
			top: 'bottom',
			text: ['高','低'],
			textStyle:{
				color:'#fff',
			},
			inRange: {
				color: ['#b1dee3','#ea3e00']
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
				normal:{
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis:{
					areaColor: '#F3B329',
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		series : [
			{
				name:"疫情",
				type: 'map',
				geoIndex: 0,
				data: data4
			}
		]
	};
	document.getElementById("drawMap").style.width = "400px";
	document.getElementById("drawMap").style.height = "315px";
	var mapChart = echarts.init(document.getElementById("drawMap"));
	mapChart.setOption(mapOption, true);
	mapChart.on('click', function (params) {
		province = params.name;
		getTreemap(province, mon, time);
		getBar(province, product);
	});
}

function getBar(){
	$.ajax({
		url:"getproductbar",
		type:"GET",
		data:{"province":province,"product":product},
		success:function(msg){
			data5=msg.data;
			drawBar(data5, province, product);
		}
	})
}

function drawBar(data5){
	barOption = {
		title: {
			text: province + " - " + product,
			left: "center",
			textStyle:{
				color: '#c4ccd3'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		xAxis: [
			{
				type: 'category',
				data: [201805,201806,201807,201808,201809,201810,201811,201812,201901,201902,201903,201904,201905,201906,201907,201908,201909,201910,201911,201912,202001,202002,202003,202004],
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
				name: '产量',
				min: 0,
				max: d3.max(data5),
				axisLabel: {
					formatter: '{value}万'
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
				name: 'product',
				type: 'line',
				smooth: true,
				symbol: 'none',
				sampling: 'average',
				data: data5,
				itemStyle: {
					//通常情况下：
					normal:{
						//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
						color: "#48cae4"

					}
				},

			}
		]
	};
	document.getElementById("drawBar").style.width = "390px";
	document.getElementById("drawBar").style.height = "300px";
	var barChart = echarts.init(document.getElementById("drawBar"));
	barChart.setOption(barOption, true);
}

function drawInit(){
	getTreemap();
	getRank1();
	getRank2();
	getMap();
	getBar();
}

function rangeChange(){
	mon = range.value;
	if(mon < 9){
		time = "2018";
		if(mon < 6)
			time += "0";
		tmp = parseInt(mon) + 4;
		time += tmp.toString();
	}
	else if(mon < 21){
		time = "2019";
		if(mon < 18)
			time += "0";
		tmp = parseInt(mon) - 8;
		time += tmp.toString();
	}
	else{
		time = "20200";
		tmp = parseInt(mon) - 20;
		time += tmp.toString();
	}

	drawInit();
}
	
function playStart(){
	play(1);play(2);play(3);play(4);play(5);play(6);play(7);play(8);play(9);
	play(10);play(11);play(12);play(13);play(14);play(15);play(16);play(17);play(18);play(19);
	play(20);play(21);play(22);play(23);play(24);
}
	
function play(i){
	setTimeout(function (){
		document.getElementById("range").value = i.toString();
		rangeChange();
	}, 1000 * (i));
}
