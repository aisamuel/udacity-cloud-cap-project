from django.contrib import admin
from django.urls import path

from .views import SignUpView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sign_up/', SignUpView.as_view(), name='sign_up'),
]