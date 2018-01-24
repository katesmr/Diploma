from django.core.files import File
from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from json import dumps
import os
import logging

from .models import Users
from .serializers import UserSerializer
from .src.SoundStoreManager import SoundStoreManager

from django.core.exceptions import ValidationError


STORE_PATH = "/home/kate/Public"


def get_user_id(request):
    key = 'user_id'
    user_id = None
    try:
        if request.method == 'GET':
            user_id = request.GET.get(key)
        elif request.method == 'POST':
            user_id = request.body.decode("utf-8")
        if user_id:
            user_id = int(user_id)
    except ValueError as error:
        logging.error(error)
        raise ValueError('Invalid user id number')
    return user_id


def get_request_json(request):
    data = None
    print(request.body)
    if request.method == 'POST':
        stream = BytesIO(request.body)
        data = JSONParser().parse(stream)
    return data


def index(request):
    return render(request, "index.html")


def get_all_users(request):
    users_list = Users.objects.all()
    serializer = UserSerializer(users_list, many=True)
    return HttpResponse(dumps(serializer.data), content_type='application/json')


@csrf_exempt
def create_new_user(request):
    kwargs = get_request_json(request)
    user = Users(**kwargs)
    user.save()
    manager = SoundStoreManager(user.pk, STORE_PATH)
    manager.set_user_id(user.pk)
    manager.create_user_folder()
    return HttpResponse("user created")


@csrf_exempt
def delete_user(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    manager.delete_user()
    user = Users.get_user(user_id)
    if user is not None:
        user.delete()
        message = 'user deleted'
    else:
        message = 'user doesn\'t exist'
    return HttpResponse(message)


@csrf_exempt
def update_user(request, user_id):
    if Users.objects.filter(id=user_id).exists():
        kwargs = get_request_json(request)
        user = Users(id=user_id, **kwargs)
        user.save()
        message = 'user updated'
    else:
        message = 'user doesn\'t exist'
        # raise ObjectDoesNotExist('User doesn\'t exist ')
    return HttpResponse(message)


def show_all_user_sounds(request):
    try:
        user_id = get_user_id(request)
        manager = SoundStoreManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        result = manager.get_user_folder_content()
        content = dumps(result)
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    return HttpResponse(content, content_type='application/json')


@csrf_exempt
def save_user_sound(request, sound_name):
    try:
        data = get_request_json(request)
        user_id = data['user_id']
        print(user_id)
        manager = SoundStoreManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.save_file(sound_name, request.FILES['user_audio'])
        content = 'user sound saved successfully'
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def remove_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        print(sound_name)
        manager = SoundStoreManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.delete_user_file(sound_name)
        content = 'user sound removed successfully'
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


def upload_user_sound(request):
    pass


@csrf_exempt
def download_user_sound(request, user_id):
    response = get_request_text(request)  # expect file name from client
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    file_name = manager.get_full_file_path(response)
    file_object = open(file_name, 'rb')
    file = File(file_object)
    response_object = HttpResponse(file, content_type='audio/x-wav')
    response_object['Content-Disposition'] = 'attachment; filename={}'.format(response)
    response_object['Content-Length'] = file.size
    file_object.close()
    return response_object


def download_file(request):
    file_object = open('/home/kate/Public/1/test.wav', 'rb')
    file = File(file_object)
    response = HttpResponse(file, content_type="audio/x-wav")
    response['Content-Disposition'] = 'attachment; filename={}'.format("test123.wav")
    response['Content-Length'] = file.size
    # file.seek(0)
    file_object.close()
    return response

