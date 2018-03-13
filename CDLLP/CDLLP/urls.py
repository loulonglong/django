"""CDLLP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'^chatapp/', include('chatapp.urls')),  # 映射到下级路由
    path(r'^commentapp/', include('commentapp.urls')),  # 映射到下级路由
    path(r'^diaryapp/', include('diaryapp.urls')),  # 映射到下级路由
    path(r'^diarydealapp/', include('diarydealapp.urls')),  # 映射到下级路由
    path(r'^feedbackapp/', include('feedbackapp.urls')),  # 映射到下级路由
    path(r'^moreapp/', include('moreapp.urls')),  # 映射到下级路由
    path(r'^mycaidanapp/', include('mycaidanapp.urls')),  # 映射到下级路由
    path(r'^qunapp/', include('qunapp.urls')),  # 映射到下级路由
    path(r'^tongzhiapp/', include('tongzhiapp.urls')),  # 映射到下级路由
    path(r'^userapp/', include('userapp.urls')),  # 映射到下级路由
    path(r'^versionapp/', include('versionapp.urls')),  # 映射到下级路由
]
