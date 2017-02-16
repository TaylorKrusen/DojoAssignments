from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^(?P<color>\w+)/$', views.turtle),
    url(r'^ninjas$', views.ninjas),
    url(r'^$', views.index)
]


#     url(r'^$', views.index),
#     url(r'^surveys/process$', views.formSubmit),
#     url(r'^results$', views.results),
#     url(r'^reset$', views.clear)
# ]
