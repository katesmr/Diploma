import os
import time
import logging


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


def timestamp_number_without_point():
    """
    :return: int - timestamp number where integer and decimal parts joined
    """
    current_time = time.time()
    time_string_format = str(current_time)
    time_integer_format = int(current_time)
    decimal_digit_count = time_string_format[::-1].find('.')
    time_decimal_part = round((current_time - time_integer_format), decimal_digit_count)
    result = str(time_integer_format) + str(time_decimal_part)[2:]
    return result


def create_unique_file_name(file_name):
    """
    :param file_name: str
    :return: str - file name with
    """
    current_time = timestamp_number_without_point()
    splitting_file_name = os.path.splitext(file_name)
    # os.path.splitext return cortege, where first value is file name, second value is file extension
    new_file_name = splitting_file_name[0] + str(current_time) + splitting_file_name[1]
    return new_file_name
