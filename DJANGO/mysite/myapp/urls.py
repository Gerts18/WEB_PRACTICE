from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('info/',views.about),
    path('message/<str:username>',views.message),
    path('tasks/',views.tasks),
    path('projects/',views.projects)
]