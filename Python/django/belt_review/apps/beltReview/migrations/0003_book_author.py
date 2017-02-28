# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-25 00:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beltReview', '0002_auto_20170224_2359'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='author',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='written_by', to='beltReview.Author'),
            preserve_default=False,
        ),
    ]