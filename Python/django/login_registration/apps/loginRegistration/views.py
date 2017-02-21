from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

def index(request):
    return render(request, 'loginRegistration/index.html')

def register(request):
    viewsResponse = User.objects.add_user(request.POST)
    if viewsResponse['hasAccount']:
        request.session['user_id'] = viewsResponse['user'].id
        request.session['user_fname'] = viewsResponse['user'].first_name
        messages.success(request, 'You successfully logged in!')
        return redirect('users:success')
    else:
        for error in viewsResponse['errors']:
            messages.error(request, error)
        return redirect('users:index')

def login(request):
    viewsResponse = User.objects.login_user(request.POST)
    if viewsResponse['loggedIn']:
        request.session['user_id'] = viewsResponse['user'].id
        request.session['user_fname'] = viewsResponse['user'].first_name
        messages.success(request, 'You successfully logged in!')
        return redirect('users:success')
    else:
        for error in viewsResponse['errors']:
            messages.error(request, error)
        return redirect('users:index')

def success(request):
    if 'user_id' not in request.session:
        messages.error(request, 'Must log in to see that!')
        return redirect('users:index')
    return render(request, 'loginRegistration/success.html')

def logout(request):
    request.session.clear()
    return redirect('users:index')
