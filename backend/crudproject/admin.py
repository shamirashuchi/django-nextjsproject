from django.contrib import admin

# Register your models here.
from .models import Campaign,Subscriber

class CampaignModelAdmin(admin.ModelAdmin):
    list_display=('title','created_at','updated_at')
    search_fields = ('title', 'description')
    list_per_page=1

class SubscriberModelAdmin(admin.ModelAdmin):
    list_display=('email','campaign','created_at')
    search_fields = ('email','campaign__title','created_at')
    list_per_page=1

admin.site.register(Campaign,CampaignModelAdmin)
admin.site.register(Subscriber,SubscriberModelAdmin)