from django.urls import path
from . import views

urlpatterns = [
    path('', views.message),
    path('info/',views.about),
    path('message/<str:username>',views.message)
]