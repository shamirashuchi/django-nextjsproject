# Generated by Django 5.1.1 on 2024-09-30 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crudproject', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='slug',
            field=models.SlugField(blank=True, max_length=225, null=True),
        ),
    ]