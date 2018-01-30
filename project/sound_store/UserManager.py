from .models import Users
from .serializers import UserSerializer
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH


class UserManager(BasicManager):
    def get(self):
        users_list = Users.objects.all()
        serializer = UserSerializer(users_list, many=True)
        return serializer.data

    def create(self, data):
        user = Users(**data)
        user.save()
        manager = DataManager(user.pk, STORE_PATH)
        manager.set_user_id(user.pk)
        manager.create_user_folder()
        result = Users.user_data(user.pk)
        return result

    def delete(self, user_id):
        result = None
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.delete_user()
        user = Users.get_user_object(user_id)
        if user is not None:
            result = Users.user_data(user_id)
            user.delete()
        return result

    def update(self, user_id, data):
        result = None
        user = Users.get_user_object(user_id)
        if user is not None:
            user = Users(id=user_id, **data)
            user.save()
            result = Users.user_data(user_id)
        return result
