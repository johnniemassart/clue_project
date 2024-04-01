from django.urls import path
from . import views
from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import include

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register("users", UserViewSet)
router.register("usercharacters", UserCharacterViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("characters/", CharacterOptionsListView.as_view(), name="options"),
    path("api/token/", MyTokenObtainView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
