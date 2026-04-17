from rest_framework import serializers
from .models import Review, TruckSubmission


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class TruckSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TruckSubmission
        fields = "__all__"