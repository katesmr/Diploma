from .models import Users
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH


class SoundManager(BasicManager):
    def get(self, user_id):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            result = manager.get_user_folder_content()
        else:
            raise ValueError('Impossible show user sound. User doesn\'t exist.')
        return result

    def create(self, user_id, sound_name, file):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            manager.save_file(sound_name, file)
            result = sound_name
        else:
            raise ValueError('Impossible create user sound. User doesn\'t exist.')
        return result

    def delete(self, user_id, sound_name):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            manager.delete_user_file(sound_name)  # FIXME if sound already deleted
            result = sound_name
        else:
            raise ValueError('Impossible delete user sound. User doesn\'t exist.')
        return result

    def update(self, *args):
        pass

    def load(self, user_id, sound_name):
        result = None
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(sound_name)
            if file_name:
                file_object = open(file_name, 'rb')
                result = file_object
            else:
                ValueError('Impossible update user sound. Sound doesn\'t exist.')
        else:
            raise ValueError('Impossible update user sound. User doesn\'t exist.')
        return result
