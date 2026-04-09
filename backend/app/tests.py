from django.test import TestCase
from django.contrib.gis.geos import Point
from .models import FoodTruck

# To run tests
# Run: "docker compose exec web python manage.py test --keepdb" from root directory
# What this does, is run tests against a test database within Neon. 
class TruckTest(TestCase):
    def setUp(self):
        FoodTruck.objects.create(
            name="Temple Creperie",
            foodType="French",
            priceRange="$",
            location=Point(-75.153, 39.981)
    )
    
    # Test function
    # Checks if "Temple Creperie" was created and stored
    def test_truck_creation(self):
        truck = FoodTruck.objects.get(name="Temple Creperie")
        self.assertEqual(truck.foodType, "French")
        self.assertEqual(truck.priceRange, "$")

    # Tests that the food truck is represented by a string
    def test_string_representation(self):
        truck = FoodTruck.objects.get(name="Temple Creperie")
        self.assertEqual(str(truck), "Temple Creperie")