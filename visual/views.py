import csv
import json
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse,JsonResponse

def index(request):
    csv_path='data/covid_data/01-22-2020.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    data=[]
    for i in range(len(data_list)):
        data.append(int(data_list[i][1]))
    if trade == {}:
        with open('data\Trading\社会消费品零售总额（全国36个月）.csv', 'r', encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
            for ele in data_list[1:]:
                tlist = []
                for val in ele[1:]:
                    if val != '0':
                        tlist.append(float(val))
                    else:
                        tlist.append("NaN")
                trade[ele[0]] = tlist
        with open('data\Trading\限上单位商品零售类值（全国36个月）.csv', 'r', encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
            for ele in data_list[1:]:
                tlist = []
                for val in ele[1:]:
                    tlist.append(float(val))
                trade[ele[0]] = tlist

    if live=={}:
        with open('data\Living\居民收支基本情况（分省12个季度）.csv','r',encoding='gbk')as fp:
            json = {}
            data_list = [i for i in csv.reader(fp)]
            for index in range(1,len(data_list),6):
                province = []
                for i in range(index,index+6):
                    ele = data_list[i]
                    tlist = []
                    for val in ele[2:]:
                        if val!='0':
                            tlist.append(float(val))
                        else:
                            tlist.append("NaN")
                    province.append(tlist)
                json[data_list[index][0]] = province
            live["Province"] = json
        with open('data\Living\居民收支基本情况（全国12个季度）.csv','r',encoding='gbk')as fp:
            json = {}
            json["城镇"] = {}
            json["农村"] = {}
            json["居民"] = {}
            data_list = [i for i in csv.reader(fp)]
            head = data_list[0][1:]
            for ele in data_list[1:]:
                if "增长" in ele[0] or '居民人均可支配收入_累计值' in ele[0] or '居民人均消费支出_累计值' in ele[0]:
                    if '城镇' in ele[0]:
                        json["城镇"][ele[0]] = list(map(float, ele[1:]))
                    elif '农村' in ele[0]:
                        json["农村"][ele[0]] = list(map(float, ele[1:]))
                    else:
                        json["居民"][ele[0]] = list(map(float, ele[1:]))
                    continue
                category = ele[0][0:2]
                for i in range(len(head)):
                    if head[i] not in json[category]:
                        json[category][head[i]] = [[],[]]
                    if "收入" in ele[0]:
                        json[category][head[i]][0].append({"value":float(ele[i + 1]),"name":ele[0]})
                    else:
                        json[category][head[i]][1].append({"value":float(ele[i + 1]),"name":ele[0]})
            #print(json["居民"]["居民人均可支配收入_累计增长"])
            live["Country"] = json

    return render(request, 'visual/index.html', {'covid':data})

def index_data(request):
    province = request.GET.get("province")
    csv_path = "data\\Estate_province\\" + province + ".csv"
    with open(csv_path, 'r', encoding='gbk')as fp:
        datalist = [i for i in csv.reader(fp)]
    datasets = []
    for i in range(1, 15):
        tmp = []
        tmpp = []
        tmpp2 = []
        tmpp3 = []
        index = [2, 5, 1, 3, 4, 0]
        for j in index:
            tmpp.append(datalist[j + 6][i])
            tmpp2.append(datalist[j + 12][i])
            tmpp3.append(datalist[j + 18][i])
        tmp.append(tmpp)
        tmp.append(tmpp2)
        tmp.append(tmpp3)
        datasets.append(tmp)
    return JsonResponse({"estate": datasets})

def newindexGDP(request):
    data=[]
    return render(request, 'visual/GDP.html', {'test':data})

def newindexProducts(request):
    data=[]
    return render(request, 'visual/Products.html', {'test':data})

def getCovidData(request):
    if request.method=='GET':
        month=request.GET.get("month")
        day=request.GET.get("day")
        mode=request.GET.get("mode")
        csv_path='data/covid_data/'
        if len(month)==1:
            csv_path=csv_path+'0'+month+'-'
        else:
            csv_path=csv_path+month+'-'
        
        if len(day)==1:
            csv_path=csv_path+'0'+day+'-'
        else:
            csv_path=csv_path+day+'-'
        csv_path=csv_path+'2020.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data=[]
        for i in range(len(data_list)):
            data.append(int(data_list[i][int(mode)+1]))
        return JsonResponse({"covid":data})
        
def getproducttreemap(request):
    if request.method=='GET':
        province=request.GET.get("province")
        time=int(request.GET.get("time"))
        csv_path='data\Product_data\product.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data=[]
        for i in range(0, len(data_list), 2):
            if data_list[i][0]==province:
                data.append({"name":data_list[i][1], "value":data_list[i][26-time]})
        return JsonResponse({"data":data})

def getproductrank1(request):
    if request.method=='GET':
        product=request.GET.get("product")
        time=int(request.GET.get("time"))
        csv_path='data\Product_data\product.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data=[]
        for i in range(0, len(data_list), 2):
            if data_list[i][1]==product:
                data.append({"key":data_list[i][0], "value":float(data_list[i][26-time])})
        data = sorted(data, key=lambda i: i['value'])
        return JsonResponse({"data":data})

def getproductrank2(request):
    if request.method=='GET':
        product=request.GET.get("product")
        time=int(request.GET.get("time"))
        csv_path='data\Product_data\product.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data=[]
        for i in range(1, len(data_list), 2):
            if data_list[i][1]==product:
                data.append({"key":data_list[i][0], "value":float(data_list[i][26-time])})
        data = sorted(data, key=lambda i: i['value'])
        return JsonResponse({"data":data})

def getproductbar(request):
    if request.method=='GET':
        province=request.GET.get("province")
        product=request.GET.get("product")
        csv_path='data\Product_data\product.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data=[]
        for i in range(0, len(data_list), 2):
            if data_list[i][0]==province and data_list[i][1]==product:
                for j in range(1, 25):
                    data.append(float(data_list[i][26-j]))
        return JsonResponse({"data":data})

def getgdpbar(request):
    if request.method=='GET':
        province=request.GET.get("province")
        csv_path='data\GDP_data\gdp.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        data1=[]
        data2=[]
        for i in range(0, len(data_list), 2):
            if data_list[i][0]==province:
                for j in range(1, 13):
                    data1.append(float(data_list[i][14-j]))
        for i in range(1, len(data_list), 2):
            if data_list[i][0]==province:
                for j in range(1, 13):
                    data2.append(float(data_list[i][14-j]))
        return JsonResponse({"data1":data1, "data2":data2})



def getEstatedata(request):
    if request.method=='GET':
        province=request.GET.get("province")
        csv_path = "data\\Estate_province\\"+province+".csv"
        with open(csv_path, 'r', encoding='gbk')as fp:
            datalist = [i for i in csv.reader(fp)]
        datasets = []
        data = []
        tmp = []
        tmp2 = []
        for i in range(11):
            tmp.append(datalist[1][14 - i])
            tmp2.append(datalist[2][14 - i])
        data.append(tmp)
        data.append(tmp2)
        tmp = []
        tmp2 = []
        for i in range(3):
            tmp.append(datalist[1][3 - i])
            tmp2.append(datalist[2][3 - i])
        data.append(tmp)
        data.append(tmp2)
        datasets.append(data)

        data = []

        for j in range(3, 6):
            tmp = []
            for i in range(1, 15):
                tmp.append(datalist[j][i])
            data.append(tmp)
        datasets.append(data)

        data = []
        for i in range(1, 15):
            tmp = []
            tmpp = []
            tmpp2 = []
            tmpp3 = []
            index = [2, 5, 1, 3, 4, 0]
            for j in index:
                tmpp.append(datalist[j + 6][i])
                tmpp2.append(datalist[j + 12][i])
                tmpp3.append(datalist[j + 18][i])
            tmp.append(tmpp)
            tmp.append(tmpp2)
            tmp.append(tmpp3)
            data.append(tmp)
        datasets.append(data)

        data = [[], [], []]
        for i in range(1, 4):
            data[i - 1].append(datalist[24][i])
            data[i - 1].append(datalist[25][i])
        datasets.append(data)

        data = [[], [], []]
        for i in range(1, 4):
            for j in range(26, 32):
                #data[i - 1].append(datalist[j][i])
                if(datalist[j][i][0]=='-'):
                    data[i - 1].append("0")
                else:
                    data[i - 1].append(datalist[j][i])
                    #data[i-1].append("0")
        datasets.append(data)

        return JsonResponse({"data":datasets})

def Estate(request):
    datasets=[]
    return render(request, 'visual/Estate.html', {'test':datasets})

def Finance(request):
    datasets=[]
    return render(request, 'visual/Finance.html', {'test':datasets})

trade = {}  
def trading(request):
    if trade=={}:
        with open('data\Trading\社会消费品零售总额（全国36个月）.csv','r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
            for ele in data_list[1:]:
                tlist = []
                for val in ele[1:]:
                    if val!='0':
                        tlist.append(float(val))
                    else:
                        tlist.append("NaN")
                trade[ele[0]] = tlist
        
        with open('data\Trading\限上单位商品零售类值（全国36个月）.csv','r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
            for ele in data_list[1:]:
                tlist = []
                for val in ele[1:]:
                    tlist.append(float(val))
                trade[ele[0]] = tlist
    return render(request,'visual/Trading.html',{"test":[1,2,3]})

def getTradingData(request):
    if request.method=='GET':
        graph = request.GET.get("graph")
        if graph=='0':
            ret = []
            fun=[]
            for key,value in trade.items():
                if "当期值" in key and '商品零售类值' not in key:
                    json = []
                    for i in value:
                        json.append({"value":i,"name":key})
                    ret.append(json)
                elif '商品零售类值_当期值' in key:
                    json = []
                    for i in value:
                        json.append({"value":i,"name":key})
                    fun.append(json)
            return JsonResponse({"pie":ret,"funnel":fun})
        else:
            name = request.GET.get("name")
            json = {}
            json["left_up"] = trade[name+"_当期值"]
            json["left_down"] = trade[name+"_同比增长"]

            cumulate = trade[name+"_累计值"]
            up17 = ["NaN"]*12
            up18 = ['']*12
            up19 = ['']*12
            up20 = ["NaN"]*12
            for i,val in enumerate(cumulate):
                if i<=3:
                    up20[3-i] = val
                elif i<=15:
                    up19[15-i] = val
                elif i<=27:
                    up18[27-i] = val
                else:
                    up17[39-i] = val
            json["right_up"] = [up17,up18,up19,up20]
            json["right_down"]= trade[name+"_累计增长"]

            b = request.GET.get("graph")

        return JsonResponse(json)

live = {}
def living(request):
    if live=={}:
        with open('data\Living\居民收支基本情况（分省12个季度）.csv','r',encoding='gbk')as fp:
            json = {}
            data_list = [i for i in csv.reader(fp)]
            for index in range(1,len(data_list),6):
                province = []
                for i in range(index,index+6):
                    ele = data_list[i]
                    tlist = []
                    for val in ele[2:]:
                        if val!='0':
                            tlist.append(float(val))
                        else:
                            tlist.append("NaN")
                    province.append(tlist)
                json[data_list[index][0]] = province
            live["Province"] = json
        with open('data\Living\居民收支基本情况（分省12个季度）（增长）.csv','r',encoding='gbk')as fp:
            json = {}
            data_list = [i for i in csv.reader(fp)]
            for index in range(1,len(data_list),6):
                province = []
                for i in range(index,index+6):
                    ele = data_list[i]
                    tlist = []
                    for val in ele[2:]:
                        if val!='0':
                            tlist.append(float(val))
                        else:
                            tlist.append("NaN")
                    province.append(tlist)
                json[data_list[index][0]] = province
            live["Increase"] = json
        with open('data\Living\居民收支基本情况（全国12个季度）.csv','r',encoding='gbk')as fp:
            json = {}
            json["城镇"] = {}
            json["农村"] = {}
            json["居民"] = {}
            data_list = [i for i in csv.reader(fp)]
            head = data_list[0][1:]
            for ele in data_list[1:]:
                if "增长" in ele[0] or '居民人均可支配收入_当期值' in ele[0] or '居民人均消费支出_当期值' in ele[0]:
                    if '城镇' in ele[0]:
                        json["城镇"][ele[0]] = list(map(float, ele[1:]))
                    elif '农村' in ele[0]:
                        json["农村"][ele[0]] = list(map(float, ele[1:]))
                    else:
                        json["居民"][ele[0]] = list(map(float, ele[1:]))
                    continue
                category = ele[0][0:2]
                for i in range(len(head)):
                    if head[i] not in json[category]:
                        json[category][head[i]] = [[],[]]
                    if "收入" in ele[0]:
                        json[category][head[i]][0].append({"value":float(ele[i + 1]),"name":ele[0]})
                    else:
                        json[category][head[i]][1].append({"value":float(ele[i + 1]),"name":ele[0]})
            #print(json["居民"]["居民人均可支配收入_累计增长"])
            live["Country"] = json
    return render(request,'visual/Living.html')

def getLivingData(request):
     if request.method=='GET':
        graph = request.GET.get("graph")
        if graph=='0':
            name = request.GET.get("name")
            for key,value in live["Province"].items():
                if name in key:
                    return JsonResponse({"data":value,"country":live["Country"],"increase":live["Increase"][key]})
       
def Covid(request):
    csv_path='data/covid_data/02-01-2020.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    dailyData=[]
    addPatient=[]
    for i in range(len(data_list)):
        dailyData.append(int(data_list[i][1]))
        addPatient.append({"key":i, "value":int(data_list[i][4])})
    addPatient=sorted(addPatient, key=lambda i: i['value'])
    patientData=[]
    for i in range(len(data_list[0])-1):
        patientData.append(int(data_list[0][i+1]))
    

    csv_path='data/covid_province_data/北京.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    confirmData=[]
    deathData=[]
    recoverData=[]
    for i in range(len(data_list[0])-1):
        confirmData.append(data_list[0][i+1])
        deathData.append(data_list[1][i+1])
        recoverData.append(data_list[2][i+1])
    return render(request, 'visual/Covid.html', {'covid':dailyData,'patient':patientData,'confirm':confirmData,'death':deathData,'recover':recoverData,'add':addPatient})

def getPatientData(request):
    if request.method=='GET':
        month=request.GET.get("month")
        day=request.GET.get("day")
        province=request.GET.get("province")
        csv_path='data/covid_data/'
        if len(month)==1:
            csv_path=csv_path+'0'+month+'-'
        else:
            csv_path=csv_path+month+'-'
        
        if len(day)==1:
            csv_path=csv_path+'0'+day+'-'
        else:
            csv_path=csv_path+day+'-'

        csv_path=csv_path+'2020.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        patientData=[]
        for i in range(len(data_list[int(province)-1])-1):
            patientData.append(int(data_list[int(province)-1][i+1]))
        return JsonResponse({'patient':patientData})

def getAddData(request):
    if request.method=='GET':
        month=request.GET.get("month")
        day=request.GET.get("day")
        csv_path='data/covid_data/'
        if len(month)==1:
            csv_path=csv_path+'0'+month+'-'
        else:
            csv_path=csv_path+month+'-'
        
        if len(day)==1:
            csv_path=csv_path+'0'+day+'-'
        else:
            csv_path=csv_path+day+'-'

        csv_path=csv_path+'2020.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        addPatient=[]
        for i in range(len(data_list)):
            addPatient.append({"key":i, "value":int(data_list[i][4])})
        addPatient=sorted(addPatient, key=lambda i: i['value'])
        return JsonResponse({'add':addPatient})


def getIncreaseData(request):
    if request.method=='GET':
        province=request.GET.get("province")
        csv_path='data/covid_province_data/'+province+'.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        confirmData=[]
        deathData=[]
        recoverData=[]
        for i in range(len(data_list[0])-1):
            confirmData.append(int(data_list[0][i+1]))
            deathData.append(int(data_list[1][i+1]))
            recoverData.append(int(data_list[2][i+1]))
        return JsonResponse({'confirm':confirmData,'death':deathData,'recover':recoverData})
    
def Leaderboard(request):
    csv_path='data\PriceIndice_data\goods_sold.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    rankdata=[]
    for i in range(31):
        rankdata.append({"key":data_list[i*17+1][0], "value":float(data_list[i*17+1][2])})
    rankdata = sorted(rankdata, key=lambda i: i['value'])
    goodsdata=[]
    for i in range(16):
        goodsdata.append(float(data_list[i+2][2]))
    yearlygoodsdata=[]
    for i in range(4):
        yearlygoodsdata.append(float(data_list[1][5-i]))
    csv_path='data\PriceIndice_data\custom_cost.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    customdata=[]
    for i in range(8):
        customdata.append(float(data_list[i+2][3]))
    yearlycustomdata=[]
    for i in range(23):
        yearlycustomdata.append(float(data_list[1][25-i]))
    return render(request, 'visual/Leaderboard.html', {'rank':rankdata,'goods':goodsdata,'yearlygoods':yearlygoodsdata,'custom':customdata,'yearlycustom':yearlycustomdata})

def getPriceData(request):
    if request.method=='GET':
        province=request.GET.get("province")
        time=request.GET.get("time")
        csv_path='data\PriceIndice_data\goods_sold.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        for i in range(len(data_list[0])):
            if(data_list[0][i]==time):
                index=i
                break
        for i in range(len(data_list)):
            if(data_list[i][0]==province):
                proindex=i
                break
        goodsdata=[]
        for i in range(16):
            goodsdata.append(float(data_list[proindex+i+1][index]))
        yearlygoodsdata=[]
        for i in range(4):
            yearlygoodsdata.append(float(data_list[proindex+1][5-i]))
        
        csv_path='data\PriceIndice_data\custom_cost.csv'
        with open(csv_path,'r',encoding='gbk')as fp:
            data_list = [i for i in csv.reader(fp)]
        for i in range(len(data_list[0])):
            if(data_list[0][i]==time):
                index=i
                break
        for i in range(len(data_list)):
            if(data_list[i][0]==province):
                proindex=i
                break
        yearlycustomdata=[]
        for i in range(23):
            yearlycustomdata.append(float(data_list[proindex+1][25-i]))
        return JsonResponse({'goods':goodsdata,'yearlygoods':yearlygoodsdata,'yearlycustom':yearlycustomdata})

def getRankData(request):
    if request.method=='GET':
        flag=request.GET.get("flag")
        time=request.GET.get("time")
        if flag=='1':
            csv_path='data\PriceIndice_data\goods_sold.csv'
            with open(csv_path,'r',encoding='gbk')as fp:
                data_list = [i for i in csv.reader(fp)]
            rankdata=[]
            for i in range(len(data_list[0])):
                if(data_list[0][i]==time):
                    index=i
                    break
            for i in range(31):
                rankdata.append({"key":data_list[i*17+1][0], "value":float(data_list[i*17+1][index])})
        else:
            csv_path='data\PriceIndice_data\custom_cost.csv'
            with open(csv_path,'r',encoding='gbk')as fp:
                data_list = [i for i in csv.reader(fp)]
            rankdata=[]
            for i in range(len(data_list[0])):
                if(data_list[0][i]==time):
                    index=i
                    break
            for i in range(31):
                rankdata.append({"key":data_list[i*9+1][0], "value":float(data_list[i*9+1][index])})
        rankdata = sorted(rankdata, key=lambda i: i['value'])
        return JsonResponse({'rank':rankdata})
