var quoteflag=1;
var monthflag=1;

function selectQuote(){
    var sel=document.getElementById("quoteSelecter");
    quoteflag=sel.options[sel.selectedIndex].value;
}

function selectMonth(){
    var sel=document.getElementById("monthSelecter");
    monthflag=sel.options[sel.selectedIndex].value;
}

function rank(){
    var xAxisData=[];
    var dataList=[
        {name: '北京', value: randomValue(),rank:0},
        {name: '天津', value: randomValue(),rank:0},
        {name: '上海', value: randomValue(),rank:0},
        {name: '重庆', value: randomValue(),rank:0},
        {name: '河北', value: randomValue(),rank:0},
        {name: '河南', value: randomValue(),rank:0},
        {name: '云南', value: randomValue(),rank:0},
        {name: '辽宁', value: randomValue(),rank:0},
        {name: '黑龙江', value: randomValue(),rank:0},
        {name: '湖南', value: randomValue(),rank:0},
        {name: '安徽', value: randomValue(),rank:0},
        {name: '山东', value: randomValue(),rank:0},
        {name: '新疆', value: randomValue(),rank:0},
        {name: '江苏', value: randomValue(),rank:0},
        {name: '浙江', value: randomValue(),rank:0},
        {name: '江西', value: randomValue(),rank:0},
        {name: '湖北', value: randomValue(),rank:0},
        {name: '广西', value: randomValue(),rank:0},
        {name: '甘肃', value: randomValue(),rank:0},
        {name: '山西', value: randomValue(),rank:0},
        {name: '内蒙古', value: randomValue(),rank:0},
        {name: '陕西', value: randomValue(),rank:0},
        {name: '吉林', value: randomValue(),rank:0},
        {name: '福建', value: randomValue(),rank:0},
        {name: '贵州', value: randomValue(),rank:0},
        {name: '广东', value: randomValue(),rank:0},
        {name: '青海', value: randomValue(),rank:0},
        {name: '西藏', value: randomValue(),rank:0},
        {name: '四川', value: randomValue(),rank:0},
        {name: '宁夏', value: randomValue(),rank:0},
        {name: '海南', value: randomValue(),rank:0}
    ]

    var rankedData=[];

    for(var i=0;i<dataList.length;i++){
        xAxisData.push(dataList[i].name);
    }

    for(var i=0;i<dataList.length;i++){
        for(var j=0;j<dataList.length;j++){
            if(dataList[j].value>=dataList[i].value){
                dataList[i].rank++;
            }
        }
        for(var j=0;j<i;j++){
            if(dataList[j].rank==dataList[i].rank){
                dataList[i].rank--;
            }
        }
    }
      for(var i=0;i<dataList.length;i++){
            rankedData[dataList[i].rank-1]=dataList[i];
      }
      function randomValue() {
          return Math.round(Math.random()*1000);
      }

      var myrank = echarts.init(document.getElementById('rank'));

      rankOption={
        legend: {
            data: ['bar']
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            splitLine: {
                show: false
            },
            axisLabel:{
              rotate:60,
              textStyle:{
                color:'#fff',
              }
            }
        },
        yAxis: {
          axisLabel:{
            textStyle:{
              color:'#fff',
            }
          }
        },
        series: [{
            name: 'bar',
            type: 'bar',
            data: rankedData,
            itemStyle:{normal:{color:'#11FFA0'}},
            animationDelay: function (idx) {
                return idx * 40;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 20;
        }
      }

      myrank.setOption(rankOption);
      myrank.on('click', function (params) {
          alert(params.name);
      });
}
