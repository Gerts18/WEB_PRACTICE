from django.http import HttpResponse
# Create your views here.
def message(request): # This will help me to obtain info if the client visits this view or ejecutes the function
    return HttpResponse('<h1> Hello World </h1>')

def about(request):
    return HttpResponse('About')