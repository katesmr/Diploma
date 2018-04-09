var merger_test = require("merger_test");

var WindowManager = require("view/WindowManager");
var ProjectList = require("view/ProjectList");
var ProjectComponentView = require("view/ProjectComponentView");

var ProjectListController = require("controller/ProjectListController");
var TrackLIstController = require("controller/TrackLIstController");
var ProjectListModel = require("model/ProjectListModel");
var TrackListModel = require("model/TrackListModel");
var Observer = require("observer");

var Req = require("utils/RequestManager");

module.exports = {
    "merger_test": merger_test
};

var projectListObserver = new Observer();
var projectListController = new ProjectListController(projectListObserver);
var projectListModel = new ProjectListModel();

var trackListObserver = new Observer();
var trackListController = new TrackLIstController(trackListObserver);
var trackListModel = new TrackListModel();

var projectListView = new ProjectList(projectListController);
projectListController.attachModel(projectListModel);

var projectComponentView = new ProjectComponentView(trackListController);
trackListController.attachModel(trackListModel);

var windowManager = new WindowManager({
    //"projectList": projectListView,
    "trackList": projectComponentView
});

windowManager.setActiveWindow(projectComponentView);
trackListController.fetchData(4);

//windowManager.setActiveWindow(projectListView);
//projectListController.fetchData();
