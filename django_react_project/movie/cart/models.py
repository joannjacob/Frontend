from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    description = models.TextField(default="")
    cost = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    tax = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)


class Cart(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    count = models.PositiveIntegerField(default=0)
    total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    shipping_charge = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)

    def __str__(self):
        return "User: {} has {} items in their cart. Their total is ${}".format(
            self.user, self.count, self.total
        )


class Order(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, null=True, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return "This order contains {} {}(s).".format(self.quantity, self.product.name)
