function drawGDPmap(){
	var data7 = [
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
	option6 = {
		tooltip: {
			formatter:function(params,ticket, callback){
				return params.seriesName+'<br />'+params.name+'：'+params.value
			}
		},
		visualMap: {
			min: 60,
			max: 120,
			left: 'left',
			top: 'bottom',
			text: ['高','低'],
			textStyle:{
				color:'#fff',
			},
			inRange: {
				color: ['#ca8622', '#91c7ae']
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
				name:"2020A地区生产总值指数_累计值(上年同期=100)",
				type: 'map',
				geoIndex: 0,
				data:data7
			}
		]
	};
	document.getElementById("drawMap").style.width = "400px";
	document.getElementById("drawMap").style.height = "315px";
	var myChart6 = echarts.init(document.getElementById('drawMap'));
	myChart6.setOption(option6);
	myChart6.on('click', function (params) {
		province = params.name;
		getBar(province);
	});
	getBar("北京");
}

function getBar(province){
	$.ajax({
		url:"getgdpbar",
		type:"GET",
		data:{"province":province},
		success:function(msg){
			data8=msg.data1;
			data9=msg.data2;
			drawBar(data8, data9, province);
		}
	})
}

function drawBar(data8, data9, province){
	option7 = {
		title: {
			text: province,
			left: 'center',
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
				data: ["2017B", "2017C", "2017D", "2018A", "2018B", "2018C", "2018D", "2019A", "2019B", "2019C", "2019D", "2020A"],
				axisPointer: {
					type: 'shadow'
				},
				axisLine:{
					lineStyle:{
						color: '#c4ccd3'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '生产总值',
				min: 0,
				max: d3.max(data8),
				axisLabel: null,
				axisLine:{
					lineStyle:{
						color: '#c4ccd3'
					}
				}
			},
			{
				type: 'value',
				name: '生产总值指数',
				min: 0,
				max: d3.max(data9),
            	position: 'right',
				axisLabel: null,
				axisLine:{
					lineStyle:{
						color: '#c4ccd3'
					}
				}
			}
		],
		series: [
			{
				name: '地区生产总值_累计值',
				type: 'bar',
				color: '#d48265',
				data: data8
			},
			{
				name: '地区生产总值指数(上年同期=100)_累计值',
				type: 'line',
				yAxisIndex: 1,
				color: '#61a0a8',
				data: data9
			}
		]
	};
	document.getElementById("drawBar").style.width = "370px";
	document.getElementById("drawBar").style.height = "315px";
	var myChart7 = echarts.init(document.getElementById('drawBar'));
	myChart7.setOption(option7);
}
