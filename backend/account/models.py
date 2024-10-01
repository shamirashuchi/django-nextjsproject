from django.db import models

# Create your models here.
class UserRole(models.Model):
    role_name = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)