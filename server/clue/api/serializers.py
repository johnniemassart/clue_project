from rest_framework.serializers import ModelSerializer
from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "character"]


class UserCharacterSerializer(ModelSerializer):
    class Meta:
        model = UserCharacter
        fields = "__all__"
