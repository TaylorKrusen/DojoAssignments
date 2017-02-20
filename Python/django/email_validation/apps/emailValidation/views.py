from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email
from django.core.urlresolvers import reverse
# Create your views here.
def index(request):
    return render(request, 'emailValidation/index.html')

def process(request):
    if Email.emailManage.isValidEmail(request.POST['email']):
        Email.emailManage.create(email=request.POST['email'])
        messages.success(request, 'The email address you entered ' + request.POST['email']+ ' is a VALID email. Thanks, bruh.')
        return redirect('home:success')
    else:
        messages.warning(request, 'Invalid email! Please use a real one.')
        return redirect('home:index')

def success(request):
    context = {
        "emails": Email.emailManage.all()
    }
    return render(request, 'emailValidation/valid.html', context)
