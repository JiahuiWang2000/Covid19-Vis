var province = "湖北", time = "202004", mon = 24, product = "布";

//财政金融
function AreaStack(id){
	var datasets=[[39104.0,53656.0,72651.0,89919.0,107846.0,125623.0,137061.0,150678.0,167704.0,178967.0,190382.0],
                [33314.0,58629.0,75667.0,93023.0,123538.0,137963.0,153069.0,178612.0,190587.0,206463.0,238874.0],
                [35232.0,45984.0,62133.0],
                [32350.0,55284.0,73596.0]];

    var dom = document.getElementById(id);
    var myChart = echarts.init(dom);
    var app = {};

    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },

        toolbox: {
            trigger: 'axis',//鼠标经过提示
            show:true,
            feature:{
                dataZoom: {
                    yAxisIndex:"none"
                },
                //其他功能性按钮查看官网进行增加，包括（显示数据，下载图片，改为柱状图等）
            }
        },
        dataZoom:
            [
                {
                    show: true,
					height: 12,
					bottom: 8,
                },
                {
                    type: 'inside',
                }
            ],
        color:["#24caf1","#189a65","#fc4a1a","#f7b733"],
        legend: [{
            y:5,
            itemWidth: 7,
            itemHeight: 7,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: ['2019年国家财政收入累计值', '2019年国家财政支出累计值']
        },
            {
                y:20,
                itemWidth: 7,
                itemHeight: 7,
                textStyle:{
                    color:'#89A7AF',
                },
                show: true,
                data: [ '2020年国家财政收入累计值', '2020年国家财政支出累计值']
            },

        ],

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
               // boundaryGap: true,
                data: ["Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct","Nov.","Dec"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                }


            }
        ],
        yAxis: [
            {
                min:"dataMin",
                max:"dataMax",
                type: 'value',
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                }

            }

        ],
        series: [
            {
                name: '2019年国家财政收入累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[0]
            },
            {
                name: '2019年国家财政支出累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[1]
            },
            {
                name: '2020年国家财政收入累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data: datasets[2]
            },
            {
                name: '2020年国家财政支出累计值',
                type: 'line',
                //stack: '总量',
                areaStyle: {},
                data:datasets[3]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//GDP
function River() {
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
			color: ['#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#a8861b', '#c23531', '#2f4554'],
			data: data6,
			label: {
				show: false
			}
		}]
	};
	document.getElementById("drawRiver").style.width = "370px";
	document.getElementById("drawRiver").style.height = "230px";
    var myChart5 = echarts.init(document.getElementById("drawRiver"));
    myChart5.setOption(option5, true);
}

//生产总值
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
	document.getElementById("drawTreemap").style.width = "370px";
	document.getElementById("drawTreemap").style.height = "196px";
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

//房地产
function getRadar() {
	$.ajax({
        url: "index_data",
        type: 'GET',
		data:{"province":province},
        success: function(msg) {
            data = msg.estate;
			console.data
            drawRadar(data[0]);
        }
    })
}

function drawRadar(datasets){
	var label = ["新开工施工面积","竣工增长","施工增长","新开工累计增长","竣工面积","施工面积"];
    var dom = document.getElementById("chart-radar");
    var myChart = echarts.init(dom);
    var app = {};
    var name=["商品住宅","办公楼","商业营业用房"];
    option = null;
	
    var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 1
        }
    };

    option = {
        title: {
            show:false,
            text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        tooltip : {
            confine: true,
            enterable: true,
        },
        legend: {
			bottom:1,
            data: name,
            itemGap: 2,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
        },
        radar: {
            center:["50%","50%"],
            radius:50,
            indicator: [
                {name: label[0]},
                {name: label[1]},
                {name: label[2]},
                {name: label[3]},
                {name: label[4]},
                {name: label[5]}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: name[0],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[0]],
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.5
                }
            },
            {
                name: name[1],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[1]],
                symbol: 'none',
                itemStyle: {
                    color: '#B3E4A1'
                },
                areaStyle: {
                    opacity: 0.5
                }
            },
            {
                name: name[2],
                type: 'radar',
                lineStyle: lineStyle,
                data: [datasets[2]],
                symbol: 'none',
                itemStyle: {
                    color: 'rgb(238, 197, 102)'
                },
                areaStyle: {
                    opacity: 0.05
                }
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//国内贸易
function getTradePie() {
	$.ajax({
        url: "getTradingdata",
        type: 'GET',
        data: { "graph": 0 },
        success: function(msg) {
            currentValue = msg.pie;
            drawNestPie(document.querySelector("#nestpie"), currentValue, 0);
        }
    })
}

function drawNestPie(dom, data, month) {
    var myChart = echarts.init(dom);
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
                name: '总额',
                type: 'pie',
                // selectedMode: 'single',
                radius: [0, '10%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    data[0][month]
                ]
            },
            {
                name: '城乡',
                type: 'pie',
                // selectedMode: 'single',
                radius: ['30%', '50%'],

                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    data[1][month], data[2][month]
                ]
            },

            {
                name: '餐饮商品',
                type: 'pie',
                radius: ['60%', '85%'],
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },

                data: [
                    data[3][month], data[4][month]
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            updateLineBar(params.name);
        });
    }
}

//消费指数
function getRank(){
    $.ajax({
        url:"getRankData",
        type:'GET',
        data:{"flag":0,"time":201905},
        success:function(msg){
            rankdata=msg.rank;
            drawRank(rankdata);
        }
    })
}

