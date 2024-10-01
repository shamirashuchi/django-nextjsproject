from django.db import models
from cloudinary.models import CloudinaryField
from django.template.defaultfilters import slugify


# Create your models here.
class Campaign(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    slug = models.SlugField(max_length=225, null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    logo = CloudinaryField('Image', overwrite=True, format="jpg")

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:  # Only generate slug if it's not already set
            to_assign = slugify(self.title)

            # Check for uniqueness of the slug
            if Campaign.objects.filter(slug=to_assign).exists():
                to_assign = f"{to_assign}-{Campaign.objects.all().count() + 1}"

            self.slug = to_assign

        super().save(*args, **kwargs)


class Subscriber(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.DO_NOTHING)
    email = models.EmailField(max_length=254)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.email
