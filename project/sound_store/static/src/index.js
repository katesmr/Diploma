var merger_test = require("merger_test");

var WindowManager = require("view/WindowManager");
var ProjectListView = require("view/ProjectListView");
var TrackListView = require("view/TrackListView");

var ProjectListController = require("controller/ProjectListController");
var ProjectController = require("controller/ProjectController");
var TrackController = require("controller/TrackController");

var ProjectListModel = require("model/ProjectListModel");

var TrackView = require("view/TrackView");

var Observer = require("observer");

var Req = require("utils/RequestManager");

module.exports = {
    "merger_test": merger_test
};

var projectListObserver = new Observer();
var projectListController = new ProjectListController(projectListObserver);
var projectListModel = new ProjectListModel();

var projectObserver = new Observer();
var projectController = new ProjectController(projectObserver);

var trackObserver = new Observer();
var trackController = new TrackController(trackObserver);

var projectListView = new ProjectListView(projectListController);
projectListController.attachModel(projectListModel);

var trackListView = new TrackListView(projectController);

var trackView = new TrackView(trackController);

var windowManager = new WindowManager({
    "projectList": projectListView,
    "trackList": trackListView,
    "trackView": trackView
});

windowManager.setActiveWindow(projectListView);
projectListController.fetchData();
