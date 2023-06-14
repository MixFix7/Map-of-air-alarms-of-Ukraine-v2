from django.shortcuts import render
from rest_framework.utils.serializer_helpers import ReturnDict
from rest_framework.views import APIView
from .models import UkraineAlarmsStatus
from .serializers import UkraineSerializer
from rest_framework.response import Response
from .ukraine_alarms import get_alarms


class UkraineAlarmsView(APIView):
    def get(self, request):
        get_alarms()
        alarms = UkraineAlarmsStatus.objects.all()
        serializer_alarms = UkraineSerializer(alarms, many=True)
        output = serializer_alarms.data
        return Response(output)

    def post(self, request):
        get_alarms()
        alarms = UkraineAlarmsStatus.objects.all()
        serializer_alarms = UkraineSerializer(alarms, many=True)
        output = serializer_alarms.data
        return Response(output)




