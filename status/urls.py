import os
from django.urls import path
from . import views

STATUS=False
if os.environ.get('STATUS'):
    STATUS=True

urlpatterns = []
if STATUS :
    urlpatterns.append(path('status', views.index, name='index'));
