"""rss_user URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView # new

from account.views import SignUpView, LogInView # changed

urlpatterns = [
    path('user/admin/', admin.site.urls),
    path('user/api/sign_up/', SignUpView.as_view(), name='sign_up'),
    path('user/api/log_in/', LogInView.as_view(), name='log_in'), # new
    path('user/api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # new
]
