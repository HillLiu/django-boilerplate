from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, sample. You're at the sample index.")
