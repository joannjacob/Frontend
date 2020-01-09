from rest_framework import routers
from .api import MovieViewSet

router = routers.DefaultRouter()
router.register('api/movielist', MovieViewSet, 'movielist')

urlpatterns = router.urls
