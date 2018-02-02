from .models import UserData
from .serializers import UserSerializer
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH


class UserManager(BasicManager):
    def get(self):
        users_list = UserData.get_all_users()
        return users_list

    def create(self, data):
        user = UserData(**data)
        user.save()
        manager = DataManager(user.pk, STORE_PATH)
        manager.set_user_id(user.pk)
        manager.create_user_folder()
        result = UserData.user_data(user.pk)
        return result

    def delete(self, user_id):
        result = None
        manager = DataManager(user_id, STORE_PATH)
        manager.set_user_id(user_id)
        manager.delete_user()
        user = UserData.get_user_object(user_id)
        if user is not None:
            result = UserData.user_data(user_id)
            user.delete()
        return result

    def update(self, user_id, data):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            user = UserData(id=user_id, **data)
            user.save()
            result = UserData.user_data(user_id)
        return result
