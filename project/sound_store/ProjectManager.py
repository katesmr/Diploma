from .models import UserData
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH
from .src.utils.helper import parse_json, to_json_file


class ProjectManager(BasicManager):
    def get(self, user_id):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            result = manager.get_user_folder_content('.json')
        return result

    def get_project(self, user_id, project_name):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(project_name)
            if file_name:
                result = parse_json(file_name)
        return result

    def create(self, user_id, project_name, data):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.join_file_path(project_name)
            to_json_file(file_name, data, 'w')
            result = project_name
        return result

    def delete(self, user_id, project_name):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            is_deleted = manager.delete_user_file(project_name)
            if is_deleted is True:
                result = project_name
        return result

    def update(self, user_id, project_name, data):
        result = None
        user = UserData.get_user_object(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(project_name)
            if file_name:
                to_json_file(file_name, data, 'w')  # or merge ?
                result = project_name
        return result
