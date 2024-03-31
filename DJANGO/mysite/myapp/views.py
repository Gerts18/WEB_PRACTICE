from django.http import HttpResponse, JsonResponse
from .models import Project, Task
from django.shortcuts import get_object_or_404, render
# Create your views here.

def index(request):
    title = 'Welcome to Django Page!!'
    return render(request, 'index.html', {
        'title': title
    })

def about(request):
    return render(request, 'about.html')

def message(request, username): # This will help me to obtain info if the client visits this view or ejecutes the function
    return HttpResponse(f'<h1> Hello World {username} </h1>')

def projects(request):
    list_projects = list(Project.objects.values())
    return render(request, 'projects.html')

def tasks(request):
    #t = Task.objects.get(id=id)
    return render(request, 'tasks.html')