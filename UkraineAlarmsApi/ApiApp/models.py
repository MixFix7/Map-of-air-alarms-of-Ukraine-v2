from django.db import models
import datetime
import time


class UkraineRegions(models.Model):
    datetime = models.CharField(max_length=50)
    Region = models.CharField(max_length=30)
    Region_en = models.CharField(max_length=30)
    Alarm = models.BooleanField()

    def __str__(self):
        return f"{self.Region}, Alarm:{self.Alarm}"



































    def __str__(self):
        return f"Status of alarms in Ukraine on {self.datetime}"
