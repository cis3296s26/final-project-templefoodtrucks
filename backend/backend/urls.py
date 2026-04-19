"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
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
from . import views
from django.contrib import admin
from django.urls import path, include
from .views import verify_signup, FoodTruckList, FoodTruckDetail, generate_invite_link, verify_invite_and_signup
from django.conf import settings
from django.conf.urls.static import static

# Define URL patterns for the backend application
urlpatterns = [
    # Admin site URL
    path('admin/', admin.site.urls),
    # List view for all food trucks (api endpoint)
    path('foodtrucks/', FoodTruckList.as_view(), name='foodtruck-list'),
    # Detail view for a specific food truck, identified by its primary key (pk)
    # for example, /foodtrucks/1/ would retrieve the details of the food truck with ID=1
    path('foodtrucks/<int:pk>/', views.FoodTruckDetail.as_view(), name='foodtruck-detail'),
    # URL for verifying the signup token and creating a new user account
    path('auth/verify-signup/', views.verify_signup, name='verify-signup'),
    path('auth/generate-invite-link/', views.generate_invite_link, name='generate-invite-link'),
    path('auth/verify-invite-and-signup/', views.verify_invite_and_signup, name='verify-invite-and-signup'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
