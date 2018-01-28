import logging
from json import dumps, decoder
from django.core.files import File
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import ParseError
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist

from .UserManager import UserManager
from .src.DataManager import DataManager
from .src.utils.helper import parse_json, to_json_file


def parse_json_data(request):
    """
    :param request: HttpRequest
    :return: dict
    """
    data = None
    try:
        stream = BytesIO(request.body)
        data = JSONParser().parse(stream)
    except (decoder.JSONDecodeError, ParseError) as error:
        logging.error(error)
    return data


def get_user_id(request):
    key = 'user_id'
    user_id = None
    try:
        if request.method == 'GET':
            user_id = request.GET.get(key)
        elif request.method == 'POST':
            data = parse_json_data(request)
            user_id = data[key]
        if user_id:
            user_id = int(user_id)
    except (ValueError, TypeError) as error:
        logging.error(error)
        raise ValueError('Invalid user id number')
    except MultiValueDictKeyError:
        logging.error('Invalid id user')
    return user_id


def index(request):
    return render(request, "index.html")


def get_all_users(request):
    user_manager = UserManager()
    data = user_manager.get()
    return HttpResponse(dumps(data), content_type='application/json')


@csrf_exempt
def create_new_user(request):
    data = parse_json_data(request)
    user_manager = UserManager()
    user = user_manager.create(data)
    return HttpResponse(dumps(user), content_type='application/json')


@csrf_exempt
def delete_user(request, user_id):
    user_manager = UserManager()
    user = user_manager.delete(user_id)
    if user:
        response = HttpResponse(dumps(user), content_type='application/json')
    else:
        response = HttpResponse('Impossible delete user.', content_type='text/plain', status=403)
    return response


@csrf_exempt
def update_user(request, user_id):
    data = parse_json_data(request)
    user_manager = UserManager()
    user = user_manager.update(user_id, data)
    if user:
        response = HttpResponse(dumps(user), content_type='application/json')
    else:
        response = HttpResponse('Impossible update user.', content_type='text/plain', status=403)
    return response


def get_all_user_sounds(request):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
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
        user_id = int(request.POST['user_id'])
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.save_file(sound_name, request.FILES['user_audio'])
        content = 'User sound saved successfully.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    except MultiValueDictKeyError:
        content = 'Invalid id user.'
        logging.error(content)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def remove_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.delete_user_file(sound_name)
        content = 'User sound removed successfully.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def load_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        file_name = manager.get_full_file_path(sound_name)
        file_object = open(file_name, 'rb')
        file = File(file_object)
        response_object = HttpResponse(file, content_type='audio/x-wav')
        response_object['Content-Disposition'] = 'attachment; filename={}'.format(sound_name)
        response_object['Content-Length'] = file.size
        file_object.close()
    except ValueError as error:
        response_object = HttpResponse(str(error), content_type='text/plain', status=403)
        logging.error(error)
    return response_object


def get_all_user_projects(request):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        result = manager.get_user_folder_content(".json")
        content = dumps(result)
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    return HttpResponse(content, content_type='application/json')


def get_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        file_name = manager.get_full_file_path(project_name)
        content = parse_json(file_name)
        print(content)
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(dumps(content), content_type='application/json')


@csrf_exempt
def save_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        file_name = manager.join_file_path(project_name)
        data = parse_json_data(request)
        print(data)
        to_json_file(file_name, data['project'], 'w')
        content = 'Project saved successfully'
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    except MultiValueDictKeyError as error:
        content = 'Data not received .'
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def delete_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.delete_user_file(project_name)
        content = 'User project removed successfully.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def update_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        file_name = manager.get_full_file_path(project_name)
        data = parse_json_data(request)
        print(data)
        to_json_file(file_name, data['project'], 'w')  # or merge ?
        content = 'Project updated successfully'
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    except MultiValueDictKeyError as error:
        content = 'Data not received .'
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')
