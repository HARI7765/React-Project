from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

class placement(models.Model):
    name=models.CharField(max_length=250)
    course=models.CharField(max_length=250)
    image=models.ImageField(upload_to='placement/')
    company=models.CharField(max_length=250)