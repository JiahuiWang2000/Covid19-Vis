function drawChinamap(){
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
	option = {
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
				name:"5.29确诊人数",
				type: 'map',
				geoIndex: 0,
				data:data7
			}
		]
	};
	document.getElementById("drawMap").style.width = "400px";
	document.getElementById("drawMap").style.height = "315px";


	var myChart = echarts.init(document.getElementById('drawMap'));
	myChart.setOption(option);
	myChart.on('click', function (params) {
		province = params.name;
		Estate(province);
		var but=document.getElementById("button2");
		but.value=province;
	});

}


