from django.shortcuts import render, redirect
from .models import Courses

def index(request):
    context = {
        'course_info':Courses.objects.all()
    }
    return render(request,'course_reg/index.html', context)

def addCourse(request):
    if request.method == 'POST':
        Courses.objects.create(name = request.POST['course_name'], description = request.POST['course_descript'])

    return redirect('courses:index')

def removeCourse(request, id):
    context = {
        "course_info": Courses.objects.get(id=id)
    }
    return render(request, 'course_reg/remove.html', context)

def confirmRemove(request, id):
    deleteMe = Courses.objects.get(id=id)
    deleteMe.delete()
    return redirect('courses:index')
