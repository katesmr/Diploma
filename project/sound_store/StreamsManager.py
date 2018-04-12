from .models import Projects, Streams
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH
from .src.utils.helper import create_unique_file_name


class StreamsManager(BasicManager):
    manager = DataManager(1, STORE_PATH)

    def get(self, stream_id):
        """
        Get single stream data
        :param stream_id: int
        :return: dict
        """
        result = None
        data = Streams.stream_data(stream_id)
        if data is not None:
            result = dict()
            result["id"] = stream_id
            result["data"] = self.manager.json_file_data(data['path'])
        return result

    def get_project_streams(self, project_id):
        """
        Return list of streams data of the project
        :param project_id: int
        :return: list
        """
        result = None
        project = Projects.project_object(project_id)
        if project is not None:
            result = []
            streams = Streams.project_streams_data(project_id)
            for _id in streams:
                result.append(self.get(_id))
        return result

    def create(self, project_id, data):
        """
        :param project_id: int
        :param data: dict
        :return: int - stream primary key
        """
        result = None
        project = Projects.project_object(project_id)
        if project is not None:
            file_name = create_unique_file_name('stream.json')
            self.manager.set_user_id(project.user.id)
            self.manager.save_json_file(file_name, data)  # FIXME validate data before saving file
            stream_path = self.manager.get_full_file_path(file_name)
            new_stream = Streams(path=stream_path, name=file_name, project=project)
            new_stream.save()
            result = {"id": new_stream.pk, "data": data}
        return result

    def delete(self, stream_id):
        """
        Delete the stream from FS
        :param stream_id: int
        :return: int|None
        """
        result = None
        stream = Streams.stream_object(stream_id)
        if stream is not None:
            self.manager.set_user_id(stream.project.user.id)
            data = Streams.stream_data(stream_id)
            if data is not None:
                self.manager.delete_user_file(data['path'])
                result = stream_id
                stream.delete()
        return result

    def delete_project_streams(self, project_id):
        """
        Delete all streams of the project from FS
        :param project_id: int
        :return: None
        """
        tmp = None
        project = Projects.project_object(project_id)
        if project is not None:
            streams = Streams.project_streams_data(project_id)
            for _id in streams:
                tmp = self.delete(_id)

    def update(self, stream_id, data):
        """
        Update steam json data
        :param stream_id: int
        :param data: dict
        :return: int|None
        """
        result = None
        stream = Streams.stream_object(stream_id)
        if stream is not None:
            self.manager.set_user_id(stream.project.user.id)
            self.manager.save_json_file(stream.name, data)
            result = stream_id
        return result
