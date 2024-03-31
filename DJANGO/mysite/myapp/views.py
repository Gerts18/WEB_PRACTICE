from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Index Page")

def message(request, username): # This will help me to obtain info if the client visits this view or ejecutes the function
    print(username)
    return HttpResponse(f'<h1> Hello World </h1>')

def about(request):
    return HttpResponse('About')