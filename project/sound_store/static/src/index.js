var merger_test = require("merger_test");

var WindowManager = require("view/WindowManager");
var ProjectListView = require("view/ProjectListView");
var TrackListView = require("view/TrackListView");

var ProjectListController = require("controller/ProjectListController");
var ProjectController = require("controller/ProjectController");
var ProjectListModel = require("model/ProjectListModel");
var ProjectModel = require("model/ProjectModel");
var Observer = require("observer");

var Req = require("utils/RequestManager");

module.exports = {
    "merger_test": merger_test
};

var projectListObserver = new Observer();
var projectListController = new ProjectListController(projectListObserver);
var projectListModel = new ProjectListModel();

var trackListObserver = new Observer();
var trackListController = new ProjectController(trackListObserver);
//var ProjectModel = new ProjectModel();

var projectListView = new ProjectListView(projectListController);
projectListController.attachModel(projectListModel);

var projectComponentView = new TrackListView(trackListController);
//trackListController.attachModel(trackListModel);

var windowManager = new WindowManager({
    "projectList": projectListView,
    "trackList": projectComponentView
});

//windowManager.setActiveWindow(projectComponentView);
//trackListController.fetchData(4);

windowManager.setActiveWindow(projectListView);
projectListController.fetchData();
