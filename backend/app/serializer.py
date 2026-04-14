from rest_framework_gis.serializers import GeoModelSerializer
from .models import FoodTruck

# This class serializes the FoodTruck model, allowing it to be converted to and from JSON format for API responses and requests
class FoodTruckSerializer(GeoModelSerializer):
    class Meta:
        model = FoodTruck
        fields = ['id', 'name', 'foodType', 'location', 'priceRange', 'status', 'openingTime', 'closingTime']