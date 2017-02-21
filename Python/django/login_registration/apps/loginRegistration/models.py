from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt
EMAIL_REGEX = re.compile (r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+$')

class UserManager(models.Manager):
    def add_user(self, userInfo):
        errors = []
        email_exists = self.filter(email = userInfo['email'])
        if email_exists:
            errors.append('That email already exists! Try logging in with it.')
        if not EMAIL_REGEX.match(userInfo['email']):
            errors.append('Email is not a valid email!')
        if not userInfo['first_name'].isalpha():
            errors.append('Your first name should not contain numbers.')
        if len(userInfo['first_name']) < 2:
            errors.append('First name should be longer than 2 characters.')
        if not userInfo['last_name'].isalpha():
            errors.append('Last name should not contain numbers.')
        if len(userInfo['last_name']) < 2:
            errors.append('Last name should be longer than 2 characters.')
        if len(userInfo['password']) < 8:
            errors.append('Password must be longer than 8 characters.')
        if userInfo['password'] != userInfo['confirm']:
            errors.append('Passwords do not match!')

        modelsResponse = {}

        if errors:
            modelsResponse['hasAccount'] = False
            modelsResponse['errors'] = errors

        else:
            modelsResponse['hasAccount'] = True
            hashed_password = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            user = self.create(first_name = userInfo['first_name'], last_name = userInfo['last_name'], email = userInfo['email'], password = hashed_password)
            modelsResponse['user'] = user

        return modelsResponse

    def login_user(self, userInfo):
        user = self.filter(email = userInfo['email'])
        errors = []
        modelsResponse = {}
        if not user:
            errors.append('Invalid email! Do you already have an account?')
        else:
            if bcrypt.checkpw(userInfo['password'].encode(), user[0].password.encode()):
                modelsResponse['loggedIn'] = True
                modelsResponse['user'] = user[0]
            else:
                errors.append('Incorrect password for that email.')

        if errors:
            modelsResponse['loggedIn'] = False
            modelsResponse['errors'] = errors

        return modelsResponse


class User(models.Model):
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
