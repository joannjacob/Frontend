from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    serial_number = models.IntegerField()
    name = models.CharField(max_length=64, unique=True)
    description = models.TextField(default="")
    cost = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='images/')


class Cart(models.Model):
    user = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.CASCADE)
    shipping_charge = models.DecimalField(
        default=0.00, max_digits=10, decimal_places=2)
    # Tax percentage
    tax = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)


class Order(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, null=True, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)

    def __str__(self):
        return "This order contains {} {}(s).".format(self.quantity, self.product.name)
