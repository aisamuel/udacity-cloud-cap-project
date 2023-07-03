from django.contrib import admin

# Register your models here.
from .models import Category, RSSFeed

admin.site.register(RSSFeed)
admin.site.register(Category)
