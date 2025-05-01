from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, ContactViewset

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'contacts', ContactViewset, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]