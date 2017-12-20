import os
from src.utils.Singleton import Singleton
from src.utils.FileManager import FileManager


class SoundStorehouseManager(metaclass=Singleton):
    def __init__(self, user_id, storehouse_path):
        """
        :param user_id: str|int - user id which correspond name of his folder with sounds
        """
        self.manager = FileManager()
        self.__user_id = user_id
        self.user_folder = None
        if self.manager.is_valid_folder_path(storehouse_path):
            self.storehouse_path = storehouse_path
            self.update_user_path()
        else:
            raise ValueError("Invalid storehouse path")

    def get_user_id(self):
        return self.__user_id

    def set_user_id(self, user_id):
        self.__user_id = user_id
        self.update_user_path()

    def update_user_path(self):
        self.user_folder = os.path.join(self.storehouse_path, self.__user_id)

    def create_user_folder(self):
        self.manager.create_folder(self.user_folder)

    def get_user_folder_content(self):
        self.manager.get_file_name_folder(self.user_folder)


t = SoundStorehouseManager("", "/home/kate/Documents/stady hard/third")
print(t)

