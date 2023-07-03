import time
import uuid

from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=128)
    created = models.DateTimeField(null=True, auto_now_add=True)
    updated = models.DateTimeField(null=True, auto_now=True)

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name


class RSSFeed(models.Model):
    name = models.CharField(max_length=128)
    url = models.URLField(max_length=512)
    is_visible = models.BooleanField(default=True)
    categories = models.ManyToManyField(Category, blank=True)
    created = models.DateTimeField(null=True, auto_now_add=True)
    updated = models.DateTimeField(null=True, auto_now=True)

    class Meta:
        verbose_name = "RSS Feed"
        verbose_name_plural = "RSS Feeds"

    def __str__(self):
        return self.name