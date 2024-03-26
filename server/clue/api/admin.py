from django.contrib import admin
from django.contrib.auth.models import Group
from .models import *


# unregister Group
admin.site.unregister(Group)

# register UserCharacter
admin.site.register(UserCharacter)
