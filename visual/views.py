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