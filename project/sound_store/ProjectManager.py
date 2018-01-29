from .models import Users
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH
from .src.utils.helper import parse_json, to_json_file


class ProjectManager(BasicManager):
    def get(self, user_id):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            result = manager.get_user_folder_content('.json')
        else:
            raise ValueError('Impossible show user projects. User doesn\'t exist.')
        return result

    def get_project(self, user_id, project_name):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(project_name)
            if file_name:
                result = parse_json(file_name)
            else:
                raise ValueError('Impossible show user project. Project doesn\'t exist.')
        else:
            raise ValueError('Impossible show user project. User doesn\'t exist.')
        return result

    def create(self, user_id, project_name, data):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.join_file_path(project_name)
            to_json_file(file_name, data, 'w')
            result = project_name
        else:
            raise ValueError('Impossible create project. User doesn\'t exist.')
        return result

    def delete(self, user_id, project_name):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            manager.delete_user_file(project_name)   # FIXME if sound already deleted
            result = project_name
        else:
            raise ValueError('Impossible delete project. User doesn\'t exist.')
        return result

    def update(self, user_id, project_name, data):
        user = Users.get_user(user_id)
        if user is not None:
            manager = DataManager(user_id, STORE_PATH)
            manager.set_user_id(user_id)
            file_name = manager.get_full_file_path(project_name)
            if file_name:
                to_json_file(file_name, data, 'w')  # or merge ?
                result = project_name
            else:
                raise ValueError('Impossible update project. Project doesn\'t exist.')
        else:
            raise ValueError('Impossible update project. User doesn\'t exist.')
        return result
