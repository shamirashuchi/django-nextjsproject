from django.urls import path
from .views import CampaignListAPIView,CampaignDetailAPIView,SubscribeToCampaignAPIView

urlpatterns = [
    path('crudproject',CampaignListAPIView.as_view(), name="campaigns"),
    path('crudproject/<str:slug>',CampaignDetailAPIView.as_view(), name="campaign"),
     path('subscribers',SubscribeToCampaignAPIView.as_view(), name="subscribe")
]