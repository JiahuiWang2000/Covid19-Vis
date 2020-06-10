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
		values.push(parseFloat(data[i].value));
	}
	rankOption = {
		title: {
			text: tag,
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
					show: true,
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
                height: '80%',
                showDataShadow: false,
                left: '5%',
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
				drawRadar(goodsdata,goodsdata);				
            }
        })
    });
}