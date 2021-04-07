from django.db import models

from django.core.validators import RegexValidator

alphanumeric = RegexValidator(
    r'^[0-9a-zA-Z]*$', 'Only alphanumeric characters are allowed.')


class Android(models.Model):
    Emp_Code = models.CharField(max_length=30, validators=[alphanumeric])
    Emp_Name = models.CharField(max_length=30)
    D_o_Join = models.DateField()
    Salary = models.FloatField()

    def __str__(self):
        return self.Emp_Code
