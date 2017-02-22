from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^addCourse$', views.addCourse, name='add_class'),
    url(r'^removeCourse/(?P<id>\d+)$', views.removeCourse, name="remove"),
    url(r'^confirmRemove/(?P<id>\d+)$', views.confirmRemove, name="confirm")
]
