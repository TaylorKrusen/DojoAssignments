# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 02:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('loginRegistration', '0002_auto_20170220_2314'),
        ('dojoSecrets', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='secret',
            name='likes',
        ),
        migrations.AddField(
            model_name='like',
            name='message',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dojoSecrets.Secret'),
        ),
        migrations.AddField(
            model_name='like',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loginRegistration.User'),
        ),
    ]