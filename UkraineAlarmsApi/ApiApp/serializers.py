from rest_framework import serializers
from .models import UkraineAlarmsStatus


class UkraineSerializer(serializers.ModelSerializer):
    class Meta:
        model = UkraineAlarmsStatus
        fields = '__all__'
