from django.urls import path
from frontpage.views import HomePage

from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path("page1/", HomePage.as_view(), {"themePath": "Home"}),
    path("page2/", HomePage.as_view(), {"themePath": "Home"}),
]
