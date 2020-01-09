from django.contrib import admin
from .models import Movie # add this

class MovieAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description', ) # add this

# Register your models here.
admin.site.register(Movie, MovieAdmin) # add this