from django.contrib.gis.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

# Food truck model with fields for name, food type, location, and active status

class FoodTruck(models.Model):
    statusChoices = [
        ('OPEN', 'Open'),
        ('CLOSED', 'Closed'),
    ]
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=1000)
    foodType = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=15)
    dietaryRestrictions = ArrayField(models.CharField(max_length=20), size=5, blank=True)
    popularity = models.FloatField()
    location = models.CharField(max_length=200, blank=True)
    priceRangeArray = ArrayField(models.IntegerField(), size=2, blank=True)
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

    # Field for storing an image of the food truck. The image will be uploaded to the 'food_truck_images/' directory in the media folder
    image = models.ImageField(upload_to='food_truck_images/', null=True, blank=True) 

    def __str__(self):
        return self.name

# Model to store additional images for a food truck, allowing for a gallery of images to be associated with each truck. 
# Each image is linked to a specific food truck using .foreignKey
class FoodTruckImageGallery(models.Model):
    food_truck = models.ForeignKey(
        FoodTruck,
        on_delete=models.CASCADE,
        related_name='gallery_images'
    )
    image = models.ImageField(upload_to='food_truck_gallery_images/')

    def __str__(self):
        return f"Image for {self.food_truck.name} uploaded"
    
class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    truck = models.ForeignKey(FoodTruck, on_delete=models.CASCADE, related_name="ratings")
    value = models.IntegerField()  # 1–5
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("user", "truck")  # one rating per user per truck