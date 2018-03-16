var merger_test = require("merger_test");
var RequestManager = require("RequestManager");
var MenuBar = require("view/MenuBar");
var TrackView = require("view/TrackView");
var ContentView = require("view/ContentView");
var PlayerView = require("view/PlayerView");

module.exports = {
    "merger_test": merger_test
};

var requestManager = new RequestManager();

var menuBar = new MenuBar();
var contentView = new ContentView();
var contentContainer = contentView.getContainer();
var trackView = new TrackView(contentContainer);
var player = new PlayerView();

requestManager.getUser(menuBar, function(userName){
    menuBar.showMenuComponents(userName, contentContainer);
});

requestManager.uploadSound("test.wav", trackView.createWaveForm);
