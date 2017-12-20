class TableManager:
    def __init__(self, connection):
        self.connection = connection

    def update_record(self, table, value, _id):
        update_action = self.connection.prepare("UPDATE {} SET path = '{}' WHERE id = {};".format(table, value, _id))
        update_action()

    def create_record(self, value):
        # INSERT INTO sounds(path) VALUES('test');
        insert_action = self.connection.prepare("INSERT INTO sounds (path) VALUES('{}');".format(value))
        insert_action()

    def delete_record(self):
        pass

    def get_record_data(self):
        row = self.connection.prepare("SELECT id, trim(path) FROM sounds")
        res = row()[:]
        return self.__to_dict(res)

    def get_single_record(self, user_id):
        row = self.connection.prepare("SELECT id, trim(path) FROM sounds WHERE id={}".format(user_id))
        return self.__to_dict(row()[:])

    @staticmethod
    def __to_dict(data):
        result = {}
        for record in data:
            key = record[0]
            result[key] = []
            for value in record[1:]:
                result[key].append(value)
        return result
