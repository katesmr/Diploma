from django.shortcuts import render
from django.http import HttpResponse
from json import dumps
from .models import Users
from .src.SoundStoreManager import SoundStoreManager


STORE_PATH = "/home/kate/Public"


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
    return HttpResponse(dumps(users_list), content_type='application/json')


def create_new_user(request):
    user = Users(name="new", email="email", gender="male", birthday="1992-02-28")
    user.save()
    manager = SoundStoreManager(STORE_PATH, user.pk)
    manager.create_user_folder()
    return HttpResponse("user created")


def delete_user(request, user_id):
    manager = SoundStoreManager(STORE_PATH, user_id)
    manager.delete_user()
    return HttpResponse("user deleted")


def save_user_file(request):
    pass


def delete_user_file(request, user_id, file_name):
    pass


def show_all_user_file(request, user_id):
    manager = SoundStoreManager(STORE_PATH, user_id)
    result = manager.get_user_folder_content()
    return HttpResponse(dumps(result), content_type='application/json')
