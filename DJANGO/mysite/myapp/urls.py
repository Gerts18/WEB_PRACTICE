from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('info/',views.about, name='about'),
    path('message/<str:username>',views.message, name='message'),
    path('tasks/',views.tasks, name='tasks'),
    path('projects/',views.projects, name='projects'),
    path('create_task/', views.create_task, name='create_task'),
    path('create_project/',views.create_project, name='create_project')
]