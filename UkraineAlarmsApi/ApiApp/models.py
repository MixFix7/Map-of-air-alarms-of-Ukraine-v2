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


# class UkraineAlarmsStatus(models.Model):
#     datetime = models.DateTimeField(auto_now_add=True)
#     Vinnytsia = models.BooleanField()
#     Volyn = models.BooleanField()
#     Dnipropetrovska = models.BooleanField()
#     Donetsk = models.BooleanField()
#     Zhytomyr = models.BooleanField()
#     Transcarpathian = models.BooleanField()
#     Zaporizhzhya = models.BooleanField()
#     Ivano_Frankivsk = models.BooleanField()
#     Kyiv = models.BooleanField()
#     Kirovograd = models.BooleanField()
#     Luhansk = models.BooleanField()
#     Lviv = models.BooleanField()
#     Mykolaiv = models.BooleanField()
#     Odesa = models.BooleanField()
#     Poltava = models.BooleanField()
#     Rivne = models.BooleanField()
#     Sumy = models.BooleanField()
#     Ternopil = models.BooleanField()
#     Kharkiv = models.BooleanField()
#     Kherson = models.BooleanField()
#     Khmelnytsky = models.BooleanField()
#     Cherkasy = models.BooleanField()
#     Chernihiv = models.BooleanField()
#     Chernivtsi = models.BooleanField()
#     Crimea = models.BooleanField()
#
#     def __str__(self):
#         return f"Status of alarms in Ukraine on {self.datetime}"

































    def __str__(self):
        return f"Status of alarms in Ukraine on {self.datetime}"
