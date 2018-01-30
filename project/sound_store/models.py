from django.db import models
from django.core.exceptions import ValidationError
import logging
from .validators import clean_primary_key


class Users(models.Model):
    name = models.CharField(max_length=128)
    email = models.CharField(max_length=128)
    gender = models.CharField(max_length=8, null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)

    """def __str__(self):
        return self.name"""

    """def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        try:
            clean_primary_key(self, force_insert, force_update)
            super().save()
        except (ValidationError, ValueError) as error:
            logging.error(error)"""

    def create_new(self):
        pass

    @staticmethod
    def get_user_object(user_id):
        user = None
        try:
            user = Users.objects.get(id=user_id)
        except Users.DoesNotExist as error:
            logging.error(error)
        return user

    @staticmethod
    def user_data(user_id):
        result = None
        user_object = Users.get_user_object(user_id)
        if user_object:
            result = dict()
            result['name'] = user_object.name
            result['email'] = user_object.email
            result['gender'] = user_object.gender
            date = user_object.birthday
            if date:
                result['birthday'] = date.strftime('%d-%m-%Y')
            else:
                result['birthday'] = date
        return result


class Sounds(models.Model):
    path = models.CharField(max_length=4096)
    name = models.CharField(max_length=128)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)

    @staticmethod
    def get_sound_object(sound_id):
        sound = None
        try:
            sound = Sounds.objects.get(id=sound_id)
        except Sounds.DoesNotExist as error:
            logging.error(error)
        return sound

    @staticmethod
    def sound_data(user_id):
        result = dict()
        user_sounds = Sounds.objects.filter(user_id=user_id)
        for sound in user_sounds:
            result[sound.id] = dict()
            result[sound.id]['path'] = sound.path
            result[sound.id]['name'] = sound.name
            result[sound.id]['user_id'] = sound.user_id.id
        return result

    @staticmethod
    def sound_data_by_name(user_id, name):
        result = dict()
        sound_object = Sounds.objects.filter(user_id=user_id, name=name)
        for sound in sound_object:
            result['id'] = sound.id
            result['path'] = sound.path
            result['name'] = sound.name
            result['user_id'] = sound.user_id.id
        return result

    @staticmethod
    def sound_data_by_id(sound_id):
        result = dict()
        sound_object = Sounds.get_sound_object(sound_id)
        if sound_object:
            result['id'] = sound_object.id
            result['path'] = sound_object.path
            result['name'] = sound_object.name
            result['user_id'] = sound_object.user_id.id
        return result


class Connection(models.Model):
    provider = models.CharField(max_length=16)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self):
        return self.provider
