import logging
from json import dumps, decoder
from django.core.files import File
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import ParseError
from django.views.decorators.csrf import csrf_exempt
from django.utils.datastructures import MultiValueDictKeyError
from .SoundManager import SoundManager
from .ProjectManager import ProjectManager
from .StreamsManager import StreamsManager


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


def main_page(request):
    return render(request, 'index.html')


def check_user_active(request):
    user = request.user
    user_id = user.id
    if user_id:
        response = HttpResponse(dumps(user.username), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def get_all_user_sounds(request):
    sound_manager = SoundManager()
    print(request.user.id)
    sounds = sound_manager.get(request.user.id)
    if sounds is not None:
        response = HttpResponse(dumps(sounds), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def save_user_sound(request, sound_name):
    sound_file = request.FILES['user_audio']
    sound_manager = SoundManager()
    sound = sound_manager.create(request.user.id, sound_name, sound_file)
    if sound is not None:
        response = HttpResponse(dumps(sound), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def remove_user_sound(request, sound_name):
    sound_manager = SoundManager()
    sound = sound_manager.delete(request.user.id, sound_name)
    if sound is not None:
        response = HttpResponse(dumps(sound), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def load_user_sound(request, sound_name):
    sound_manager = SoundManager()
    file_object = sound_manager.load(request.user.id, sound_name)
    if file_object is not None:
        file = File(file_object)
        response = HttpResponse(file, content_type='audio/x-wav')
        response['Content-Disposition'] = 'attachment; filename={}'.format(sound_name)
        response['Content-Length'] = file.size
    else:
        response = BAD_RESPONSE
    return response


def get_all_user_projects(request):
    project_manager = ProjectManager()
    projects = project_manager.get(request.user.id)
    if projects is not None:
        response = HttpResponse(dumps(projects), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def get_user_project(request, project_id):
    project_manager = ProjectManager()
    project = project_manager.get_project(request.user.id, project_id)
    if project is not None:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def save_user_project(request, project_id):
    data = parse_json_data(request)
    project_manager = ProjectManager()
    project = project_manager.create(request.user.id, project_id, data)
    if project is not None:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def delete_user_project(request, project_id):
    """
    :param request: HttpRequest
    :param project_id: int
    :return: json - if success case - name of deleted project, else - None
    """
    project_manager = ProjectManager()
    project = project_manager.delete(request.user.id, project_id)
    if project is not None:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def update_user_project(request, project_id):
    project_name = parse_json_data(request)
    project_manager = ProjectManager()
    project = project_manager.update(request.user.id, project_id, project_name)
    if project is not None:
        response = HttpResponse(dumps(project), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


def get_stream(request, stream_id):
    stream_manager = StreamsManager()
    stream = stream_manager.get(stream_id)
    if stream is not None:
        response = HttpResponse(dumps(stream), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def create_stream(request, project_id):
    data = parse_json_data(request)
    stream_manager = StreamsManager()
    stream = stream_manager.create(project_id, data)
    if stream is not None:
        response = HttpResponse(dumps(stream), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def delete_stream(request, stream_id):
    stream_manager = StreamsManager()
    stream = stream_manager.delete(stream_id)
    if stream is not None:
        response = HttpResponse(dumps(stream), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response


@csrf_exempt
def update_stream(request, stream_id):
    data = parse_json_data(request)
    stream_manager = StreamsManager()
    stream = stream_manager.update(stream_id, data)
    if stream is not None:
        response = HttpResponse(dumps(stream), content_type='application/json')
    else:
        response = BAD_RESPONSE
    return response
