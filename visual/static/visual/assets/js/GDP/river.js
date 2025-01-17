function drawGDPriver() {
	var domain = ["2017B", "2017C", "2017D", "2018A", "2018B", "2018C", "2018D", "2019A", "2019B", "2019C", "2019D", "2020A"];
	var labels = ["农林牧渔业", "工业", "制造业", "建筑业", "批发和零售业", "交通运输、仓储和邮政业", "住宿和餐饮业", "金融业", "房地产业", "信息传输、软件和信息技术服务业", "租赁和商务服务业", "其他行业"];
	var rawData = [
		[10708.4,28579.9,20629,15108.7,9249.4,25929,18961.8,13662.2,9005.8,23915.8,18944.2,13204.2],
		[64642,86721.6,79501.8,79820.7,71064.5,82822.1,76239.6,75122.1,66905.6,76782.9,69327.2,68099.8],
		[53852,73952.4,66823.8,68041.8,60357.1,70662.1,64348.2,64294.9,56631.9,65652.1,58632.6,58172.1],
		[9377.8,23072.4,18734.6,17954.2,11143.1,21720.4,17294.5,16404.3,10073.8,19015.8,15590.1,14574.4],
		[18749.6,26795.9,23993.6,23097,21959.2,24710,22334.1,21374.2,20485.5,22731.1,20342.9,19473.6],
		[7865.1,11244,11310.2,10861.3,9386.6,10773.5,10582.3,10174.9,8806.5,9940.9,9688.7,9397.7],
		[2820.9,5071.2,4610.5,4123,4234.9,4640.6,4212.6,3779.6,3887.8,4240.1,3838.5,3440.9],
		[21346.8,18973.8,19388.3,19064.9,19650.1,17378.1,17780.6,17401,18050.6,15938.8,16290.4,15856.3],
		[15268.3,18798.9,17369,17484.4,15979.2,17669.5,15914,16176.1,14863.5,15925.1,14054.9,14059],
		[8928,8341.3,7528.1,8395.6,8424.8,7520.8,6690.9,7309.6,7212.2,6376,5539.8,5977.9],
		[7137.9,9262.5,8409.1,7596.7,7665.1,8170.4,7533.3,6885.3,6879.5,7128.4,6464.6,586.4],
		[39659.6,41158.2,40734.5,39067.3,39306,37474.6,36930.6,35673.1,35864.9,33433.7,32708,31998.1]
		];

	var data6 = [];
	for (var i = 0; i < rawData.length; i++) {
		for (var j = 0; j < rawData[i].length; j++) {
			var label = labels[i];
			data6.push([
				j, rawData[i][11 - j], label
			]);
		}
	}

	option5 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#c4ccd3',
					width: 1,
					type: 'solid'
				}
			},
			position: 'right'
		},
		singleAxis: {
			top: 50,
			bottom: 50,
			axisTick: {},
			axisLabel: {},
			type: 'category',
        	boundaryGap: false,
			data: domain,
			axisPointer: {
				animation: true,
				label: {
					show: true
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					opacity: 0.2
				}
			},
			axisLine:{
				lineStyle:{
					color: '#c4ccd3'
				}
			}
		},
		series: [{
			type: 'themeRiver',
            emphasis: {
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
			color: ['#bde9e8', '#62b6cb', '#1b4965', '#cae9ff', '#5fa8d3','#133c55', '#386fa4', '#59a5d8', '#84d2f6', '#91e5f6', '#68d8d6', '#3dccc7'],
			data: data6,
			label: {
				show: false
			}
		}]
	};
	document.getElementById("drawRiver").style.width = "370px";
	document.getElementById("drawRiver").style.height = "315px";
    var myChart5 = echarts.init(document.getElementById("drawRiver"));
    myChart5.setOption(option5, true);
}
