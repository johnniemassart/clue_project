# from django import forms
# from django.contrib.auth import get_user_model
# from django.contrib.auth.forms import ReadOnlyPasswordHashField

# # article source = https://www.codingforentrepreneurs.com/blog/how-to-create-a-custom-django-user-model/
# # youtube source = https://www.youtube.com/watch?v=HshbjK1vDtY&t=133s

# User = get_user_model()


# class RegisterForm(forms.ModelForm):
#     """
#     The default

#     """

#     password = forms.CharField(widget=forms.PasswordInput)
#     password_2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput)

#     class Meta:
#         model = User
#         fields = ["username", "character"]

#     def clean_username(self):
#         """
#         Verify username is available.
#         """
#         username = self.cleaned_data.get("username")
#         qs = User.objects.filter(username=username)
#         if qs.exists():
#             raise forms.ValidationError("username is taken")
#         return username

#     def clean(self):
#         """
#         Verify both passwords match.
#         """
#         cleaned_data = super().clean()
#         password = cleaned_data.get("password")
#         password_2 = cleaned_data.get("password_2")
#         if password is not None and password != password_2:
#             self.add_error("password_2", "Your passwords must match")
#         return cleaned_data


# class UserAdminCreationForm(forms.ModelForm):
#     """
#     A form for creating new users. Includes all the required
#     fields, plus a repeated password.
#     """

#     password = forms.CharField(widget=forms.PasswordInput)
#     password_2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput)

#     class Meta:
#         model = User
#         fields = ["username", "character"]

#     def clean(self):
#         """
#         Verify both passwords match.
#         """
#         cleaned_data = super().clean()
#         password = cleaned_data.get("password")
#         password_2 = cleaned_data.get("password_2")
#         if password is not None and password != password_2:
#             self.add_error("password_2", "Your passwords must match")
#         return cleaned_data

#     def save(self, commit=True):
#         # Save the provided password in hashed format
#         user = super().save(commit=False)
#         user.set_password(self.cleaned_data["password"])
#         if commit:
#             user.save()
#         return user


# class UserAdminChangeForm(forms.ModelForm):
#     """A form for updating users. Includes all the fields on
#     the user, but replaces the password field with admin's
#     password hash display field.
#     """

#     password = ReadOnlyPasswordHashField()

#     class Meta:
#         model = User
#         fields = ["username", "character", "password", "active", "admin"]

#     def clean_password(self):
#         # Regardless of what the user provides, return the initial value.
#         # This is done here, rather than on the field, because the
#         # field does not have access to the initial value
#         return self.initial["password"]
