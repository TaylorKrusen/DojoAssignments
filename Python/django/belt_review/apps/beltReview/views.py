from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'loginRegistration/index.html')

def books(request):
    context = {
    }
    return render(request, 'beltReview/index.html', context)

def add(request):
    return render(request, 'beltReview/add.html')
