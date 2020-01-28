from cart.models import Product, Cart, Order
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, CartSerializer, OrderSerializer

# Product ViewSet
class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.request.user.movies.all()


# Cart ViewSet
class CartViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = CartSerializer

    def get_queryset(self):
        return self.request.user.movies.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Order ViewSet
class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = OrderSerializer

    def get_queryset(self):
        return self.request.user.movies.all()
