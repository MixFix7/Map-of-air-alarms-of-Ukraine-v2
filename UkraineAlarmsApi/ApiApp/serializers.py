from rest_framework import serializers
from .models import UkraineRegions


class UkraineSerializer(serializers.ModelSerializer):
    class Meta:
        model = UkraineRegions
        fields = '__all__'


