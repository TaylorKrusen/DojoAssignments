from django.shortcuts import render, redirect
import random

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    return render(request,'ninjaGold/index.html')

def makeMoney(request):
    structure = {
    "farm":random.randrange(10, 21),
    "cave":random.randrange(5,11),
    "house":random.randrange(2,6),
    "casino":random.randrange(-50,50)
    }
    if request.POST['building'] in structure:
        newGold = structure[request.POST['building']]
        request.session['gold'] += newGold
        hustle_results = {
            "class":"green" if newGold > 0 else "red",
            "activity":"You robbed the {} and {} {} gold!".format(request.POST['building'],('got shot. Hospital bills cost','gained')[newGold > 0], newGold)
            }
        request.session['activities'].append(hustle_results)
    return redirect('/')

def reset(request):
    request.session['gold'] = 0
    request.session['activities'] = []
    return redirect ('/')
