var rankflag=1;
var rankdata;
var rankChart;
var time="202004";
var province="北京市";

function initRank(){
	rankChart = echarts.init(document.getElementById("rank"));
}

function selectQuote(){
    var sel=document.getElementById("quoteSelecter");
    rankflag=sel.options[sel.selectedIndex].value;
    $.ajax({
        url:"getRankData",
        type:'GET',
        data:{"flag":rankflag,"time":time},
        success:function(msg){
            rankdata=msg.rank;
            drawRank(rankflag,rankdata);
        }
	})
}

function selectMonth(){
    var sel=document.getElementById("monthSelecter");
	time=sel.options[sel.selectedIndex].innerHTML;
	console.log(time);
    $.ajax({
        url:"getRankData",
        type:'GET',
        data:{"flag":rankflag,"time":time},
        success:function(msg){
            rankdata=msg.rank;
            drawRank(rankflag,rankdata);
        }
    })
}

function drawRank(flag,data){
    if(flag==1){
        tag="商品零售价格指数";
    }
    else{
        tag="居民消费价格指数";
    }
	var keys = [], values = [];
	for(var i = 0; i < data.length; ++i){
		keys.push(data[i].key);
		values.push(parseFloat(data[i].value).toFixed(2));
	}
	rankOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid:{
			x: 115,
			y:30
		},
		xAxis: {
			type: 'value',
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			},
			scale:true
		},
		yAxis: {
			type: 'category',
			data: keys,
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			},
			axisLabel:{   
				interval: 0
			}
		},
		series: [
			{
				name: tag+"(上月=100)",
				type: 'bar',
				label: {
					show: true,
					position: 'insideRight'
				},
				data: values,
				color:
					new echarts.graphic.LinearGradient(
					1, 0, 0, 0, [
						{ offset: 0, color: '#A2BEE1'  },
						{ offset: 1, color:'#5d93dc' }
					]
				)
			}
		],
        dataZoom: [
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 20,
                height: '80%',
                showDataShadow: false,
                left: '95%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
	};
    rankChart.setOption(rankOption, true);
    rankChart.on('click', function (param) {
		province=param.name;
        $.ajax({
            url:"getPriceData",
            type:'GET',
            data:{"province":param.name,"time":time},
            success:function(msg){
                yearlygoodsdata=msg.yearlygoods;
				yearlycustomdata=msg.yearlycustom;
				console.log(yearlycustomdata);
				console.log(yearlygoodsdata);
				drawLines(yearlygoodsdata,yearlycustomdata);
				goodsdata=msg.goods;
				customdata=msg.custom;
				drawRadar(goodsdata,customdata);				
            }
        })
    });
}