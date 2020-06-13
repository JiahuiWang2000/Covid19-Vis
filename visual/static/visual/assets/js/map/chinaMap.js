var modeflag=0;
var covid_data,patient_data,increase_data,add_data;
var myChinaMap,CovidPie,CovidIncrease,addPatient;
var month=2;
var day=1;
var province='北京';
var prov_index=1;
var confirm,death,recover;
var names=[ '北京', '天津', '上海','重庆','河北','河南','云南','辽宁','黑龙江','湖南','安徽','山东','新疆','江苏','浙江','江西','湖北', '广西','甘肃','山西', '内蒙古','陕西','吉林','福建','贵州','广东','青海','西藏', '四川','宁夏','海南','台湾', '香港', '澳门']
var times=[];
var months=[];
var days=[];
var timer = [];
for(var i=22;i<32;i++){
    var t='Jan.'+i;
    times.push(t);
    months.push(1);
    days.push(i);
}
for(var i=1;i<30;i++){
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

function initMap(){
    myChinaMap = echarts.init(document.getElementById('ChinaMap'));
}

function initPie(){  
    CovidPie = echarts.init(document.getElementById('CovidPie'));
}

function initIncrease(){  
    CovidIncrease = echarts.init(document.getElementById('CovidIncrease'));
}

function initAdd(){  
    addPatient = echarts.init(document.getElementById('addPatient'));
}

function play(i,t) {
    timer.push(setTimeout(function() {
        $("#time").data("ionRangeSlider").update({ from: i });
        timeIndex=i;
        animateMap(i);
    }, 500 * t));
}


function playStart() {
    var i = $("#time").data("ionRangeSlider").options.from;
    if (i == 128) i = 0;
    for (var t = i; t < days.length; t++) {
        play(t, t - i);     
    }
}


function pause() {
    timer.forEach(function(sto) { clearTimeout(sto) });
    timer.splice(0,timer.length);
}

function animateMap(index) {
    month=months[index];
    day=days[index];
    $.ajax({
        url:"getCovidData",
        type:'GET',
        data:{"month":months[index],"day":days[index],"mode":modeflag},
        success:function(msg){
            covid_data=msg.covid;
            chinaMap(covid_data,modeflag);
        }
    });
    $.ajax({
        url:"getAddData",
        type:'GET',
        data:{"month":month,"day":day},
        success:function(msg){
            add_data=msg.add;
            drawAdd(add_data);
        }
    });
    $.ajax({
        url:"getPatientData",
        type:'GET',
        data:{"month":month,"day":day,"province":prov_index},
        success:function(msg){
            patient_data=msg.patient;
            drawPie(patient_data);
        }
    });
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
                left:40,
                textStyle:{
                    color:'#fff',
                },
                inRange: {
                    color: ['#b1dee3','#ea3e00']//取值范围的颜色
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
      };
      myChinaMap.setOption(mapOption,true);
      myChinaMap.on('click', function (param) {
        province=param.name;
        prov_index=param.dataIndex;
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
            $.ajax({
                url:"getAddData",
                type:'GET',
                data:{"month":month,"day":day},
                success:function(msg){
                    add_data=msg.add;
                    drawAdd(add_data);
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
    document.querySelector("#PieTitle").innerHTML = province + "-" + month+"."+day+"-确诊人数分布";
    var dataList=[
        {name:"现存感染人数",value:data[0]-data[1]-data[2]},
        {name:"死亡人数",value:data[1]},
        {name:"治愈人数",value:data[2]}
    ]
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: province+' '+month+'.'+day,
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
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
    document.querySelector("#IncreaseTitle").innerHTML = province + "-增长情况"
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
            data: times,
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

function drawAdd(data){
    document.querySelector("#AddTitle").innerHTML = month+"."+day+"-新增确诊排行";
    var keys = [], values = [];
    for(var i = data.length-1; i >=0; i--){
		keys.push(names[data[i].key]);
		values.push(parseFloat(data[i].value));
	}
	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid:{
			x: 50
		},
		xAxis: {
			type: 'category',
			data: keys,
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		yAxis: {
			type: 'log',
			axisLine:{
				lineStyle:{
					color:'#c4ccd3'
				}
			}
		},
		series: [
			{
				name: month+'.'+day+' 新增确诊人数',
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
                xAxisIndex: 0,
                filterMode: 'empty',
                width: '80%',
                height: 20,
                showDataShadow: false,
                left: '10%',
                bottom:'5%',
				textStyle:{
					color: '#c4ccd3'
				}
            }
        ]
    };
    addPatient.setOption(option,true);
}

function selectmode(flag){
    if(flag==0){
        $("#confirmBtn").css("background-color","#88FFCF");
        $("#deathBtn").css("background-color","white");
        $("#recoverBtn").css("background-color","white");
    }
    else if(flag==1){
        $("#confirmBtn").css("background-color","white");
        $("#deathBtn").css("background-color","#88FFCF");
        $("#recoverBtn").css("background-color","white");
    }
    else{
        $("#confirmBtn").css("background-color","white");
        $("#deathBtn").css("background-color","white");
        $("#recoverBtn").css("background-color","#88FFCF");
    }
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