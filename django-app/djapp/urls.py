
from django.contrib import admin
from django.urls import path
#
from aichatmap import views




urlpatterns = [

    path('aichatmap/', views.app_view, name="aichatmap"),     
    path('simpleget/', views.simple_api), 
    path('admin/', admin.site.urls), 
    
]


