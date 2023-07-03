
from rest_framework import serializers
from rest_framework.fields import ListField

from .models import Category, RSSFeed
from django.core.validators import FileExtensionValidator


class FeedSerializer(serializers.ModelSerializer):
    categories = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = RSSFeed
        fields = [
            "pk",
            "name",
            "url",
            "is_visible",
            'categories',
            "created",
            "updated"
        ]
        depth = 1
        extra_kwargs = {
            "is_visible": {"required": False},
        }


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["pk", "id", "name", "created", "updated"]