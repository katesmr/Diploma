from .models import UserData, Sounds
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH


class SoundManager(BasicManager):
    def get(self, user_id):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            result = Sounds.sound_data(user_id)
        return result

    def create(self, user_id, sound_name, file):
        result = None
        user = UserData.get_user_object(user_id)
        print(user)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            manager.save_file(sound_name, file)
            full_sound_path = manager.get_full_file_path(sound_name)
            sound = Sounds(path=full_sound_path, name=sound_name, user_id=user)
            sound.save()
            result = Sounds.sound_data_by_id(sound.pk)
        return result

    def delete(self, user_id, sound_name):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            is_deleted = manager.delete_user_file(sound_name)
            if is_deleted is True:
                result = Sounds.sound_data_by_name(user_id, sound_name)
                sound = Sounds.get_sound_object(result['id'])
                if sound is not None:
                    sound.delete()
        return result

    def update(self, *args):
        pass

    def load(self, user_id, sound_name):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(sound_name)
            if file_name:
                file_object = open(file_name, 'rb')
                data = Sounds.sound_data_by_name(user_id, file_name)
                result = file_object
        return result
