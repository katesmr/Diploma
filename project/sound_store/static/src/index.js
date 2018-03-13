var merger_test = require("merger_test");
var RequestManager = require("RequestManager");
var UserModal = require("view/UserModal");
var MenuBar = require("view/MenuBar");

module.exports = {
    "merger_test": merger_test
};

var menuBar = new MenuBar();

RequestManager.getUser(menuBar.showMenuComponents, menuBar);

