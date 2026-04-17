from django.contrib.gis.db import models
from django.utils import timezone

# Food truck model with fields for name, food type, location, and active status

class FoodTruck(models.Model):
    statusChoices = [
        ('OPEN', 'Open'),
        ('CLOSED', 'Closed'),
    ]
    name = models.CharField(max_length=150)
    foodType = models.CharField(max_length=100)
    location = models.PointField() # Map location of the food truck
    priceRange = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=statusChoices, default='OPEN') # Whether the food truck is currently open or closed
    openingTime = models.TimeField(null=True, blank=True) # Time when the food truck opens
    closingTime = models.TimeField(null=True, blank=True) # Time when the food truck closes

    def __str__(self):
        return self.name

class Review(models.Model):
    truck = models.ForeignKey(FoodTruck, on_delete=models.CASCADE)
    email = models.EmailField()
    rating = models.IntegerField()
    comment = models.TextField(blank=True)


class TruckSubmission(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=150)
    foodType = models.CharField(max_length=100)
    location_text = models.CharField(max_length=255)
    priceRange = models.CharField(max_length=100)