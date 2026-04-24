# It is so annoying that django doesn't like camel case :/ 
import token
import os
from django.shortcuts import render
from rest_framework import generics, permissions, status
from app.models import FoodTruck, FoodTruckImageGallery
from app.serializer import FoodTruckSerializer
from .permissions import ownerOrReadOnly 
from django.core.signing import TimestampSigner, SignatureExpired
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth.models import Group
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
import json

# Initialize a TimestampSigner instance for signing and verifying tokens (FOR QR CODE)
signer = TimestampSigner(salt='signup-salt') 

# This view verifies the signup token and creates a new user if the token is valid
# It checks the validity and expiration of the token (valid for 24 hours = 86400 seconds) 
# and ensures that the user does not already exist before creating a new user account
@csrf_exempt
@api_view(['POST'])
def verify_signup(request):
    # Get the token, email, and password from the request data
    token = request.data.get('token')
    print(f"Received token: {token}")
    email = request.data.get('email')
    password = request.data.get('password')

    # Log the received email and token for debugging
    print(f"Email: {email}, Token: {token}")

    # Validate that email and password are provided
    if not email or not password:
        return Response(
            {'error': 'Email and password are required to create an account.'}, 
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        signer.unsign(token, max_age=86400)
    except Exception as e:
        print(f"Token Validation Failed: {str(e)}")
        return Response({'error': f'Invalid or expired token: {str(e)}'}, status=403)
    
    # Check if a user with the given email already exists
    if User.objects.filter(username=email).exists():
        return Response({'error': 'User already exists'}, status=400)
    
    # Create a new user with the provided email and password
    user = User.objects.create_user(username=email, email=email, password=password)    

    # Now add them to an "owners" group
    owner_group, created = Group.objects.get_or_create(name='Owner')
    user.groups.add(owner_group)

    user.save()
    # Return a success message if the user is created successfully
    return Response({'message': 'User created successfully'})

@api_view(['GET'])
@permission_classes([IsAdminUser]) 
# This view generates a signed invite link for the food truck application. Only admin users can access this view.
def generate_invite_link(request):
    # Generate a signed token for the invite link
    token = signer.sign('food-truck-invite')
    # Create the invite URL using the generated token 
    frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000')
    invite_url = f"{frontend_url.rstrip('/')}/signup?token={token}"  
    
    return Response({'invite_url': invite_url})  

@api_view(['POST'])
# This view verifies the invite token and allows users to sign up if the token is valid 
# It checks the validity and expiration of the token
def verify_invite_and_signup(request):
    # Get the token from the request data
    token = request.data.get('token')
    # Try to unsign the token and check if it is valid and not expired (valid for 24 hours = 86400 seconds)
    try:
        signer.unsign(token, max_age=86400)
    except (SignatureExpired, Exception):
        return JsonResponse({'error': 'Invalid or expired token'}, status=403)


@api_view(['POST'])
# ONLY TRUCK OWNERS CAN MAKE TRUCKS
@permission_classes([IsAuthenticated])
def create_food_truck(request):     
    data = request.data

    data.setlist(
        "dietaryRestrictions",
        request.data.getlist("dietaryRestrictions")
    )
    
    price_range_array = [int(request.data.get('minPrice')), int(request.data.get('maxPrice'))]
    
    data.setlist("priceRangeArray", price_range_array)
    
    serializer = FoodTruckSerializer(data=data)

    if serializer.is_valid():
        
        # should actually use request.user, but getting default user for testing rn
        user = request.user

        
        food_truck = serializer.save(owner=user)

        # Handle gallery images separately
        images = request.FILES.getlist('image_gallery')
        for img in images:
            FoodTruckImageGallery.objects.create(
                food_truck=food_truck,
                image=img
            )

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def modify_food_truck(request):     
    data = request.data

    data.setlist(
        "dietaryRestrictions",
        request.data.getlist("dietaryRestrictions")
    )
    
    price_range_array = [int(request.data.get('minPrice')), int(request.data.get('maxPrice'))]
    
    data.setlist("priceRangeArray", price_range_array)
    
    serializer = FoodTruckSerializer(FoodTruck.objects.get("id"),data=data)

    if serializer.is_valid():
        
        # should actually use request.user, but getting default user for testing rn
        user = request.user
        # user = User.objects.first()
        
        food_truck = serializer.save(owner=user)

        # Handle gallery images separately
        images = request.FILES.getlist('image_gallery')
        for img in images:
            FoodTruckImageGallery.objects.create(
                food_truck=food_truck,
                image=img
            )

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
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

@api_view(['GET'])
def get_trucks(request):
    name = request.GET.get("name", '')
    foodtype = request.GET.get("foodtype", '')
    status = request.GET.get("status", '')
    price = request.GET.get("price", '')
    popularity = request.GET.get("popularity", '')
    
    queryset = FoodTruck.objects.all()
    
    if name:
        queryset = queryset.filter(name__icontains=name)
    if foodtype:
        queryset = queryset.filter(foodType__icontains=foodtype)
    if status:
        queryset = queryset.filter(status__icontains=status)
    if price:
        queryset = queryset.filter(
            priceRangeArray__0__lte=price,
            priceRangeArray__1__gte=price
        )
    if popularity:
        queryset = queryset.filter(
            popularity__gte=popularity
        )
    
    serializer = FoodTruckSerializer(queryset, many=True)
    return Response(serializer.data)