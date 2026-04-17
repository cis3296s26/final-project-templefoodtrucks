from django.shortcuts import render
from rest_framework import generics
from app.models import FoodTruck
from app.serializer import FoodTruckSerializer

# This class defines a view for listing and creating FoodTrucks
# It uses Django REST Framework's generics to provide functionality for handling GET and POST requests
class FoodTruckList(generics.ListCreateAPIView):
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer

# This class defines a view for retrieving, updating, and deleting a specific FoodTruck
class FoodTruckDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer