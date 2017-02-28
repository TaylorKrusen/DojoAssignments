from django.shortcuts import render, redirect
from .models import Product

# index redirects the user to /products as the home page
def index(request):
    return redirect('restful:products')

def products(request):
    context={
    "products":Product.objects.all()
    }
    return render(request, 'semi_restful/index.html', context)

def new(request):
    return render(request, 'semi_restful/new.html')

def show(request, show_id):
    context = {
        "products": Product.objects.get(id=show_id)
    }
    return render(request, 'semi_restful/show.html', context)

def edit(request, id):
    context = {
        "products": Product.objects.get(id=id)
    }
    return render(request, 'semi_restful/edit.html', context)

def create(request):
    if request.method == 'POST':
        Product.objects.add_product(request.POST)
        return redirect('restful:products')

def update(request, update_id):
    if request.method == 'POST':
        Product.objects.update_product(request.POST, update_id)
        return redirect('restful:products')

def remove(request, remove_id):
    if request.method == 'POST':
        Product.objects.remove_product(remove_id)
        return redirect('restful:products')
# def addCourse(request):
#     if request.method == 'POST':
#
#
#     context = {
#         'course_info':Courses.objects.all()
#     }
#
#     return redirect('restful:new_product', context)
