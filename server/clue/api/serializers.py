from rest_framework.serializers import ModelSerializer
from .models import *


class UserCharacterSerializer(ModelSerializer):
    class Meta:
        model = UserCharacter
        fields = "__all__"
