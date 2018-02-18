from django.db import models
from django.contrib.auth.models import User
import logging


class UserData(User):
    class Meta:
        proxy = True

    @staticmethod
    def user_object(user_id):
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
        user_object = UserData.user_object(user_id)
        if user_object:
            result = dict()
            result['username'] = user_object.username
            result['email'] = user_object.email
        return result


class Sounds(models.Model):
    path = models.CharField(max_length=4096)
    name = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @staticmethod
    def sound_object(sound_id):
        result = None
        try:
            result = Sounds.objects.get(id=sound_id)
        except Sounds.DoesNotExist as error:
            logging.error(error)
        return result

    @staticmethod
    def user_sounds_data(user_id):
        result = dict()
        user_sounds = Sounds.objects.filter(user_id=user_id)
        for sound in user_sounds:
            result[sound.id] = dict()
            result[sound.id]['path'] = sound.path
            result[sound.id]['name'] = sound.name
            # result[sound.id]['user_id'] = sound.user.id
        return result

    @staticmethod
    def sound_data_by_name(user_id, name):
        result = dict()
        sounds = Sounds.objects.filter(user_id=user_id, name=name)
        for sound in sounds:
            result['id'] = sound.id
            result['path'] = sound.path
            result['name'] = sound.name
            # sound.user - return object of corresponding user
            result['user_id'] = sound.user.id
        return result

    @staticmethod
    def sound_data_by_id(sound_id):
        result = dict()
        sound_object = Sounds.sound_object(sound_id)
        if sound_object:
            result['id'] = sound_object.id
            result['path'] = sound_object.path
            result['name'] = sound_object.name
            # sound_object.user - return object of corresponding user
            result['user_id'] = sound_object.user.id
        return result


class Projects(models.Model):
    name = models.CharField(max_length=128)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @staticmethod
    def project_object(project_id):
        result = None
        try:
            result = Projects.objects.get(id=project_id)
        except Sounds.DoesNotExist as error:
            logging.error(error)
        return result

    @staticmethod
    def user_projects_data(user_id):
        result = dict()
        user_projects = Projects.objects.filter(user_id=user_id)
        for project in user_projects:
            result[project.id] = dict()
            result[project.id]['name'] = project.name
        return result

    @staticmethod
    def project_id_by_name(user_id, name):
        result = None
        projects = Projects.objects.filter(user_id=user_id, name=name)
        for project in projects:
            result = project.id
        return result


class Streams(models.Model):
    path = models.CharField(max_length=4096)
    name = models.CharField(max_length=128)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

    @staticmethod
    def stream_object(stream_id):
        result = None
        try:
            result = Streams.objects.get(id=stream_id)
        except Sounds.DoesNotExist as error:
            logging.error(error)
        return result

    @staticmethod
    def project_streams_data(project_id):
        result = dict()
        project_streams = Streams.objects.filter(project_id=project_id)
        for stream in project_streams:
            result[stream.id] = dict()
            result[stream.id]['path'] = stream.path
            result[stream.id]['name'] = stream.name
        return result
