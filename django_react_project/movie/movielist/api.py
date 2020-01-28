from movielist.models import Movie
from rest_framework import viewsets, permissions
from .serializers import MovieSerializer

# Movie ViewSet
class MovieViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = MovieSerializer

    def get_queryset(self):
        return self.request.user.movies.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
