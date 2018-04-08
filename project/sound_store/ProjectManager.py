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
                element = dict()
                element["id"] = project_id
                element["name"] = projects[project_id]["name"]
                result.append(element)
        return result

    def get_project(self, user_id, project_id):
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            # get object by project id for check on its existing
            project = Projects.project_object(project_id)
            if project is not None:
                result = self.stream_manager.get_project_streams(project_id)
        return result

    def create(self, user_id, project_name, data):
        """
        Create project
        :param user_id: int
        :param project_name: str
        :param data: dict|None
        :return:
        """
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            # project_id = Projects.project_id_by_name(user_id, project_name)
            # if project_id is None:
            new_project = Projects(name=project_name, user=user)
            new_project.save()
            project_id = new_project.pk
            if data is not None:
                self.stream_manager.create(project_id, data)
                result = project_id
            else:
                pass
                # create empty project
        return result

    def delete(self, user_id, project_id):
        """
        Delete project from DB and cascade delete streams of the project
        :param user_id:
        :param project_id:
        :return:
        """
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            project = Projects.project_object(project_id)
            if project is not None:
                self.stream_manager.delete_project_streams(project_id)
                result = project.name
                project.delete()
        return result

    def update(self, user_id, project_id, new_project_name):
        """
        Rename project
        :param user_id:
        :param project_id:
        :param new_project_name:
        :return:
        """
        result = None
        project = Projects.project_object(project_id)
        if project is not None:
            if new_project_name is not None or new_project_name.length > 0:
                project = Projects(id=project_id, name=new_project_name)
                project.save()
        return result
