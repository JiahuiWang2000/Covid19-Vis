"""Covid19-Vis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from visual import views

urlpatterns = [
    path('visual/Covid.html', views.Covid),
    path('visual/getCovidData', views.getCovidData),
    path('visual/getPatientData', views.getPatientData),
    path('visual/getIncreaseData', views.getIncreaseData),
    path('visual/Leaderboard.html', views.Leaderboard),
    path('visual/getPriceData', views.getPriceData),
    path('visual/getRankData', views.getRankData),
    path('visual/getdata', views.getEstatedata),
    path('visual/', include('visual.urls')),
    path('visual/index.html', views.index),
    path('visual/Finance.html', views.Finance),
    path('admin/', admin.site.urls),
    path('visual/GDP.html', views.newindexGDP),
    path('visual/Products.html', views.newindexProducts),
    path('visual/getproducttreemap', views.getproducttreemap),
    path('visual/getproductrank1', views.getproductrank1),
    path('visual/getproductrank2', views.getproductrank2),
    path('visual/getproductbar', views.getproductbar),
    path('visual/getgdpbar', views.getgdpbar),
    path('visual/getTradingdata', views.getTradingData),
    path('visual/getLivingdata', views.getLivingData),
]
