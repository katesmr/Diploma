from .models import UserData, Projects
from .src.DataManager import DataManager
from .StreamsManager import StreamsManager
from .BasicManager import BasicManager, STORE_PATH


class ProjectManager(BasicManager):
    manager = DataManager(1, STORE_PATH)
    stream_manager = StreamsManager()

    def get(self, user_id):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            projects = Projects.user_projects_data(user_id)
            result = []
            for project_id in projects:
                result.append(self.stream_manager.get(project_id))
        return result

    def get_project(self, user_id, project_name):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            project_id = Projects.project_id_by_name(user_id, project_name)
            if project_id is not None:
                result = self.stream_manager.get(project_id)
        return result

    def create(self, user_id, project_name, data):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            project_id = Projects.project_id_by_name(user_id, project_name)
            if project_id is None:  # FIXME validate project id before creation
                new_project = Projects(name=project_name, user=user)
                new_project.save()
                project_id = new_project.pk
            result = self.stream_manager.create(project_id, data)
        return result

    def delete(self, user_id, project_name):
        """
        Delete project from DB and cascade delete streams of the project
        :param user_id:
        :param project_name:
        :return:
        """
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            project_id = Projects.project_id_by_name(user_id, project_name)
            if project_id is not None:
                self.stream_manager.delete(project_id)
                project = Projects.project_object(project_id)
                if project is not None:
                    project.delete()
        return True  # FIXME

    """
    def update(self, user_id, project_name, data):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            self.manager.set_user_id(user_id)
            project_data = Projects.project_id_by_name(user_id, project_name)
            if project_data and project_data is not None:
                project_id = project_data['id']
                self.manager.save_json_file(project_name, data)
                project_path = self.manager.get_full_file_path(project_name)
                updating_project = Projects(id=project_id, path=project_path, name=project_name, user=user, **data)
                updating_project.save()
                result = project_name
        return result"""
