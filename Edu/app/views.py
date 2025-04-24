from rest_framework import serializers
from .models import *
import .serializers import *


class CoursesViewset(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializers_class = CourseSerializer

class contactViewSet(viewsets.ModelViewSet):
    query