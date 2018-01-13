class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]


class Test(metaclass=Singleton):
    def __init__(self, number):
        print("init")
        print(number)
        self.number = number
