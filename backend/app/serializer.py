from rest_framework_gis.serializers import GeoModelSerializer
from rest_framework import serializers
from .models import FoodTruck, FoodTruckImageGallery

# Serializer for the FoodTruckImageGallery model
# allowing it to be converted to and from JSON format for API responses and requests
class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodTruckImageGallery
        fields = ['id', 'image']

# This class serializes the FoodTruck model, allowing it to be converted to and from JSON format for API responses and requests
class FoodTruckSerializer(serializers.ModelSerializer):
    # Nested serializer to include the related gallery images in the serialized data for a food truck.
    gallery_images = GallerySerializer(many=True, read_only=True)
    # Read only field to include the owner's username in the serialized data
    owner = serializers.ReadOnlyField(source='owner.username')
    image = serializers.ImageField(required=False, allow_null=True)
    class Meta:
        model = FoodTruck
        fields = ['id', 'name', 'foodType', 'location', 'priceRange', 'status', 'openingTime', 'closingTime', 'owner', 'image', 'gallery_images']
        # Make the owner field read only, so only the creater of the account can set it, and it cannot be changed through API requests. 
        # This ensures that the ownership of a food truck cannot be transferred to another user through the API.
        read_only_fields = ['owner']    