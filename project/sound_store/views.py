from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from json import dumps
from .models import Users
from .src.SoundStoreManager import SoundStoreManager


STORE_PATH = "/home/kate/Public"


def get_request_data(request):
    """
    :param request: HttpRequest
    :return: dict
    """
    stream = BytesIO(request.body)
    data = JSONParser().parse(stream)
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
    user.save()
    print(user.pk)
    return HttpResponse("test")


def show_all_users(request):
    users_list = Users.objects.all()
    print(users_list)
    return HttpResponse(dumps(users_list), content_type='application/json')


def show_all_user_file(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    result = manager.get_user_folder_content()
    return HttpResponse(dumps(result), content_type='application/json')


@csrf_exempt
def create_new_user(request):
    kwargs = get_request_data(request)
    user = Users(**kwargs)
    user.save()
    manager = SoundStoreManager(user.pk, STORE_PATH)
    manager.create_user_folder()
    return HttpResponse("user created")


@csrf_exempt
def delete_user(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.delete_user()
    return HttpResponse("user deleted")


@csrf_exempt
def save_user_file(request, user_id):
    print(user_id)
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.save_uploaded_file("test.wav", request.FILES['useradio'])
    return HttpResponse("user file saved")


@csrf_exempt
def delete_user_file(request, user_id):
    # file name get from request
    pass
