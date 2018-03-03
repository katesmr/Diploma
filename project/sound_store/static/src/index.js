var audioplayer_test = require("audioplayer_test");
var merger_test = require("merger_test");
var upload_sound_test = require("upload_sound_test");
var getProjectData = require("requests/getProjectData");
var getProjectsData = require("requests/getProjectsData");
var projectList = require("requests/projectList");
var soundList = require("requests/soundList");

var RequestManager = require("RequestManager");
var ButtonFactory = require("view/ButtonFactory")
//$(".project_bar").append(ProjectListFactory.createList(["project1", "project2", "project3"]));
var $butt = ButtonFactory.createButton("fire");
$butt.on("click", function(event){
    soundList("sounds/");
});
$(".track_manager").append($butt);

module.exports = {
    "projectList": RequestManager.projectList,
    "merger_test": merger_test,
    "audioplayer_test": audioplayer_test,
	"getProjectData": getProjectData,
	//"view": view
    //"test_requests": test_requests
	//"getProjectsData": getProjectsData
};
