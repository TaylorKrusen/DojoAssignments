from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="access"),
    url(r'^secrets$', views.secrets, name="wall"),
    url(r'^post$', views.postSecret, name="post"),
    url(r'^destroy/(?P<id>\d+)$', views.removeSecret, name="remove"),
    url(r'^like/(?P<id>\d+)$', views.like, name="like"),
]
