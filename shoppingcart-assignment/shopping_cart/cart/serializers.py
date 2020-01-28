from rest_framework import serializers
from cart.models import Product, Cart, Order

# Product Serializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# Cart Serializer
class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = "__all__"


# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    cost = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    shipping_charge = serializers.SerializerMethodField()
    tax = serializers.SerializerMethodField()

    def get_name(self, instance):
        print(instance.product.name)
        return instance.product.name

    def get_cost(self, instance):
        print(instance.product.cost)
        return instance.product.cost

    def get_image(self, instance):
        return instance.product.image.url
        # photo_url = instance.product.image
        # return request.build_absolute_uri(photo_url)

    def get_shipping_charge(self, instance):
        print(instance.cart.shipping_charge)
        return instance.cart.shipping_charge

    def get_tax(self, instance):
        print(instance.cart.tax)
        return instance.cart.tax

    class Meta:
        model = Order
        fields = ('id','shipping_charge', 'tax', 'name', 'quantity', 'cost', 'total', 'image')
