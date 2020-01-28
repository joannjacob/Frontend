from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# add this
class Movie(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    owner = models.ForeignKey(
        User, related_name="movies", on_delete=models.CASCADE, null=True
    )

    def _str_(self):
        return self.title
