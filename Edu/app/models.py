from django.db import models

# Create your models here.
class course(models.Model):
    name=models.CharField(max_length=250)
    description=models.CharField(max_length=250)
    image=models.ImageField(upload_to='profile/')


class contact(models.Model):
    name=models.CharField(max_length=250)
    email=models.EmailField()
    phone=models.CharField(max_length=12)
    message=models.TextField()

class placement(models.Model):
    name=models.CharField(max_length=250)
    course=models.CharField(max_length=250)
    image=models.ImageField(upload_to='placement/')
    company=models.CharField(max_length=250)