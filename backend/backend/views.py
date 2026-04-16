from django.shortcuts import render
from rest_framework import generics, permissions
from app.models import FoodTruck
from app.serializer import FoodTruckSerializer
from .permissions import ownerOrReadOnly 

# It is so annoying that django doesn't like camel case :/ 

# This class defines a view for listing and creating FoodTrucks
# It uses Django REST Framework's generics to provide functionality for handling GET and POST requests
class FoodTruckList(generics.ListCreateAPIView):
    # Queryset to retrieve all FoodTruck objects from the database
    queryset = FoodTruck.objects.all()
    # Serializer class to convert FoodTruck objects to and from JSON format
    serializer_class = FoodTruckSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ownerOrReadOnly]
    
    # Function to handle the creation of a new FoodTruck instance
    def perform_create(self, serializer):
        # Save the new FoodTruck instance with the owner set to the current user
        serializer.save(owner=self.request.user)

# This class defines a view for retrieving, updating, and deleting a specific FoodTruck
class FoodTruckDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer
    # Set permissions to allow only authenticated users to read, and only the owner to edit or delete
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ownerOrReadOnly]