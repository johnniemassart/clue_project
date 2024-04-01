from django.db import models
from django.conf import settings
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserManager(BaseUserManager):
    def create_superuser(self, username, character, password, **other_fields):
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")
        return self.create_user(username, character, password, **other_fields)

    def create_user(self, username, character, password, **other_fields):
        user = self.model(username=username, character=character, **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)

    class Characters(models.TextChoices):
        Colonel_Mustard = "Colonel Mustard", "Colonel Mustard"
        Miss_Scarlet = "Miss Scarlet", "Miss Scarlet"
        Mr_Green = "Mr. Green", "Mr. Green"
        Mrs_Peacock = "Mrs. Peacock", "Mrs. Peacock"
        Mrs_White = "Mrs. White", "Mrs. White"
        Professor_Plum = "Professor Plum", "Professor Plum"

    character = models.CharField(
        max_length=100, choices=Characters.choices, null=True, blank=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["character"]

    def __str__(self):
        return self.username


# ----------------------------------------------------------------------------------------------


class MyUser(models.Model):
    username = models.CharField(max_length=100)

    class Meta:
        abstract = True


class UserCharacter(MyUser):
    class Characters(models.TextChoices):
        Colonel_Mustard = "Colonel Mustard", "Colonel Mustard"
        Miss_Scarlet = "Miss Scarlet", "Miss Scarlet"
        Mr_Green = "Mr. Green", "Mr. Green"
        Mrs_Peacock = "Mrs. Peacock", "Mrs. Peacock"
        Mrs_White = "Mrs. White", "Mrs. White"
        Professor_Plum = "Professor Plum", "Professor Plum"

    character = models.CharField(max_length=100, choices=Characters.choices)

    def __str__(self):
        return f"{self.username} is {self.character}"
