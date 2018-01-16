from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from json import dumps
from .models import Users
from .src.SoundStoreManager import SoundStoreManager
from .serializers import UserSerializer

from django.core.exceptions import ValidationError


STORE_PATH = "/home/kate/Public"


def get_request_json(request):
    """
    :param request: HttpRequest
    :return: dict
    """
    stream = BytesIO(request.body)
    data = JSONParser().parse(stream)
    return data


def get_request_text(request):
    """
    :param request: HttpRequest
    :return: str
    """
    data = request.body.decode("utf-8")  # get text data
    return data


def index(request):
    return render(request, "index.html")


def test(request):
    user = Users()
    user.pk = 'ooo'
    user.name = "qq"
    user.email = "www"
    user.gender = "aa"
    user.birthday = "1988-07-12"
    print(user.pk)
    try:
        user.save()
    except ValidationError as err:
        print(err)
    print(user.pk)
    return HttpResponse("test")


def show_all_users(request):
    users_list = Users.objects.all()
    serializer = UserSerializer(users_list, many=True)
    return HttpResponse(dumps(serializer.data), content_type='application/json')


def show_user_files(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    result = manager.get_user_folder_content()
    return HttpResponse(dumps(result), content_type='application/json')


@csrf_exempt
def create_new_user(request):
    kwargs = get_request_json(request)
    print(kwargs)
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
    user = Users.objects.get(id=user_id)
    user.delete()
    return HttpResponse(dumps('user deleted'), content_type='application/json')


@csrf_exempt
def save_user_file(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    manager.save_file("audio.wav", request.FILES['useradio'])
    return HttpResponse("user file saved")


@csrf_exempt
def remove_user_file(request, user_id):
    file_name = get_request_text(request)
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    manager.delete_user_file(file_name)
    return HttpResponse("user file removed")


def upload_user_file(request, user_id):
    file_name = get_request_text(request)
