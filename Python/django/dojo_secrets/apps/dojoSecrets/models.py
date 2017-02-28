from __future__ import unicode_literals
from ..loginRegistration.models import User
from django.db import models

class SecretManager(models.Manager):
    def add_secret(self, postData, user_id):
        user = User.objects.get(id=user_id)
        posted = Secret.objects.create(message=postData['secret'],user=user)
        return self

    def remove_secret(self, secret_id):
        secret = Secret.objects.get(id=secret_id)
        secret.delete()
        return self

    def add_like(self, user_id, secret_id):
        userLoggedIn = User.objects.get(id=user_id)
        secret_liked = Secret.objects.get(id=secret_id)
        secret_liked.liked_by.add(userLoggedIn)



# Create your models here.
class Secret(models.Model):
    message = models.CharField(max_length = 200)
    user = models.ForeignKey(User, related_name="secret_poster")
    liked_by = models.ManyToManyField(User, related_name="liker")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = SecretManager()
