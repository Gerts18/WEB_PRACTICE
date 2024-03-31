from django.http import HttpResponse, JsonResponse
from .models import Project, Task
from django.shortcuts import get_object_or_404
# Create your views here.

def index(request):
    return HttpResponse("Index Page")

def message(request, username): # This will help me to obtain info if the client visits this view or ejecutes the function
    return HttpResponse(f'<h1> Hello World {username} </h1>')

def about(request):
    return HttpResponse('About')

def projects(request):
    list_projects = list(Project.objects.values())
    return JsonResponse(list_projects, safe=False)

def tasks(request, id):
    #t = Task.objects.get(id=id)
    task = get_object_or_404(Task, id=id)
    return HttpResponse(f'Task: {task.title}')