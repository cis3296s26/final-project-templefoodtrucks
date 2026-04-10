from django.core.management.base import BaseCommand
from django.utils import timezone
from app.models import FoodTruck

# closeTrucks.py is used as a command to close food trucks that are past their closing time
# This may or may not be optimal, but it is a simple way to ensure that food trucks are closed at the appropriate time without relying on user input.
# TO run the command, run this:
# "docker compose exec web python manage.py closeTrucks" from the root directory

# This command is used to close food trucks that are past their closing time
class Command(BaseCommand):
    help = 'Closes food trucks that are past their closing time'

    # This function is called when the command is run
    def handle(self, *args, **kwargs):
        # Get the current time and find all food trucks that are open and past their closing time
        now = timezone.now().time()
        trucksToClose = FoodTruck.objects.filter(status='OPEN', closingTime__lte=now).update(status='CLOSED')

        # Output the number of trucks that were closed
        self.stdout.write(f"Successfully closed {trucksToClose} trucks.")