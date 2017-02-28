# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 01:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('loginRegistration', '0002_auto_20170220_2314'),
    ]

    operations = [
        migrations.CreateModel(
            name='Secret',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('likes', models.ManyToManyField(related_name='likes', to='loginRegistration.User')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='secret_poster', to='loginRegistration.User')),
            ],
        ),
    ]
