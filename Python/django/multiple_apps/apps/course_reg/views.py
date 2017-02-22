from django.shortcuts import render, redirect
from .models import Courses
from ..loginRegistration.models import User
from django.db.models import Count

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

def UserAddToCourse(request):
    if request.method == 'POST':
        selected_user = User.objects.get(id=request.POST['user'])
        selected_course = Courses.objects.get(id=request.POST['course'])
        selected_course.users.add(selected_user)
        selected_course.save()

    # countusers = Courses.objects.annotate(num_users=Count('users'))

    context = {
        "users": User.objects.all(),
        "courses": Courses.objects.all(),
        # "counts": countusers,
    }
    return render(request, 'course_reg/users_courses.html', context)
