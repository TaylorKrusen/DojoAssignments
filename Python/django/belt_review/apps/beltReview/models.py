from __future__ import unicode_literals

from django.db import models
from ..loginRegistration.models import User

# class BookManager(models.Manager):
#  # need validations for book and review info
# # Possible methods:  1. book / review submission
#     return self
#
# class ReviewManager(models.Manager):
# # Need methods: 1. create review 2. delete review
#     return self

class Author(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(Author, related_name='written_by')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Review(models.Model):
    review = models.TextField(max_length = 800)
    rating = models.IntegerField()
    book = models.ForeignKey(Book, related_name='reviewed_book')
    user = models.ForeignKey(User, related_name='book_reviewer')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
