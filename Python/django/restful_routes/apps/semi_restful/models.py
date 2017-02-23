from __future__ import unicode_literals

from django.db import models

class ProductManager(models.Manager):
    # this defines the add product method
    def add_product(self, postData):
        Product.objects.create(name = postData['name'], description = postData['description'], price = postData['price'])
    #this defines the update product method
    def update_product(self, postData, id):
        product = Product.objects.get(id=id)
        product.name = postData['name']
        product.description = postData['description']
        product.price = postData['price']
        product.save()
    #this defines the remove product method
    def remove_product(self,id):
        product = Product.objects.get(id=id)
        product.delete()

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length = 50)
    description = models.CharField(max_length = 200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ProductManager()
