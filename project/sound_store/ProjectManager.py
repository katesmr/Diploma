from .models import UserData, Projects
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH


class ProjectManager(BasicManager):
    manager = DataManager(1, STORE_PATH)

    def get(self, user_id):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            result = Projects.user_projects_data(user_id)
        return result

    def get_project(self, user_id, project_name):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            result = Projects.project_data_by_name(user_id, project_name)
        return result

    def create(self, user_id, project_name, data):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            self.manager.set_user_id(user_id)
            self.manager.save_json_file(project_name, data)
            project_path = self.manager.get_full_file_path(project_name)
            new_project = Projects(path=project_path, name=project_name, user=user, **data)
            new_project.save()
            result = project_name
        return result

    def delete(self, user_id, project_name):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            self.manager.set_user_id(user_id)
            is_deleted = self.manager.delete_user_file(project_name)
            if is_deleted is True:
                result = Projects.project_data_by_name(user_id, project_name)
                project = Projects.project_object(result['id'])
                if project is not None:
                    project.delete()
        return result

    def update(self, user_id, project_name, data):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            self.manager.set_user_id(user_id)
            project_data = Projects.project_data_by_name(user_id, project_name)
            if project_data and project_data is not None:
                project_id = project_data['id']
                self.manager.save_json_file(project_name, data)
                project_path = self.manager.get_full_file_path(project_name)
                updating_project = Projects(id=project_id, path=project_path, name=project_name, user=user, **data)
                updating_project.save()
                result = project_name
        return result
