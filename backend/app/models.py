from django.contrib.gis.db import models
from django.utils import timezone
from django.conf import settings

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

    # Foreign key to the user model to associate a food truck with its owner
    # For example, when a truck is created, the owner field will be set to the user who created it.
    # In addition, the truck is associated with an ID number, which is used to identify it in the database and in API requests.
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='food_trucks',
        null = True,
        blank = True
    )

    def __str__(self):
        return self.name