function drawRank(data){
    var tag="居民消费价格指数";

	var keys = [], values = [];
	for(var i = 0; i < data.length; ++i){
		keys.push(data[i].key);
		values.push(parseFloat(data[i].value));
	}
	rankOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid:{
			x: 120
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
				name: tag+"(上月=100)",
				type: 'bar',
				label: {
					show: false,
					position: 'insideRight'
				},
				data: values
			}
		],
        dataZoom: [
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 20,
                height: 142,
                showDataShadow: false,
                left: '5%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
	};
	rankChart = echarts.init(document.getElementById("rank"));
    rankChart.setOption(rankOption, true);
}

//人民生活
function getLivingData(){
	$.ajax({
        url: "getLivingdata",
        type: 'GET',
        data: { "graph": 0, "name": province },
        success: function(msg) {
            pData = msg.data;
            drawProvinceLiving(pData);
        }
    })
}

function drawProvinceLiving(dataset) {
    var myChart = echarts.init(document.getElementById("living"));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {  color: '#acacac' }
            },
            data: ['2020A', '2019D', '2019C', '2019B', '2019A', '2018D', '2018C', '2018B', '2018A', '2017D', '2017C', '2017B']
        }],
        series: [{
                name: '居民人均可支配收入',
                type: 'bar',
                stack: 'all',
                data: dataset[0]
            },
            {
                name: '居民人均消费支出',
                type: 'bar',
                stack: 'all',
                data: dataset[1].map(d => -d)
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('click', function(params) {
            console.log(params);
            var name = params.seriesName.substr(0, 2);
            updateLeftDown(name);
            updateRightUp(name);
            updateRightDown(name);
        });
    }
}

//地图
var modeflag=0;
var covid_data,patient_data,increase_data;
var myChinaMap,CovidPie,CovidIncrease;
var month=2;
var day=1;
var province='北京';
var confirm,death,recover;

function initMap(){
    myChinaMap = echarts.init(document.getElementById('ChinaMap'));
}
function chinaMap(data,flag){
      var dataList=[
          {name:"南海诸岛",value:0},
          {name: '北京', value: data[0]},
          {name: '天津', value: data[1]},
          {name: '上海', value: data[2]},
          {name: '重庆', value: data[3]},
          {name: '河北', value: data[4]},
          {name: '河南', value: data[5]},
          {name: '云南', value: data[6]},
          {name: '辽宁', value: data[7]},
          {name: '黑龙江', value: data[8]},
          {name: '湖南', value: data[9]},
          {name: '安徽', value: data[10]},
          {name: '山东', value: data[11]},
          {name: '新疆', value: data[12]},
          {name: '江苏', value: data[13]},
          {name: '浙江', value: data[14]},
          {name: '江西', value: data[15]},
          {name: '湖北', value: data[16]},
          {name: '广西', value: data[17]},
          {name: '甘肃', value: data[18]},
          {name: '山西', value: data[19]},
          {name: '内蒙古', value: data[20]},
          {name: '陕西', value: data[21]},
          {name: '吉林', value: data[22]},
          {name: '福建', value: data[23]},
          {name: '贵州', value: data[24]},
          {name: '广东', value: data[25]},
          {name: '青海', value: data[26]},
          {name: '西藏', value: data[27]},
          {name: '四川', value: data[28]},
          {name: '宁夏', value: data[29]},
          {name: '海南', value: data[30]},
          {name: '台湾', value: data[31]},
          {name: '香港', value: data[32]},
          {name: '澳门', value: data[33]}
      ]
      var tag;
      if(flag==0){
          tag='确诊人数';
      }
      else if(flag==1){
          tag='死亡人数';    
      }
      else if(flag==2){
          tag='治愈人数';    
      }
      var times=[];
      var months=[];
      var days=[];
        for(var i=22;i<32;i++){
            var t='Jan.'+i;
            times.push(t);
            months.push(1);
            days.push(i);
        }
        for(var i=1;i<29;i++){
            var t='Feb.'+i;
            times.push(t);
            months.push(2);
            days.push(i);
        }
        for(var i=1;i<32;i++){
            var t='Mar.'+i;
            times.push(t);
            months.push(3);
            days.push(i);
        }
        for(var i=1;i<31;i++){
            var t='Apr.'+i;
            times.push(t);
            months.push(4);
            days.push(i);
        }
        for(var i=1;i<30;i++){
            var t='May.'+i;
            times.push(t);
            months.push(5);
            days.push(i);
        }
      mapOption = {
        timeline:{
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data:times,
            symbol: 'none',
            itemStyle:{
                color:'#fff',
            },
        },
        options:[{          
            tooltip: {
                formatter:function(params,ticket, callback){
                    return params.seriesName+'<br />'+params.name+'：'+params.value
                }//数据格式化
            },
            visualMap: {
                min: 0,
                max: findmax(data),
                left: 'left',
                top: 'bottom',
                text: ['高','低'],//取值范围的文字
                itemWidth:20,
                itemHeight:100,
                left:40,
                textStyle:{
                    color:'#fff',
                },
                inRange: {
                    color: ['#e0ffff', '#006edd']//取值范围的颜色
                },
                show:true//图注
            },
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom:1.05,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            },
            series : [
                {
                    name:tag,
                    type: 'map',
                    geoIndex: 0,
                    data:dataList
                }
            ]
          }]
          
      };
      myChinaMap.setOption(mapOption,true);
      myChinaMap.on('click', function (param) {
        province=param.name;
		getTreemap();
		getRadar();
		getLivingData();        
      });
}

function findmax(array){
    var max=0;
    for(var i=0;i<array.length;i++){
        if(i!=16){
            if(array[i]>max){
                max=array[i];
            }
        }
    
    }
    return max;
}

function selectmode(flag){
    modeflag=flag;console.log(month)
    $.ajax({
        url:"getCovidData",
        type:'GET',
        data:{"month":month,"day":day,"mode":modeflag},
        success:function(msg){
            covid_data=msg.covid;
			console.log(covid_data)
            chinaMap(covid_data,modeflag);
        }
    })
}