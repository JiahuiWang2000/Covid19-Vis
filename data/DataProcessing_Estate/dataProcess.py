import os
import pandas as pd
import csv
import numpy as np

data=pd.read_csv('RawData/房地产开发投资情况（分省24个月）.csv', encoding ='utf-8')

# province=[]
# for i in range(31):
#     province.append(data["省份"][i*4])
# print(province)


province=['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆']

header=["202004","202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902"]
writeheader=["指标","202004","202003","202002","201912","201911","201910","201909","201908","201907","201906","201905","201904","201903","201902"]



for i in range(len(province)):
    row1 = ["房地产投资累计值"]
    row2 = ["房地产住宅投资累计值"]
    for month in header:
        row1.append(data[month][4*i])
        row2.append(data[month][4*i+2])
    winfo='RawData/province/' + province[i] + ".csv"
    with open(winfo, 'a', newline='') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(writeheader)
        writer.writerow(row1)
        writer.writerow(row2)


data=pd.read_csv('RawData/房地产施工竣工面积（分省24个月）.csv', encoding ='utf-8')


for i in range(len(province)):
    row3 = ["房地产施工面积累计增长"]
    row4 = ["房地产新开工施工面积累计增长"]
    row5 = ["房地产竣工面积累计增长"]
    for month in header:
        row3.append(data[month][4*i+1])
        row4.append(data[month][4*i+3])
        row5.append(data[month][4*i+5])
    winfo='RawData/province/' + province[i] + ".csv"
    with open(winfo, 'a', newline='') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(row3)
        writer.writerow(row4)
        writer.writerow(row5)




data=pd.read_csv('RawData/房地产施工竣工面积与销售面积销售额（分省24个月）.csv', encoding ='utf-8')

for i in range(len(province)):
    row6 = ["商品住宅施工面积累计值"]
    row7 = ["商品住宅施工面积累计增长"]
    row8 = ["商品住宅新开工施工面积累计值"]
    row9 = ["商品住宅新开工施工面积累计增长"]
    row10 = ["商品住宅竣工面积累计值"]
    row11 = ["商品住宅竣工面积累计增长"]

    row12 = ["办公楼施工面积累计值"]
    row13 = ["办公楼施工面积累计增长"]
    row14 = ["办公楼新开工施工面积累计值"]
    row15 = ["办公楼新开工施工面积累计增长"]
    row16 = ["办公楼竣工面积累计值"]
    row17 = ["办公楼竣工面积累计增长"]

    row18 = ["商业营业用房施工面积累计值"]
    row19 = ["商业营业用房施工面积累计增长"]
    row20 = ["商业营业用房新开工施工面积累计值"]
    row21 = ["商业营业用房新开工施工面积累计增长"]
    row22 = ["商业营业用房竣工面积累计值"]
    row23 = ["商业营业用房竣工面积累计增长"]

    row24 = ["商品房销售面积现房比"]
    row25 = ["商品住宅销售面积现房比"]

    row26 = ["商品房销售面积累计增长"]
    row27 = ["商品房现房销售面积累计增长"]
    row28 = ["商品住宅销售面积累计增长"]
    row29 = ["商品住宅现房销售面积累计增长"]
    row30 = ["商品房销售额累计增长"]
    row31 = ["商品住宅销售额累计增长"]

    for month in header:
        row6.append(data[month][6*i])
        row7.append(data[month][6*i+1])
        row8.append(data[month][6*i+2])
        row9.append(data[month][6*i+3])
        row10.append(data[month][6*i+4])
        row11.append(data[month][6*i+5])

        row12.append(data[month][6*i+186])
        row13.append(data[month][6*i+1+186])
        row14.append(data[month][6*i+2+186])
        row15.append(data[month][6*i+3+186])
        row16.append(data[month][4*i+4+186])
        row17.append(data[month][6*i+5+186])

        row18.append(data[month][6*i+0+372])
        row19.append(data[month][6*i+1+372])
        row20.append(data[month][6*i+2+372])
        row21.append(data[month][6*i+3+372])
        row22.append(data[month][6*i+4+372])
        row23.append(data[month][6*i+5+372])

    for month in ["202004","202003","202002"]:
        row24.append(round(100*data[month][4*i+2+558]/data[month][4*i+558],2))
        row25.append(round(100*data[month][4*i+2+682]/data[month][4*i+682],2))



        row26.append(-data[month][4*i+1+558])
        row27.append(-data[month][4*i+3+558])
        row28.append(-data[month][4*i+1+682])
        row29.append(-data[month][4*i+3+682])

        row30.append(-data[month][2*i+1+806])
        row31.append(-data[month][2*i+1+868])



    winfo='RawData/province/' + province[i] + ".csv"
    with open(winfo, 'a', newline='') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(row6)
        writer.writerow(row7)
        writer.writerow(row8)
        writer.writerow(row9)
        writer.writerow(row10)
        writer.writerow(row11)
        writer.writerow(row12)
        writer.writerow(row13)
        writer.writerow(row14)
        writer.writerow(row15)
        writer.writerow(row16)
        writer.writerow(row17)
        writer.writerow(row18)
        writer.writerow(row19)
        writer.writerow(row20)
        writer.writerow(row21)
        writer.writerow(row22)
        writer.writerow(row23)
        writer.writerow(row24)
        writer.writerow(row25)
        writer.writerow(row26)
        writer.writerow(row27)
        writer.writerow(row28)
        writer.writerow(row29)
        writer.writerow(row30)
        writer.writerow(row31)
























