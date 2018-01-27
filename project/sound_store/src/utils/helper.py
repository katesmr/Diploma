import logging
from json import load, dump


def parse_json(file_name):
    """
        @param file_name {String}
        @return {Dict} - returns deserialized json object like dictionary, else returns empty dictionary
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


def to_json_file(file_name, data, mode):
        """
            @param file_name {String}
            @param data {Dict}
            @mode {String}
            @return {void} - write data in json
        """
        try:
            with open(file_name, mode) as file:
                try:
                    dump(data, file, indent=4)
                except TypeError:
                    logging.error("'{}' is not JSON serializable".format(data))
        except OSError as err:
            logging.error(err)


def is_integer(number):
    """
    :param number: {int, str}
    :return: boolean
    """
    res = False
    try:
        if isinstance(number, int):
            res = True
        elif isinstance(number, str):
                if isinstance(int(number), int):
                    res = True
    except ValueError:
            logging.warning("Number '{}' must be integer type".format(number))
    return res


def is_key(number):
    """
    Key of entity must be positive integer number
    """
    res = False
    if is_integer(number):
        if int(number) > 0:
            res = True
    return res
