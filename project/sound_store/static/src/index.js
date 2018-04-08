var merger_test = require("merger_test");

var WindowManager = require("view/WindowManager");
var ProjectList = require("view/ProjectList");

var ProjectListController = require("controller/ProjectListController");
var ProjectListModel = require("model/ProjectListModel");
var Observer = require("observer");

var Req = require("utils/RequestManager");

module.exports = {
    "merger_test": merger_test
};

var projectListObserver = new Observer();
var projectListController = new ProjectListController(projectListObserver);
var projectListModel = new ProjectListModel();

var projectListView = new ProjectList(projectListController);
projectListController.attachModel(projectListModel);

var windowManager = new WindowManager({
    "projectList": projectListView
});
windowManager.setActiveWindow(projectListView);

projectListController.fetchData();
