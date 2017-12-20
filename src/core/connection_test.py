from json import dump
import postgresql


def __to_dict(data):
    result = {}
    for record in data:
        key = record[0]
        result[key] = []
        for value in record[1:]:
            result[key].append(value)
    return result


db = postgresql.open('pq://postgres:123456@localhost:5432/SoundStorehouse')
a = db.prepare("SELECT id, trim(path) FROM sounds")
with open("data.json", 'w') as file:
    dump(__to_dict(a()), file, indent=4)
    print("+")

