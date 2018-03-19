var merger_test = require("merger_test");
var RequestManager = require("RequestManager");
var ProjectBaseView = require("view/ProjectBaseView");

module.exports = {
    "merger_test": merger_test
};

var requestManager = new RequestManager();

var projectBaseView = new ProjectBaseView();


// requestManager.uploadSound("test.wav", trackView.createWaveForm);
