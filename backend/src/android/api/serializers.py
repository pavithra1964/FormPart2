from rest_framework import serializers

from android.models import Android


class AndroidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Android
        fields = ('id', 'Emp_Code', 'Emp_Name', 'D_o_Join', 'Salary')
