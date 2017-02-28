from django.shortcuts import render, redirect
from .models import Secret
# Create your views here.
def index(request):
    return render(request, 'loginRegistration/index.html')

def secrets(request):
    context = {
    "secrets":Secret.objects.order_by('-created_at')
    }
    return render(request, 'dojoSecrets/index.html', context)

def postSecret(request):
    if request.method == 'POST':
        Secret.objects.add_secret(request.POST, request.session['user_id'])
        return redirect('secrets:wall')

def removeSecret(request, id):
    if request.method == 'POST':
        Secret.objects.remove_secret(id)
        return redirect('secrets:wall')

def like(request, id):
    Secret.objects.add_like(request.session["user_id"], id)
    return redirect("secrets:wall")
# def remove(request, id):
#     if request.method == 'POST':
#         Product.objects.remove_product(id)
#         return redirect('restful:products')
