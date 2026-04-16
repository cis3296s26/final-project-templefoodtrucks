from rest_framework_gis.serializers import GeoModelSerializer
from rest_framework import serializers
from .models import FoodTruck

# This class serializes the FoodTruck model, allowing it to be converted to and from JSON format for API responses and requests
class FoodTruckSerializer(GeoModelSerializer):
    # Read only field to include the owner's username in the serialized data
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = FoodTruck
        fields = ['id', 'name', 'foodType', 'location', 'priceRange', 'status', 'openingTime', 'closingTime', 'owner']