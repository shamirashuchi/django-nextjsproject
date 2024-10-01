from django.contrib import admin

# Register your models here.
from account.models import UserRole
class AccountModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'role_name',]
    search_fields = ['role_name']      

admin.site.register(UserRole, AccountModelAdmin)