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
        sound_manager = SoundManager()
        content = sound_manager.get(user_id)
        if content is None:
            content = 'Impossible show user sound.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(dumps(content), content_type='application/json')


@csrf_exempt
def save_user_sound(request, sound_name):
    try:
        user_id = int(request.POST['user_id'])
        sound_file = request.FILES['user_audio']
        sound_manager = SoundManager()
        content = sound_manager.create(user_id, sound_name, sound_file)
        if content is None:
            content = 'User sound doesn\'t create.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    except MultiValueDictKeyError:
        content = 'Invalid id user.'
        logging.error(content)
    return HttpResponse(dumps(content), content_type='application/json')


@csrf_exempt
def remove_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        sound_manager = SoundManager()
        content = sound_manager.delete(user_id, sound_name)
        if content is None:
            content = 'User sound doesn\'t delete.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(dumps(content), content_type='application/json')


@csrf_exempt
def load_user_sound(request, sound_name):
    try:
        user_id = get_user_id(request)
        sound_manager = SoundManager()
        file_object = sound_manager.load(user_id, sound_name)
        if file_object:
            file = File(file_object)
            response_object = HttpResponse(file, content_type='audio/x-wav')
            response_object['Content-Disposition'] = 'attachment; filename={}'.format(sound_name)
            response_object['Content-Length'] = file.size
        else:
            response_object = HttpResponse(status=403)
    except ValueError as error:
        response_object = HttpResponse(str(error), content_type='text/plain', status=403)
        logging.error(error)
    return response_object


def get_all_user_projects(request):
    try:
        user_id = get_user_id(request)
        project_manager = ProjectManager()
        content = project_manager.get(user_id)
        if content is None:
            content = 'Impossible show user projects.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(dumps(content), content_type='application/json')


def get_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        project_manager = ProjectManager()
        content = project_manager.get_project(user_id, project_name)
        print(content)
        if content is None:
            content = 'Impossible show user project.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(dumps(content), content_type='application/json')


@csrf_exempt
def save_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        response = parse_json_data(request)
        data = response['project']
        project_manager = ProjectManager()
        content = project_manager.create(user_id, project_name, data)
        if content is None:
            content = 'Project doesn\'t save.'
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
        project_manager = ProjectManager()
        content = project_manager.delete(user_id, project_name)
        if content is None:
            content = 'Project doesn\'t remove.'
    except ValueError as error:
        content = str(error)
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')


@csrf_exempt
def update_user_project(request, project_name):
    try:
        user_id = get_user_id(request)
        response = parse_json_data(request)
        data = response['project']
        project_manager = ProjectManager()
        content = project_manager.update(user_id, project_name, data)
        if content is None:
            content = 'Project doesn\'t update.'
    except ValueError as error:
        content = dumps(str(error))
        logging.error(error)
    except MultiValueDictKeyError as error:
        content = 'Data not received .'
        logging.error(error)
    return HttpResponse(content, content_type='text/plain')
