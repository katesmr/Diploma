import os
import logging
from .utils.helper import is_key
from .utils.Singleton import Singleton
from .utils.FileManager import FileManager


class DataManager(metaclass=Singleton):
    def __init__(self, user_id, storehouse_path):
        """
        :param user_id: int - user id which correspond name of his folder with sounds
        :param storehouse_path: str - general folder with users folders
        """
        try:
            # assert isinstance(user_id, int)
            assert isinstance(storehouse_path, str)
            if is_key(user_id):
                self.file_manager = FileManager()
                self.__user_id = str(user_id)
                self.user_folder = None
                if self.file_manager.is_valid_existing_folder_path(storehouse_path):
                    self.storehouse_path = storehouse_path
                    self.update_user_path()
                else:
                    raise ValueError("Invalid storehouse path")
            else:
                raise ValueError("Invalid user id")
        except AssertionError as error:
            logging.error(error)

    def get_user_id(self):
        return self.__user_id

    def set_user_id(self, user_id):
        assert isinstance(user_id, int)
        if is_key(user_id):
            self.__user_id = str(user_id)
            self.update_user_path()  # set new path to new user folder
        else:
            raise ValueError("Invalid user id")

    def update_user_path(self):
        self.user_folder = os.path.join(self.storehouse_path, self.__user_id)

    def save_file(self, file_name, file_object):
        path = os.path.join(self.user_folder, file_name)
        self.file_manager.create_file(path, file_object)

    def create_user_folder(self):
        try:
            self.file_manager.create_folder(self.user_folder)
        except FileExistsError as error:
            logging.error(error)

    def get_user_folder_content(self, extension=None):
        return self.file_manager.get_file_name_folder(self.user_folder, extension)

    def delete_user(self):
        self.file_manager.delete_folder(self.user_folder)

    def delete_user_file(self, file_name):
        path = os.path.join(self.user_folder, file_name)
        is_deleted = self.file_manager.delete_file(path)
        return is_deleted

    def get_full_file_path(self, file_name):
        result = None
        path = os.path.join(self.user_folder, file_name)
        if self.file_manager.is_valid_existing_file_path(path):
            result = path
        return result

    def join_file_path(self, file_name):
        """
        Join new file with path of user data storage
        """
        return os.path.join(self.user_folder, file_name)
