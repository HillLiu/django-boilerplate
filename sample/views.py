from django.http import HttpResponse
from .func import get_hello 

def index(request):
    hello=get_hello()
    return HttpResponse(hello)
