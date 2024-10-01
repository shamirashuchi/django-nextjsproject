from rest_framework import serializers

from account.models import UserRole


class UserRoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserRole
        fields = ['role_name', 'created', 'updated', 'id']
        read_only_fields = ['created', 'updated', 'id']