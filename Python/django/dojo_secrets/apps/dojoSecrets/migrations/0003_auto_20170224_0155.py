# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 01:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginRegistration', '0002_auto_20170220_2314'),
        ('dojoSecrets', '0002_auto_20170223_0256'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='like',
            name='message',
        ),
        migrations.RemoveField(
            model_name='like',
            name='user',
        ),
        migrations.AddField(
            model_name='secret',
            name='liked_by',
            field=models.ManyToManyField(related_name='liker', to='loginRegistration.User'),
        ),
        migrations.DeleteModel(
            name='Like',
        ),
    ]
