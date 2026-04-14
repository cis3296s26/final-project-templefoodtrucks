from django.core.management.base import BaseCommand
from django.utils import timezone
from app.models import FoodTruck

# updateTrucks.py is used as a command to close food trucks that are past their closing time
# This may or may not be optimal, but it is a simple way to ensure that food trucks are closed at the appropriate time without relying on user input.
# TO run the command, run this:
# "docker compose exec web python manage.py updateTrucks" from the root directory

# This command is used to close food trucks that are past their closing time
class Command(BaseCommand):
    help = 'Closes food trucks that are past their closing time'

    # This function is called when the command is run
    def handle(self, *args, **kwargs):
        # Get the current time and find all food trucks that are open and past their closing time
        now = timezone.localtime(timezone.now()).time()
        # Debugging line to ensure that the command is running at the correct time
        self.stdout.write(f"The current time is: {now}")
        # Update the status of the food trucks that are past their closing time to "CLOSED" 
        # and those that are past their opening time but not past their closing time to "OPEN"
        trucksToClose = FoodTruck.objects.filter(status='OPEN', closingTime__lte=now).update(status='CLOSED')
        trucksToOpen = FoodTruck.objects.filter(status='CLOSED', openingTime__lte=now, closingTime__gt=now).update(status='OPEN')

        # Output the number of trucks that were closed/opened
        self.stdout.write(f"Successfully closed {trucksToClose} trucks.")
        self.stdout.write(f"Successfully opened {trucksToOpen} trucks.")