from django.shortcuts import render
from django.http import HttpResponse
from django.utils.six import BytesIO
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from json import dumps
from .models import Users
from .src.SoundStoreManager import SoundStoreManager
from .serializers import UserSerializer


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
    serializer = UserSerializer(users_list, many=True)
    return HttpResponse(dumps(serializer.data), content_type='application/json')


def show_all_user_file(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    result = manager.get_user_folder_content()
    return HttpResponse(dumps(result), content_type='application/json')


@csrf_exempt
def create_new_user(request):
    kwargs = get_request_data(request)
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
    manager.delete_user()
    return HttpResponse("user deleted")


@csrf_exempt
def save_user_file(request, user_id):
    manager = SoundStoreManager(user_id, STORE_PATH)
    manager.set_user_id(user_id)
    manager.save_uploaded_file("audio.wav", request.FILES['useradio'])
    return HttpResponse("user file saved")


@csrf_exempt
def delete_user_file(request, user_id):
    # file name get from request
    pass
