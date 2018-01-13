import os
from .utils.helper import is_key
from .utils.Singleton import Singleton
from .utils.FileManager import FileManager


class SoundStoreManager(metaclass=Singleton):
    def __init__(self, user_id, storehouse_path):
        """
        :param user_id: int - user id which correspond name of his folder with sounds
        :param storehouse_path: str - general folder with users folders
        """
        assert isinstance(user_id, int)
        assert isinstance(storehouse_path, str)
        if is_key(user_id):
            self.manager = FileManager()
            self.__user_id = str(user_id)
            self.user_folder = None
            if self.manager.is_valid_folder_path(storehouse_path):
                self.storehouse_path = storehouse_path
                self.update_user_path()
            else:
                raise ValueError("Invalid storehouse path")
        else:
            raise ValueError("Invalid user id")

    def get_user_id(self):
        return self.__user_id

    def set_user_id(self, user_id):
        self.__user_id = user_id
        self.update_user_path()

    def update_user_path(self):
        self.user_folder = os.path.join(self.storehouse_path, self.__user_id)

    def save_uploaded_file(self, file_name, file_object):
        path = os.path.join(self.user_folder, file_name)
        self.manager.create_file(path, file_object)

    def create_user_folder(self):
        self.manager.create_folder(self.user_folder)

    def get_user_folder_content(self):
        return self.manager.get_file_name_folder(self.user_folder)

    def delete_user(self):
        self.manager.delete_folder(self.user_folder)
