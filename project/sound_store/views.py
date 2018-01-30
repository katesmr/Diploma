import logging
from json import dumps, decoder
from django.core.files import File
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import ParseError
from django.views.decorators.csrf import csrf_exempt

from .UserManager import UserManager
from .SoundManager import SoundManager
from .ProjectManager import ProjectManager


BAD_RESPONSE = HttpResponse(dumps(None), content_type='application/json', status=400)


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
        response = BAD_RESPONSE
    return response


@csrf_exempt
def update_user(request, user_id):
    data = parse_json_data(request)
    user_manager = UserManager()
    user = user_manager.update(user_id, data)
    if user:
        response = HttpResponse(dumps(user), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def get_all_user_sounds(request):
    user_id = get_user_id(request)
    sound_manager = SoundManager()
    sounds = sound_manager.get(user_id)
    if sounds:
        response = HttpResponse(dumps(sounds), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def save_user_sound(request, sound_name):
    user_id = int(request.POST['user_id'])
    sound_file = request.FILES['user_audio']
    sound_manager = SoundManager()
    sound = sound_manager.create(user_id, sound_name, sound_file)
    if sound:
        response = HttpResponse(dumps(sound), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def remove_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        sound_manager = SoundManager()
        sound = sound_manager.delete(user_id, sound_name)
        response = HttpResponse(dumps(sound), content_type='application/json')
    except ValueError as error:
        response = BAD_RESPONSE
        logging.error(error)
    return response


@csrf_exempt
def load_user_sound(request, sound_name):
    user_id = get_user_id(request)
    sound_manager = SoundManager()
    file_object = sound_manager.load(user_id, sound_name)
    if file_object:
        file = File(file_object)
        response = HttpResponse(file, content_type='audio/x-wav')
        response['Content-Disposition'] = 'attachment; filename={}'.format(sound_name)
        response['Content-Length'] = file.size
    else:
        response = BAD_RESPONSE
    return response


def get_all_user_projects(request):
    user_id = get_user_id(request)
    project_manager = ProjectManager()
    projects = project_manager.get(user_id)
    if projects:
        response = HttpResponse(dumps(projects), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def get_user_project(request, project_name):
    user_id = get_user_id(request)
    project_manager = ProjectManager()
    project = project_manager.get_project(user_id, project_name)
    if project:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def save_user_project(request, project_name):
    user_id = get_user_id(request)
    response = parse_json_data(request)
    data = response['project']
    project_manager = ProjectManager()
    project = project_manager.create(user_id, project_name, data)
    if project:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def delete_user_project(request, project_name):
    user_id = get_user_id(request)
    project_manager = ProjectManager()
    project = project_manager.delete(user_id, project_name)
    if project:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def update_user_project(request, project_name):
    user_id = get_user_id(request)
    response = parse_json_data(request)
    data = response['project']
    project_manager = ProjectManager()
    project = project_manager.update(user_id, project_name, data)
    if project:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response
