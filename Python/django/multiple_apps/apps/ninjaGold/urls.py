from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^process_money$', views.makeMoney, name='money'),
    url(r'^clear$', views.reset, name='clear' )
]
