import logging
import postgresql
from src.core.TableManager import TableManager
from bottle import HTTP_CODES


class Connection:
    def __init__(self):
        self.database = None
        self.table_manager = None
        try:
            self.database = postgresql.open('pq://postgres:123456@localhost:5432/SoundStorehouse')
            self.table_manager = TableManager(self.database)
        except postgresql.exceptions.ClientCannotConnectError as error:
            logging.error(error)
            logging.error('>' * 10)
            logging.error(HTTP_CODES[500])

    def post_test(self, json_dict):
        self.table_manager.create_record(json_dict["path"])

    def get_test(self):
        return self.table_manager.get_record_data()

    def get_id_test(self, number):
        return self.table_manager.get_single_record(number)
