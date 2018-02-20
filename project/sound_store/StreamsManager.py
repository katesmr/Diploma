from .models import Projects, Streams
from .src.DataManager import DataManager
from .BasicManager import BasicManager, STORE_PATH
from .src.utils.helper import create_unique_file_name


class StreamsManager(BasicManager):
    manager = DataManager(1, STORE_PATH)

    def get(self, project_id):
        result = None
        project = Projects.project_object(project_id)
        if project is not None:
            result = []
            streams = Streams.project_streams_data(project_id)
            for key in streams:
                stream_path = streams[key]['path']
                result.append(self.manager.json_file_data(stream_path))
        return result

    def create(self, project_id, data):
        result = None
        project = Projects.project_object(project_id)
        if project is not None:
            file_name = create_unique_file_name('stream.json')
            self.manager.set_user_id(project.user.id)
            self.manager.save_json_file(file_name, data)  # FIXME validate data before saving file
            stream_path = self.manager.get_full_file_path(file_name)
            new_stream = Streams(path=stream_path, name=file_name, project=project)
            new_stream.save()
            result = file_name
        return result

    def delete(self, project_id):
        """
        Delete streams from FS
        :param project_id:
        :return:
        """
        project = Projects.project_object(project_id)
        if project is not None:
            self.manager.set_user_id(project.user.id)
            streams = Streams.project_streams_data(project_id)
            for key in streams:
                stream_path = streams[key]['path']
                self.manager.delete_user_file(stream_path)

    def update(self, stream_id, data):
        stream = Streams.stream_object(stream_id)
        if stream is not None:
            self.manager.set_user_id(stream.project.user.id)
            self.manager.save_json_file(stream.name, data)
