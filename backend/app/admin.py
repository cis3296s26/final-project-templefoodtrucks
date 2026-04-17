from django.contrib.gis import admin
from .models import FoodTruck

@admin.register(FoodTruck)
class FoodTruckAdmin(admin.GISModelAdmin):
    listDisplay = ('name', 'foodType', 'priceRange', 'status', 'openingTime', 'closingTime')

    # Add filters for status and price range
    listFilter = ('status', 'priceRange')

    # Add search functionality for name and food type
    searchFields = ('name', 'foodType')