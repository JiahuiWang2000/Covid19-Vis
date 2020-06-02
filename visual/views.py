import csv
import json
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse,JsonResponse

def index(request):
    csv_path='data/covid_data/02-01-2020.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    data=[]
    for i in range(len(data_list)):
        data.append(int(data_list[i][1]))
    return render(request, 'visual/index.html', {'covid':data})


def newindexGDP(request):
    csv_path='data\cost.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    data=[]
    sub=[]
    subsub=[]
    for i in range(9):
        sub=[];
        for j in range(31):
            subsub=[]
            for k in range(len(data_list[0])-2):
                subsub.append(data_list[j*9+i+1][k+2])
            sub.append(subsub)
        data.append(sub)
    return render(request, 'visual/GDP.html', {'test':data})

def newindexProducts(request):
    csv_path='data\cost.csv'
    with open(csv_path,'r',encoding='gbk')as fp:
        data_list = [i for i in csv.reader(fp)]
    data=[]
    sub=[]
    subsub=[]
    for i in range(9):
        sub=[];
        for j in range(31):
            subsub=[]
            for k in range(len(data_list[0])-2):
                subsub.append(data_list[j*9+i+1][k+2])
            sub.append(subsub)
        data.append(sub)
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
        csv_path='data\product.csv'
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
        csv_path='data\product.csv'
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
        csv_path='data\product.csv'
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
        csv_path='data\product.csv'
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
        csv_path='data\gdp.csv'
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

