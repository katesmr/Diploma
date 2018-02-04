import os
import shutil
import logging


class FileManager:
    """
    File and folder
    """
    @staticmethod
    def is_valid_existing_file_path(path):
        """
        :param path: str - path of file which need to check
        :return: boolean
        """
        result = False
        try:
            if os.path.isfile(path):
                result = True
            else:
                raise ValueError("Invalid file name. File '{}' doesn't exist".format(path))
        except (TypeError, ValueError, FileExistsError) as error:
            logging.error(error)
        return result

    @staticmethod
    def is_valid_existing_folder_path(path):
        """
        :param path: str - path of folder which need to check
        :return: boolean
        """
        result = False
        try:
            if os.path.isdir(path):
                result = True
            else:
                raise ValueError("Invalid path of folder '{}'".format(path))
        except (TypeError, ValueError, FileExistsError) as error:
            logging.error(error)
        return result

    @staticmethod
    def get_file_name_folder(search_point, extension=None):
        """
        :param search_point: str - path from searching will begin
        :return: list - list of folder content with paths of files
        """
        result = []
        try:
            for root, dirs, files in os.walk(search_point):
                for file in files:
                    child = os.path.join(root, file)
                    if extension:
                        if file.endswith(extension):
                            result.append(child)  # add files only with determined extension
                    else:
                        result.append(child)  # add ny files
        except (IOError, OSError) as error:
            logging.error(error)
        return result

    @staticmethod
    def create_file(path, file):
        """
        :param path: str - destination file path
        :param file: - object
        :return: void
        """
        try:
            with open(path, "wb+") as file_object:
                for chunk in file.chunks():
                    file_object.write(chunk)
        except (IOError, OSError, FileNotFoundError) as error:
            logging.error(error)

    @staticmethod
    def create_folder(path):
        """
        Create empty folder
        :param path: str - name of new folder
        :return: void
        """
        try:
            if not os.path.exists(path):
                os.makedirs(path)
            else:
                raise FileExistsError("This folder already exist.")
        except TypeError as error:
            logging.error(error)

    def delete_file(self, path):
        """
        :param path: str - path to file
        :return: void
        """
        is_deleted = False
        try:
            if self.is_valid_existing_file_path(path):
                try:
                    os.remove(path)
                    is_deleted = True
                except OSError as error:
                    logging.error(error)
        except TypeError as error:
            logging.error(error)
        return is_deleted

    def delete_folder(self, path):
        """
        Delete folder with its content
        :param path: str - path to folder
        :return: void
        """
        try:
            if self.is_valid_existing_folder_path(path):
                shutil.rmtree(path)
        except TypeError as error:
            logging.error(error)
