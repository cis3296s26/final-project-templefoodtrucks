from django.contrib.gis.db import models

# Food truck model with fields for name, food type, location, and active status

class FoodTruck(models.Model):
    name = models.CharField(max_length=150)
    foodType = models.CharField(max_length=100)
    location = models.PointField() # Map location of the food truck
    priceRange = models.CharField(max_length=50) # Price range for the food truck
    coordinates = models.CharField(max_length=50) #coordinates
    # TODO: Need more fields for what defines a Food Truck

    def __str__(self):
        return self.name
