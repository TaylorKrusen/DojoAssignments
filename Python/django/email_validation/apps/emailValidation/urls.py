from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^process$', views.process, name="process"),
    url(r'^success$', views.success, name="success")
]

# url(r'^addCourse$', views.addCourse, name='add_class'),
# url(r'^removeCourse/(?P<id>\d+)$', views.removeCourse, name="remove_course"),
# url(r'^confirmRemove/(?P<id>\d+)$', views.confirmRemove, name="confirm_remove")
