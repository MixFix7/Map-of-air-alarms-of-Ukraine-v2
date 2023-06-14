from django.urls import path
from .views import *

urlpatterns = [
    path('ukraineApi/', UkraineAlarmsView.as_view(), name="alarmsApi")
]
