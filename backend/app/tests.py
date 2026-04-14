from django.test import TestCase
from django.contrib.gis.geos import Point
from .models import FoodTruck
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

# Source: https://docs.djangoproject.com/en/6.0/topics/testing/overview/

# To run tests
# Run: "docker compose exec web python manage.py test --keepdb" from root directory
# What this does, is run tests against a test database within Neon. 
# To destroy the old version of a test database, run this:
# docker compose exec web python manage.py test

class TruckTest(TestCase):
    def setUp(self):
        FoodTruck.objects.create(
            name="Temple Creperie",
            foodType="French",
            priceRange="$",
            location=Point(-75.153, 39.981),
            status='OPEN',
            openingTime="09:00:00", # 9 AM
            closingTime="21:00:00" # 9 PM
    )
    
    # Test function
    # Checks if "Temple Creperie" was created and stored
    def test_truck_creation(self):
        truck = FoodTruck.objects.get(name="Temple Creperie")
        self.assertEqual(truck.foodType, "French")
        self.assertEqual(truck.priceRange, "$")
        self.assertEqual(truck.status, 'OPEN')

    # Tests that the food truck is represented by a string
    def test_string_representation(self):
        truck = FoodTruck.objects.get(name="Temple Creperie")
        self.assertEqual(str(truck), "Temple Creperie")

# This class tests the API endpoint for the food trucks
class TruckAPITest(APITestCase):
    # This function is called before each test is run
    # it creates a food truck to test against and sets the URL for the API endpoint
    def setUp(self):
        self.truck = FoodTruck.objects.create(
            name="Temple Yummy Food",
            foodType="SO Yummy",
            priceRange="$",
            location=Point(-70, 20),
            status='OPEN',
            openingTime="10:00:00", # 10 AM
            closingTime="22:00:00" # 10 PM
        )
        self.url = reverse('foodtruck-list')

    # This function tests the GET request to the API endpoint (get)
    def test_get_foodtrucks(self):
        # Request the list of food trucks from the API endpoint and check that the response is correct
        response = self.client.get(self.url)
        # Check that the response status code is 200 OK, that there is one food truck in the response, and that the name of the food truck is "Temple Yummy Food"
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], "Temple Yummy Food")
    
    # This function tests the POST request to the API endpoint (create)
    def test_post_truck(self):
        data = {
            "name": "New Truck",
            "foodType": "New Food",
            "priceRange": "$",
            "location": "POINT(-75 30)",
            "status": 'OPEN',
            "openingTime": "11:00:00",
            "closingTime": "23:00:00"
        }
        # Send a POST request to the API endpoint to create a new food truck and check that the response is correct
        # that the status code is 201 CREATED, and that there are now two food trucks in the database
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(FoodTruck.objects.count(), 2)

    # Tests the PUT request to the API endpoint (update)
    def test_update_truck(self): 
        # Get the URL for the food truck with id 1
        url = reverse('foodtruck-detail', args=[self.truck.id]) 
        # Data to update the food truck with
        data = {
            "name": "Updated Truck",
            "foodType": "Updated Food",
            "priceRange": "$$",
            "location": "POINT(-75 30)",
            "status": 'CLOSED',
            "openingTime": "11:00:00",
            "closingTime": "23:00:00"
        }
        # Send a PUT request to the API endpoint to update the food truck with id 1 and check that the response is correct
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Refresh the food truck from the database and check that the name has been updated to "Updated Truck"
        self.truck.refresh_from_db()
        self.assertEqual(self.truck.name, "Updated Truck")