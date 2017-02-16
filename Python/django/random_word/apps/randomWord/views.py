from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string
import random

def index(request):
    if not 'counter' in request.session:
        request.session['counter'] = 0
    return render(request,'randomWord/index.html')

def ranWord(request):
    if request.method == 'POST':
        request.session['counter'] += 1
        random_word = get_random_string(length=14)
        request.session['word'] = random_word
        return redirect ('/')
    else:
        return redirect ('/')

def clear(request):
    del request.session['counter']
    del request.session['word']
    return redirect('/')
