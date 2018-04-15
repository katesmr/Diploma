import logging
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
            result = Projects.user_projects_data(user_id)
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
        :return: int - primary key of created project
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
            else:
                pass  # create empty project
            result = {"id": project_id, "name": project_name}
        return result

    def update(self, user_id, project_id, source):
        """
        :param user_id:
        :param project_id:
        :param source:
        :return:
        """
        result = None
        try:
            _id = source['id']
            name = source['name']
            track_setting_list = source['__data']
            project = Projects.project_object(_id)
            if project is not None:
                result = dict()
                result["id"] = _id
                if name is not None or name.length > 0:
                    old_name = project.name
                    if name != old_name:
                        project = Projects(id=_id, name=name)
                        project.save()
                    result['name'] = project.name
                else:
                    raise ValueError('Project name should not be empty.')
                result["data"] = self.stream_manager.update_all(_id, track_setting_list)
        except KeyError as error:
            logging.error(error)
        return result

    def delete(self, user_id, project_id):
        """
        Delete project from DB and cascade delete streams of the project
        :param user_id:
        :param project_id:
        :return: int - primary key of deleted project
        """
        result = None
        user = UserData.user_object(user_id)
        if user is not None:
            project = Projects.project_object(project_id)
            if project is not None:
                self.stream_manager.delete_project_streams(project_id)
                result = project_id
                project.delete()
        return result
