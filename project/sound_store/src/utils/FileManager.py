import os
import shutil
import logging
from json import load, dump


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

    def create_folder(self, path):
        """
        Create empty folder
        :param path: str - name of new folder
        :return: void
        """
        is_created = False
        try:
            if not self.is_valid_existing_file_path(path):
                os.makedirs(path)
                is_created = True
            else:
                raise FileExistsError("This folder already exist.")
        except TypeError as error:
            logging.error(error)
        return is_created

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

    @staticmethod
    def parse_json(file_name):
        """
        :param file_name: str
        :return deserialized json object like dictionary, else returns empty dictionary
        """
        result = {}
        try:
            with open(file_name) as jsonData:
                try:
                    result = load(jsonData)
                except ValueError:
                    logging.error("Invalid json file '{}'".format(file_name))
        except FileNotFoundError:
            logging.warning("File '{}' don't exist".format(file_name))
        return result

    @staticmethod
    def to_json_file(file_name, data, mode):
        """
        :param file_name: str
        :param data: dict
        :param mode: str
        :return write data in json
        """
        try:
            with open(file_name, mode) as file:
                try:
                    dump(data, file, indent=4)
                except TypeError:
                    logging.error("'{}' is not JSON serializable".format(data))
        except OSError as err:
            logging.error(err)
