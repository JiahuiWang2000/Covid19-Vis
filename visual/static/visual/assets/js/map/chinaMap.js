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

function initPie(){  
    CovidPie = echarts.init(document.getElementById('CovidPie'));
}

function initIncrease(){  
    CovidIncrease = echarts.init(document.getElementById('CovidIncrease'));
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
      mapOption = {
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
              zoom:1.23,//视角缩放比例
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
              }
          },
          series : [
              {
                  name:tag,
                  type: 'map',
                  geoIndex: 0,
                  data:dataList
              }
          ]
      };
      myChinaMap.setOption(mapOption,true);
      myChinaMap.on('click', function (param) {
        province=param.name;
        if(param.dataIndex!=0){
            $.ajax({
                url:"getPatientData",
                type:'GET',
                data:{"month":month,"day":day,"province":param.dataIndex},
                success:function(msg){
                    patient_data=msg.patient;
                    drawPie(patient_data);
                }
            });
            $.ajax({
                url:"getIncreaseData",
                type:'GET',
                data:{"province":param.name},
                success:function(msg){
                    confirm=msg.confirm;
                    death=msg.death;
                    recover=msg.recover;
                    drawIncrease(confirm,death,recover);
                }
            });
        }        
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

function drawPie(data){
    var dataList=[
        {name:"现存感染人数",value:data[0]-data[1]-data[2]},
        {name:"死亡人数",value:data[1]},
        {name:"治愈人数",value:data[2]}
    ]
    option = {
        title: {
            text: '确诊人数分布',
            left: 'center',
            top:'20px',
            textStyle:{
                color:'#c4ccd3',
              },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: province+' '+month+'.'+day,
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: dataList,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },      
                    normal:{
                        color:function(param){
                            var colorList=['#61a0a8', '#d48265', '#91c7ae'];
                            return colorList[param.dataIndex];
                        }
                    }         
                }
                
            }
        ]
    };
    CovidPie.setOption(option,true);  
}


function drawIncrease(data1,data2,data3){
    var tags=[];
    for(var i=22;i<32;i++){
        var tag='Jan.'+i;
        tags.push(tag);
    }
    for(var i=1;i<29;i++){
        var tag='Feb.'+i;
        tags.push(tag);
    }
    for(var i=1;i<32;i++){
        var tag='Mar.'+i;
        tags.push(tag);
    }
    for(var i=1;i<31;i++){
        var tag='Apr.'+i;
        tags.push(tag);
    }
    for(var i=1;i<30;i++){
        var tag='May.'+i;
        tags.push(tag);
    }
    console.log(tags)
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['确诊人数','死亡人数','治愈人数'],
            textStyle:{
                color:'#c4ccd3',
              },
        },
        xAxis: {
            type: 'category',
            data: tags,
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
        },
        yAxis: {
            type: 'value',
            splitLine: {show: false},
            axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        series: [{
            name:'确诊人数',
            data: data1,
            type: 'line',
            smooth: true,
            itemStyle: {
				normal: {
					color: '#61a0a8',
					lineStyle: {
						color: '#61a0a8'
					}
				}
			},
        },
        {
            name:'死亡人数',
            data: data2,
            type: 'line',
            smooth: true,
            itemStyle: {
				normal: {
					color: '#d48265',
					lineStyle: {
						color: '#d48265'
					}
				}
			},
        },
        {
            name:'治愈人数',
            data: data3,
            type: 'line',
            smooth: true,
            itemStyle: {
				normal: {
					color:  '#91c7ae',
					lineStyle: {
						color:  '#91c7ae'
					}
				}
			},
        }],
        dataZoom: [
            {
                show: true,
                xAxisIndex: 0,
                filterMode: 'empty',
                width: '80%',
                height: 20,
                showDataShadow: false,
                left: '10%',
                bottom:'2%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
    };
    CovidIncrease.setOption(option,true);
}

function selectmode(flag){
    modeflag=flag;
    $.ajax({
        url:"getCovidData",
        type:'GET',
        data:{"month":month,"day":day,"mode":modeflag},
        success:function(msg){
            covid_data=msg.covid;
            chinaMap(covid_data,modeflag);
        }
    })
    console.log(covid_data);
}