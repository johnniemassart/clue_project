from django.urls import path
from . import views
from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import include

router = DefaultRouter()
router.register("usercharacters", UserCharacterViewSet)

urlpatterns = [
    path("characters/", CharacterOptionsListView.as_view(), name="options"),
    path("", include(router.urls)),
]
