from django.contrib import admin
from django.contrib.auth.models import Group
from .models import *
from django.contrib.auth.admin import UserAdmin

# from django.contrib.auth import get_user_model
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from .forms import UserAdminCreationForm, UserAdminChangeForm

# unregister Group
admin.site.unregister(Group)


class UserAdminConfig(UserAdmin):
    search_fields = ("username",)
    list_filter = ("is_admin",)
    ordering = ("username",)
    list_display = ("username", "character", "is_staff", "is_admin")
    fieldsets = (
        (None, {"fields": ("username",)}),
        ("Personal Information", {"fields": ("character",)}),
        (
            "Permissions",
            {
                "fields": (
                    "is_staff",
                    "is_admin",
                )
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "character",
                    "password1",
                    "password2",
                    "is_active",
                    "is_staff",
                ),
            },
        ),
    )


admin.site.register(User, UserAdminConfig)

# ------------------------------------------------------------------------------------------

# admin.site.register(UserCharacter)
