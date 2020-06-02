function drawTreemap(){
	var dataset = [300.99, 0.0, 36.48,];
	const data = [{
          name: "黑色金属矿",
          children: [{
            name: "铁矿石原矿量", value: 300.99,
          }]
        }, {
          name: "非金属矿",
          children: [{
            name: "磷矿石", value: 0.0,
          }, {
            name: "原盐", value: 36.48,
          }]
        }, {
          name: "食品及加工盐",
          children: [{
            name: "成品糖", value: 4.08,
          }]
        }, {
          name: "饮料、酒及酒精",
          children: [{
            name: "饮料", value: 34.18,
          }]
        }, {
          name: "纺织产品",
          children: [{
            name: "纱", value: 27.86,
          }, {
            name: "布", value: 35400,
          }]
        }, {
          name: "纸及纸制品",
          children: [{
            name: "机制纸及纸板", value: 184.88,
          }, {
            name: "新闻纸", value: 1.88,
          }]
        }, {
          name: "化学原料及化学制品",
          children: [{
            name: "硫酸", value: 51.98,
          }, {
            name: "烧碱(折100%)", value: 79.53,
          }, {
            name: "纯碱(碳酸钠)", value: 36.76,
          }, {
            name: "农用氮磷钾化肥(折纯)", value: 26.72,
          }, {
            name: "化学农药原药", value: 2.89,
          }, {
            name: "乙烯", value: 9.05,
          }, {
            name: "初级形态的塑料", value: 73.18,
          }]
        }, {
          name: "化学纤维",
          children: [{
            name: "化学纤维", value: 5.80,
          }]
        }, {
          name: "塑料制品、半成品及辅料",
          children: [{
            name: "塑料制品", value: 27.05,
          }]
        }, {
          name: "非金属矿物制品",
          children: [{
            name: "水泥", value: 1575.23,
          }, {
            name: "平板玻璃", value: 646.49,
          }]
        }, {
          name: "黑色金属冶炼及压延产品",
          children: [{
            name: "生铁", value: 620.92,
          }, {
            name: "粗钢", value: 666.23,
          }, {
            name: "钢材", value: 960.44,
          }]
        }, {
          name: "有色金属冶炼及压延产品",
          children: [{
            name: "十种有色金属", value: 77.49,
          }, {
            name: "氧化铝", value: 240.26,
          }, {
            name: "铜材", value: 4.75,
          }, {
            name: "铝材", value: 94.58,
          }]
        }, {
          name: "通用设备",
          children: [{
            name: "工业锅炉", value: 0.10991,
          }, {
            name: "发动机", value: 2894.05,
          }, {
            name: "金属切削机床", value: 0.47,
          }, {
            name: "电动手提式工具", value: 1.55,
          }]
        }, {
          name: "专用设备",
          children: [{
            name: "金属冶炼设备", value: 0.54135,
          }, {
            name: "水泥专用设备", value: 0.03635,
          }, {
            name: "包装专用设备", value: 0.0698,
          }, {
            name: "大型拖拉机", value: 0.2693,
          }, {
            name: "中型拖拉机", value: 1.4301,
          }, {
            name: "小型拖拉机", value: 0.54,
          }, {
            name: "大气污染防治设备", value: 0.332,
          }]
        }, {
          name: "交通运输设备",
          children: [{
            name: "铁路机车", value: 0.00,
          }, {
            name: "汽车", value: 7.69,
          }, {
            name: "民用钢质船舶", value: 5.25,
          }]
        }, {
          name: "电气机械及器材",
          children: [{
            name: "发电设备", value: 50.75,
          }, {
            name: "交流电动机", value: 179.13,
          }, {
            name: "家用洗衣机", value: 49.35,
          }, {
            name: "家用电冰箱", value: 61.45,
          }, {
            name: "家用冷柜", value: 65.50,
          }, {
            name: "房间空气调节器", value: 58.74,
          }]
        }, {
          name: "通信设备、计算机及其他电子设备",
          children: [{
            name: "程控交换机", value: 0.00,
          }, {
            name: "传真机", value: 0.00,
          }, {
            name: "移动通信基站设备", value: 0.00,
          }, {
            name: "移动通信手持机", value: 39.34,
          }, {
            name: "微型计算机设备", value: 0.02,
          }, {
            name: "集成电路", value: 18467.20,
          }, {
            name: "彩色电视机", value: 119.63,
          }]
        }, {
          name: "仪器仪表及文化、办公用机械",
          children: [{
            name: "电工仪器仪表", value: 130.10,
          }, {
            name: "复印和胶版印制设备", value: 0.04,
          }]
        }, {
          name: "电力和热力",
          children: [{
            name: "发电量", value: 421.80	,
          }, {
            name: "火力发电量", value: 377.90,
          }, {
            name: "水力发电量", value: 0.80,
          }]
        }]
	
     const option = {
      title: {
        subtext: '2020/04',
        left: 'leafDepth'
      },
      tooltip: {},
      series: [{
        name: 'option',
        type: 'treemap',
        visibleMin: 0,
        data: data,
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
	var domain = [202004,202003,202002,202001,201912,201911,201910,201909,201908,201907,201906,201905,201904,201903,201902,201901,201812,201811,201810,201809,201808,201807,201806,201805];
	var singleData = [111.38786, 124.92163, 0, 0, 118.1197, 126.19565, 127.96006, 123.50656, 143.15197, 126.74635, 145.68988, 148.83572, 142.01749, 120.10847, 0, 0, 114.13745, 121.58936, 140.98443, 139.66763, 138.80241, 140.14546, 155.25693, 128.62953];

	singleOption = {
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
				name: '产量',
				min: 0,
				max: d3.max(singleData),
				interval: 50,
				axisLabel: {
					formatter: '{value} 万'
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
				type: 'bar',
				data: singleData
			}
		]
	};
	document.getElementById("drawTreemap").style.width = "750px";
	document.getElementById("drawTreemap").style.height = "550px";
    var myChart = echarts.init(document.getElementById("drawTreemap"));
	document.getElementById("drawBar").style.width = "390px";
	document.getElementById("drawBar").style.height = "300px";
    var myChart2 = echarts.init(document.getElementById("drawBar"));
    myChart.setOption(option, true);
	myChart2.setOption(singleOption, true);
	myChart.on('click', function(params){
		if(params.seriesType == "treemap" && params.treePathInfo.length == 3)
		{
			var domain = [202004,202003,202002,202001,201912,201911,201910,201909,201908,201907,201906,201905,201904,201903,201902,201901,201812,201811,201810,201809,201808,201807,201806,201805];
			var singleData = [111.38786, 124.92163, 0, 0, 118.1197, 126.19565, 127.96006, 123.50656, 143.15197, 126.74635, 145.68988, 148.83572, 142.01749, 120.10847, 0, 0, 114.13745, 121.58936, 140.98443, 139.66763, 138.80241, 140.14546, 155.25693, 128.62953];
			
			singleOption = {
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
						name: '产量',
						min: 0,
						max: d3.max(singleData),
						interval: 50,
						axisLabel: {
							formatter: '{value} 万'
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
						type: 'bar',
						data: singleData
					}
				]
			};
			myChart2.setOption(singleOption, true);
		}
	});
}