from django.db import models
from django.contrib.auth.models import User
from allauth.socialaccount.models import SocialAccount
import logging


class UserData(User):
    class Meta:
        proxy = True

    @staticmethod
    def get_all_users():
        result = {}
        users = User.objects.all()
        for user in users:
            if user.is_superuser is False:
                result[user.id] = dict()
                result[user.id]['username'] = user.username
                result[user.id]['email'] = user.email
        return result

    @staticmethod
    def get_user_object(user_id):
        result = None
        try:
            user = User.objects.get(id=user_id)
            if user.is_superuser is False:
                result = user
        except User.DoesNotExist as error:
            logging.error(error)
        return result

    @staticmethod
    def user_data(user_id):
        result = None
        user_object = UserData.get_user_object(user_id)
        if user_object:
            result = dict()
            result['username'] = user_object.username
            result['email'] = user_object.email
        return result


class Sounds(models.Model):
    path = models.CharField(max_length=4096)
    name = models.CharField(max_length=128)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

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
            # result[sound.id]['user_id'] = sound.user_id.id
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
