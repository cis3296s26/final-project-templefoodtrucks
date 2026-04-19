from django.contrib.gis import admin
from .models import FoodTruck, FoodTruckImageGallery

class GalleryInLine(admin.TabularInline):
    model = FoodTruckImageGallery
    extra = 5

@admin.register(FoodTruck)
class FoodTruckAdmin(admin.ModelAdmin):
    inlines = [GalleryInLine]
    list_display = ('name', 'foodType', 'priceRange', 'status', 'openingTime', 'closingTime')

    # Add filters for status and price range
    list_filter = ('status', 'priceRange')

    # Add search functionality for name and food type
    search_fields = ('name', 'foodType')