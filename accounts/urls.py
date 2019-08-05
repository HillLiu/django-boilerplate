from django.urls import path
from frontpage.views import HomePage

from . import views

urlpatterns = [
        path('register/', views.register, name='register'),
]
