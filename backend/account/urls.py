from django.urls import path

from account.views import UserRoleAPIView

urlpatterns = [
    path('account',UserRoleAPIView.as_view(), name="accounts")
]