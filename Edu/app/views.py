from rest_framework import viewsets
from .models import Course, Contact
from .serializers import CourseSerializer, ContactSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ContactViewset(viewsets.ModelViewSet):  
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer