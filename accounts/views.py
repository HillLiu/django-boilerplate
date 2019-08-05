from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
import json


# Create your views here.

def register(request):
    context_data = {
            "themePath": "Register" 
            }
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        print("Errors", form.errors)
        if form.is_valid():
            form.save()
            return redirect("")
        else:
            return render(request, "site.html", {"form": form})
    else:
        form = UserCreationForm()
        context_data["form"] = form.as_ul() 
        context = { "context_data": json.dumps(context_data), }
        return render(request, "site.html", context)
