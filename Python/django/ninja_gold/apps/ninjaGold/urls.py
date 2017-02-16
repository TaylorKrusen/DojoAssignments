from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_money$', views.makeMoney),
    url(r'^clear$', views.reset)
    # url(r'^ninjas$', views.ninjas),
    # url(r'^$', views.index)
]
