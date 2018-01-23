from django.db import models
from django.core.exceptions import ValidationError
import logging
from .validators import clean_primary_key


class Users(models.Model):
    name = models.CharField(max_length=128)
    email = models.CharField(max_length=128)
    gender = models.CharField(max_length=8, null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name

    """def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        try:
            clean_primary_key(self, force_insert, force_update)
            super().save()
        except (ValidationError, ValueError) as error:
            logging.error(error)"""

    def create_new(self):
        pass

    @staticmethod
    def get_user(user_id):
        try:
            user = Users.objects.get(id=user_id)
            return user
        except Users.DoesNotExist as error:
            logging.error(error)


class Connection(models.Model):
    provider = models.CharField(max_length=16)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self):
        return self.provider

    """def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        try:
            clean_primary_key(self, force_insert)
            super().save()
        except (ValidationError, ValueError) as error:
            logging.error(error)"""
