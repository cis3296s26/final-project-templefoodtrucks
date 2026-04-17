from django.shortcuts import render

from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import FoodTruck
from .serializers import ReviewSerializer, TruckSubmissionSerializer


@api_view(["POST"])
def leave_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        review = serializer.save()

        send_mail(
            "Thanks for leaving a review",
            f"Thank you for reviewing {review.truck.name}!",
            settings.DEFAULT_FROM_EMAIL,
            [review.email],
            fail_silently=True,
        )

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def submit_truck(request):
    serializer = TruckSubmissionSerializer(data=request.data)
    if serializer.is_valid():
        submission = serializer.save()

        send_mail(
            "Food truck submission received",
            f"Thanks for submitting {submission.name}!",
            settings.DEFAULT_FROM_EMAIL,
            [submission.email],
            fail_silently=True,
        )

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
