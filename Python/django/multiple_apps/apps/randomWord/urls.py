from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^new_word$', views.ranWord, name='word'),
    url(r'^reset$', views.clear, name='clear')
]
