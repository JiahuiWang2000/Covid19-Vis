from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Estate.html', views.Estate, name='Estate'),
    path('Trading.html', views.trading),
]