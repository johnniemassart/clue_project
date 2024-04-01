from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["username"] = user.username
        token["character"] = user.character
        # ...

        return token


class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCharacterViewSet(viewsets.ModelViewSet):
    queryset = UserCharacter.objects.all()
    serializer_class = UserCharacterSerializer


class CharacterOptionsListView(APIView):
    def get(self, request):
        options = UserCharacter.Characters.choices
        options_flattened = []
        [
            options_flattened.append(j)
            for i in options
            for j in i
            if j not in options_flattened
        ]
        return Response(options_flattened)
