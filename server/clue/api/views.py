from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


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
