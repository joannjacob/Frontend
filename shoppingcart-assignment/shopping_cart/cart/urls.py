from rest_framework import routers
from .views import ProductViewSet, CartViewSet, OrderViewSet

router = routers.DefaultRouter()
router.register("api/product", ProductViewSet, "productlist")
router.register("api/cart", CartViewSet, "cartlist")
router.register("api/order", OrderViewSet, "orderlist")

urlpatterns = router.urls
