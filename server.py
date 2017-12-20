import logging
from os import path as os_path
from json import dump
from json import loads as json_loads
from bottle import SimpleTemplate, TemplateError, route, static_file, run, request, abort, HTTP_CODES

from src.core.dbconnection import Connection

RESOURCE_PATH = "src"


@route("/")
def index():
    try:
        return SimpleTemplate(name="index.html", lookup=[RESOURCE_PATH]).render()
    except TemplateError as err:
        print(err)
        abort(500, str(err))


@route("/src/<filename:path>")
def rout(filename):
    return static_file(filename, root=os_path.join(os_path.dirname(os_path.abspath(__file__)), RESOURCE_PATH))


@route("/sound/", method="POST")
def execute():
    try:
        str_response = request.body.read().decode('utf-8')
        # SEND STATUS-NUMBER IF DB DON'T OPEN !!!!!!!!!
        obj = json_loads(str_response)
        c = Connection()
        c.post_test(obj)
        return obj
    except ValueError as err:
        print(err)
        abort(500, str(err))

@route("/sound/", method="GET")
def execute():
    try:
        c = Connection()
        return c.get_test()
    except Exception as err:
        print(err)
        abort(500, str(err))

@route("/sound/<user_id>", method="GET")
def execute(user_id):
    try:
        c = Connection()
        return c.get_id_test(user_id)
    except Exception as err:
        print(err)
        abort(500, str(err))


if __name__ == "__main__":
    run(host="0.0.0.0", port=8002, debug=True, reloader=True)
