from django.contrib.gis import admin
from .models import FoodTruck


# Register models here

@admin.register(FoodTruck)
class FoodTruckAdmin(admin.GISModelAdmin):
    list_display = ('name', 'foodType', 'priceRange', 'status')
