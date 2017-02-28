from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^products$', views.products, name="products"),
    url(r'^products/new$', views.new, name='new'),
    url(r'^products/create$', views.create, name='create'),
    url(r'^products/show/(?P<show_id>\d+)$', views.show, name="show"),
    url(r'^products/edit/(?P<id>\d+)$', views.edit, name="edit"),
    url(r'^products/update/(?P<update_id>\d+)$', views.update, name="update"),
    url(r'^products/destroy/(?P<remove_id>\d+)$', views.remove, name="remove")
]
