var audioplayer_test = require("audioplayer_test");
var merger_test = require("merger_test");
var upload_sound_test = require("upload_sound_test");
var getProjectData = require("requests/getProjectData");
var soundList = require("requests/soundList");

var RequestManager = require("RequestManager");
var ProjectView = require("view/ProjectView");

var UserModal = require("view/UserModal");

RequestManager.projectList(ProjectView.fullProjectList);
ProjectView.initButton();

$(".ui.button.join").on("click", function(event){
    var userModal = new UserModal()
    userModal.show();
});

module.exports = {
    "projectList": RequestManager.projectList,
    "merger_test": merger_test
};
