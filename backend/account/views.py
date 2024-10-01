from django.shortcuts import render

# Create your views here.
from rest_framework import generics,response,status
from rest_framework.permissions import AllowAny
from account.models import UserRole

from account.serializers import UserRoleSerializer


class UserRoleAPIView(generics.ListAPIView):
    serializer_class = UserRoleSerializer
    def get_queryset(self):
        return UserRole.objects.all()
    

