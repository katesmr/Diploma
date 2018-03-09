var merger_test = require("merger_test");

var RequestManager = require("RequestManager");
var ProjectView = require("view/ProjectView");

var UserModal = require("view/UserModal");


$(".ui.button.join").on("click", function(event){
    var userModal = new UserModal();
    userModal.show();
    // check with request if user registered
});

RequestManager.getUser(ProjectView.fullProjectList);


module.exports = {
    "merger_test": merger_test
};
