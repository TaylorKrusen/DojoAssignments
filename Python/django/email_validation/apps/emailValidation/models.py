from __future__ import unicode_literals

from django.db import models
import re
EMAIL_REGEX = re.compile (r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class EmailManager(models.Manager):
    def isValidEmail(self, email):
        if EMAIL_REGEX.match(email):
            return True
        else:
            return False

class Email(models.Model):
    email = models.EmailField()
    emailManage = EmailManager()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
