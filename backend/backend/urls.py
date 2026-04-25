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
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView,)

# Define URL patterns for the backend application
urlpatterns = [
    # Admin site URL
    path('admin/', admin.site.urls),
    # JWT Login endpoints
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Get user info
    path('get_user/', views.get_user, name='get_user'),
    # List view for all food trucks
    path('foodtrucks/', views.get_trucks, name='foodtrucks'),
    # Detail view for a specific food truck, identified by its primary key (pk)
    # for example, /foodtrucks/1/ would retrieve the details of the food truck with ID=1
    path('foodtrucks/<int:pk>/', views.FoodTruckDetail.as_view(), name='foodtruck-detail'),
    # URL for adding a new food truck
    path('create_food_truck/', views.create_food_truck, name='create_food_truck'),
    # modifying food truck
    path('modify_food_truck/<int:pk>/', views.modify_food_truck, name='modify_food_truck'),
    # URL for verifying the signup token and creating a new user account
    path('auth/verify-signup/', views.verify_signup, name='verify-signup'),
    path('auth/generate-invite-link/', views.generate_invite_link, name='generate-invite-link'),
    path('auth/verify-invite-and-signup/', views.verify_invite_and_signup, name='verify-invite-and-signup'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
