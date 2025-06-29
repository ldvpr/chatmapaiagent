from django.urls import path
from aichatmap import views




urlpatterns = [
    path('', views.app_view, name='hello_world'),
]


