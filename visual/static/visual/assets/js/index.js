var province = "北京", time = "202004", mon = 24, product = "布";

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
function getBar() {
	$.ajax({
        url: "index_data",
        type: 'GET',
		data:{"province":province},
        success: function(msg) {
            data = msg.estate;
            BarLabelRotation(data[0]);
        }
    })
}

function BarLabelRotation(datasets){
	console.log(datasets)
    var dom = document.getElementById("BarLabelRotation");
    var myChart = echarts.init(dom);
    var app = {};
    var label=["202004","202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902"]
    option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];
    var name=['房地产施工面积累计增长', '房地产新开工施工面积累计增长', '房地产竣工面积累计增长'];

    option = {
        color: [ '#006699','#227bbb', '#4cabce'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },

            formatter: function (params, ticket, callback) {
                var res=params[1].axisValueLabel+"</br>";
                for(var i=0;i<3;++i){
                    res+=params[i].marker;
                    res+=params[i].seriesName;
                    res+=": ";
                    res+=params[i].value;
                    res+="%";
                    res+='</br>'
                }
                return res;
            }
        },
        legend: {
            y:30,
            itemWidth: 20,
            itemHeight: 16,
            textStyle:{
                color:'#89A7AF',
            },
            show: true,
            data: name
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                },
                data: label
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel : {
                    textStyle: {
                        color: '#89A7AF'
                    }
                },
            }
        ],
        series: [
            {
                name: name[0],
                type: 'bar',
                barGap: 0,
                //label: labelOption,
                data: datasets[0]
            },
            {
                name: name[1],
                type: 'bar',
                //label: labelOption,
                data: datasets[1]
            },
            {
                name: name[2],
                type: 'bar',
               // label: labelOption,
                data: datasets[2]
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    myChart.on('click',function(params){
        var sel=document.getElementById("monthSelect");
        sel.options[params.dataIndex+1].selected = true;

        var id="chart-radar";
        var labels=["新开工施工面积","竣工面积累计增长","施工面积累计增长","新开工施工面积累计增长","竣工面积","施工面积"];
        var datasets=radardata[params.dataIndex];
        radar(id,labels,datasets);
    });
}

//国内贸易
function getTradePie() {
	$.ajax({
        url: "getTradingdata",
        type: 'GET',
        data: { "graph": 0 },
        success: function(msg) {
            currentValue = msg.pie;
			month = 0;
            drawNestPie(document.querySelector("#nestpie"), currentValue, month);
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