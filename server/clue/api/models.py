from django.db import models


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
