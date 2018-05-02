var test =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "E_MODEL_UPDATED": "MODEL_UPDATED",
    "E_ITEM_ADDED": "ITEM_ADDED",
    "E_ITEM_REMOVED": "ITEM_REMOVED",
    "E_CONFIRMED": "CONFIRMED",
    "E_DECLINED": "DECLINED",
    "E_SHOW_MODAL": "E_SHOW_MODAL",
    "E_ACTIVATE_WINDOW": "E_ACTIVATE_WINDOW",
    "E_DEFINE_USER": "E_DEFINE_USER",
    "ON_BACK_BUTTON_CLICK": "ON_BACK_BUTTON_CLICK",
    "E_SHOW_LOGIN_FORM": "E_SHOW_LOGIN_FORM",
    "E_SET_TRACK": "E_SET_TRACK"
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "rangeElement": rangeElement,
    "buttonsPopup": buttonsPopup,
    "createButton": createButton,
    "dropDownElement": dropDownElement,
    "createCheckBox": createCheckBox,
    "createDivButton": createDivButton,
    "createIconButton": createIconButton,
    "deleteCircleButton": deleteCircleButton,
    "setBeginValueToRangeElement": setBeginValueToRangeElement
};

function createButton(className, text){
    return $("<button class='ui button " + className + "'>" + text + "</button>");
}

function createDivButton(className, text){
    return $("<div class='" + className + "'>" + text + "</div>");
}

function createIconButton(buttonClass, iconClass, name){
    return $("<button class='" + buttonClass + "'>" +
        "<i class='" + iconClass + "'></i>" + name + "</button>");
}

function deleteCircleButton(buttonId, callback){
    var $deleteProjectButton = createIconButton("circular ui icon button", "remove icon", "");
    $deleteProjectButton.attr("id", buttonId);
    $deleteProjectButton.on("click", function(){
        callback($(this));
    });
    return $deleteProjectButton;
}

/**
 * Create range element (equalizer) with label with value of it
 * @param className
 * @param name
 * @param minValue
 * @param maxValue
 * @param callback
 * @param stepValue
 * @param beginValue
 * @returns {*|jQuery|HTMLElement}
 */
function rangeElement(className, name, minValue, maxValue, callback, stepValue, beginValue){
    var value;
    var step = stepValue || 1;
    var begin = beginValue || 0;
    var $result = $("<div class='" + className + "'>");
    var $label = $("<div class='ui label'>" + begin + "</div>");
    var $element = $("<input id='" + name + "' type='range' step=" + step + " min=" + minValue +
                     " max=" + maxValue + " value=" + begin + ">");
    $element.on("input", function(){
        value = $(this).val();
        $label.text(value);
        callback(name, Number(value));
    });
    $result.append($element);
    $result.append($label);
    return $result;
}

/**
 * Set value to range element and its label
 * @param rangeElement
 * @param beginValue
 */
function setBeginValueToRangeElement(rangeElement, id, beginValue){
    rangeElement.find('#' + id).value = beginValue; // set input range value
    rangeElement.find(".ui.label").text(beginValue); // set label value
}

/**
 *
 * @param className
 * @param id
 * @param text
 * @param checkCallback
 * @param uncheckCallback
 * @param isActive
 * @returns {*|jQuery|HTMLElement}
 */
function createCheckBox(className, id, text, checkCallback, uncheckCallback, isActive){
    var checked = isActive || false;
    var $result = $("<div class='ui checkbox " + className + "'>");
    var $input = $("<input id='" + id + "' type='checkbox'>");
    var $text = $("<label>" + text + "</label>");
    $input.prop("checked", checked);
    $input.change(function(){
        if($(this).prop("checked") === true){
            checkCallback($(this).attr("id"));
        } else{
            uncheckCallback($(this).attr("id"));
        }
    });
    $result.append($input);
    $result.append($text);
    return $result;
}

/**
 *
 * @param className
 * @param name
 * @param dataObject - Object - key-element name, value-data-value
 * @param callback
 * @param defaultValue
 * @returns {string}
 */
function dropDownElement(className, name, dataObject, callback, defaultValue){
    var key;
    var value = defaultValue || 1;
    var $item;
    var $menu = $("<div class='menu'>");
    var $dropdown = $("<div class='ui selection dropdown'>");
    var $result = $("<div class='" + className + "'></div>");
    $dropdown.append("<div class='default text'>default</div>");
    $dropdown.append("<input name='choice' value='" + value + "' type='hidden'>");
    $dropdown.append("<i class='dropdown icon'>");
    for(key in dataObject){
        $item = $("<div id='" + name + "' class='item' data-value='" + dataObject[key] + "'>" + key + "</div>");
        $item.on("click", function(){
            console.log($(this).attr("data-value"));
            console.log($(this).text());
            callback($(this).attr("id"), $(this).text());
        });
        $menu.append($item);
    }
    $dropdown.append($menu);
    $dropdown.dropdown();
    $result.append($dropdown);
    return $result;
}

/**
 * Create button set with the same callback
 * @param buttonNameList
 * @param callback
 */
function buttonsPopup(buttonNameList, callback){
    var i;
    var $column;
    var $button;
    var $result = $("<div class='ui flowing popup top left transition hidden'>");
    var $row = $("<div class='ui three column divided center aligned grid'>");
    for(i = 0; i < buttonNameList.length; ++i){
        $column = $("<div class='column'>");
        $button = createButton("", buttonNameList[i]);
        $button.on("click", function(event){
            callback($(this).val());
        });
        $column.append($button);
        $row.append($column);
    }
    $result.append($row);
    return $result;
}

function createPiano(){
    var $result = $("<div class='piano'>");

}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseView;

/**
 * @param {Array} [classes=undefined] - css class list
 */
function BaseView(classes){
    var classNames = (typeof classes === "string" ? classes : "");
    this._container = $("<div class='" + classNames + "'>");
}

BaseView.prototype.getContainer = function(){
    return this._container;
};

BaseView.prototype.show = function(){
    this.getContainer().show();
};

BaseView.prototype.hide = function(){
    this.getContainer().hide();
};

BaseView.prototype._build = null;

BaseView.prototype.appendToBlock = function(blockName){
    $(blockName).append(this.getContainer());
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Observer = __webpack_require__(7);

module.exports = new Observer();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(method, dataType, url, callback){
    $.ajax({
        method: method,
        url: url,
        dataType: dataType,
        cache: false,
        success: callback,
        error: function(status){
            callback(new Error(status));
        }
    });
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transportAudioFile = __webpack_require__(51);
var TrackManager = __webpack_require__(22);

var changeSound = __webpack_require__(44);
var changeRequest = __webpack_require__(43);
var getSound = __webpack_require__(48);
var getProject = __webpack_require__(47);
var projectList = __webpack_require__(50);
var deleteProject = __webpack_require__(45);
var deleteTrack = __webpack_require__(46);
var getUser = __webpack_require__(49);


module.exports = {
    "getUser": defineUser,
    "getProject": getProjectData,
    "getProjectList": getProjectList,
    "deleteProject": deleteUserProject,
    "createProject": addProject,
    "updateProject": updateProject,
    "createTrack": createTrack,
    "deleteTrack": deleteProjectTrack,
    "updateTrack": updateTrack,
    "createSound": createSound,
    "uploadSound": uploadSound,
    "downloadSound": downloadSound
};

function defineUser(callback){
    getUser(callback);
}

function getProjectList(callback){
    projectList(callback);
}

function getProjectData(projectId, callback){
    var url = "projects/";
    var fullUrl = url + projectId + '/';
    getProject(fullUrl, callback);
}

function deleteUserProject(projectId, callback){
    var url = "projects/delete/";
    var fullUrl = url + projectId + '/';
    deleteProject(fullUrl, callback);
}

function addProject(projectName, data, callback){
    var url = "projects/create/";
    var fullUrl = url + projectName + '/';
    changeRequest(fullUrl, data, "json", callback);
}

function updateProject(projectId, data, callback){
    var url = "projects/update/";
    var fullUrl = url + projectId + '/';
    changeRequest(fullUrl, data, "json", callback);
}

function createTrack(projectId, data, callback){
    var url = "track/create/";
    var fullUrl = url + projectId + '/';
    changeRequest(fullUrl, data.toJson(), "json", callback)
}

function deleteProjectTrack(trackId, callback){
    var url = "track/delete/";
    var fullUrl = url + trackId + '/';
    deleteTrack(fullUrl, callback);
}

function updateTrack(trackId, data, callback){
    var url = "track/update/";
    var fullUrl = url + trackId + '/';
    changeRequest(fullUrl, data, "json", callback)
}

function createSound(soundName, audioSrc){
    var url = "sounds/create/";
    // var url = "sound/update/";
    var fullUrl = url + soundName + '/';
    transportAudioFile(fullUrl, soundName, audioSrc, changeSound);
}

function downloadSound(soundName){
    var url = "sounds/download/";
    var fullUrl = url + soundName + '/';
    getSound(fullUrl, function(data){
        TrackManager.save(data, soundName);
    });
}

function uploadSound(soundName, callback){
    var url = "sounds/";
    var fullUrl = url + soundName + '/';
    getSound(fullUrl, callback);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = new WeakMap();

module.exports = Observer;

/**
 * Observable class. Allows to implement distributed event handling.
 *
 * @constructor
 * @class Observer
 */
function Observer(){
    __.set(this, {});
}

Object.defineProperties(Observer.prototype, {
    /**
     * @method subscribe
     * @param event {String} (in) Name of event.
     * @param method {Function} (in/out) The method to execute when event is fired.
     * @return {Boolean} true in case of success operation.
     */
    "subscribe": {
        "enumerable": true,
        "value": function(event, method){
            var list;
            var eventBook = __.get(this);
            if (typeof method === "function"){
                if (event in eventBook){
                    list = eventBook[event];
                    if (-1 === list.indexOf(method)){ // prevent re-inserting
                        list.push(method);
                        return true;
                    }
                } else{
                    eventBook[event] = [method];
                    return true;
                }
            }
            return false;
        }
    },

    /**
     * @method unsubscribe
     * @param event {String} (in) Name of event.
     * @param method {Function} (in) Have to be same reference that passed in subscribe method.
     * @return {Boolean} true in case of success operation.
     */
    "unsubscribe": {
        "enumerable": true,
        "value": function(event, method){
            var list, index;
            var eventBook = __.get(this);
            if (event in eventBook){
                list = eventBook[event];
                index = list.indexOf(method);
                if (-1 !== index){
                    list.splice(index, 1);
                    if (0 === list.length){
                        delete eventBook[event]; // remove empty lists
                    }
                    return true;
                }
            }
            return false;
        }
    },

    /**
     * @method notify
     * @param event {String} (in) Name of event.
     * @param data {*} (in/out) Data to deliver.
     * @return {Boolean} true in case of success operation.
     */
    "notify": {
        "enumerable": true,
        "value": function(event, data){
            var subscribers = __.get(this)[event];
            if (subscribers){
                _notify(subscribers, event, data);
                return true;
            }
            return false;
        }
    },

    /**
     * @method hasSubscribersForEvent
     * @param event {String} (in)
     * @return {Boolean} whether observer has at least one subscriber for event
     */
    "hasSubscribersForEvent": {
        "enumerable": true,
        "value": function(event){
            return event in __.get(this);
        }
    }
});

// Helpers:

function _notify(list, event, data){
    var i;
    var length = list.length;
    for (i = 0; i < length; ++i){
        list[i](event, data); //callback
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(15);
var Factory = __webpack_require__(2);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = ProjectListView;

function ProjectListView(controller){
    BaseWindow.call(this, controller, "project-list");

    this.title = $("<h1>Project List</h1>");
    this.table = $("<div class='five column stackable ui grid'>");
    this.addTrackButton = Factory.createIconButton("circular ui icon button", "plus icon", "");

    this.selectedItem = null;
    this.onRemoveButtonClicked = onRemoveButtonClicked.bind(this);

    //this.__stateCreateNewProject = false;

    this._build();
    this.hide();
}

inherit(ProjectListView, BaseWindow);

ProjectListView.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    this.controller.observer.subscribe(commonEventNames.E_ITEM_ADDED, function(eventName, index){
        var trackList = self.controller.model.at(index);
        self.add(trackList);

        /*if (self.__stateCreateNewProject){
            self.__stateCreateNewProject = false;
            self.controller.model.setActiveProject(trackList);
            windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackList");
        }*/
    });

    this.addTrackButton.on("click", function(event){
        //self.__stateCreateNewProject = true;
        self.controller.add();
    });

    this.controller.observer.subscribe(commonEventNames.E_ITEM_REMOVED, function(eventName, index){
        self.remove(self.selectedItem.attr("id"));
        self.selectedItem = null;
    });

    container.append(this.title);
    container.append(this.table);
    container.append(this.addTrackButton);
};

ProjectListView.prototype.back = function(){};

ProjectListView.prototype.confirmed = function(){
    this.controller.remove(this.selectedItem.attr("id"));
};

ProjectListView.prototype.declined = function(){
    this.selectedItem = null;
};

ProjectListView.prototype.add = function(object){
    // full table or
    // add new item with new project
    var self = this;
    var _id = object.id;
    var $item;
    var $column;
    var projectId;
    var $deleteProjectButton;
    $deleteProjectButton = Factory.deleteCircleButton(_id, this.onRemoveButtonClicked);
    //create function for project name ITEM
    $item = $("<a id='" + _id + "'>" + object.name +"</a>");
    $item.on("click", function(event){
        projectId = $(this).attr("id");
        var index = self.controller.model.findIndexById(projectId);
        self.controller.model.setActiveProject(self.controller.model.at(index));
        windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackList");
    });
    $column = $("<div class='column' id='item-" + _id + "'>");
    $column.append($item);
    $column.append($deleteProjectButton);
    this.table.append($column);
};

ProjectListView.prototype.remove = function(id){
    this.table.find("#item-" + id).remove(); //remove from table (grid)
};

ProjectListView.prototype.updateProjectList = function(){
    this.table.empty();
    this.controller.fetchData();
};

function onRemoveButtonClicked($element){
    if (this.selectedItem === null){
        this.selectedItem = $element;
        windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "teeest");
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(15);
var TrackDataView = __webpack_require__(58);
var Factory = __webpack_require__(2);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = TrackListView;

function TrackListView(controller){
    BaseWindow.call(this, controller, "track-list-view");

    this.projectName = $("<h1></h1>");
    this.addTrackButton = Factory.createIconButton("circular ui icon button add-track", "plus icon", "");
    this.instrumentChoice = Factory.buttonsPopup(["synth", "oscillator", "noise"],
                                                 setTrackInstrument.bind(this));
    this.trackList = $("<div class='track-list'>");
    this.__onRemoveButtonClicked = onRemoveButtonClicked.bind(this);

    this.selectedItem = null;

    this._build();
    this.hide();
}

inherit(TrackListView, BaseWindow);

TrackListView.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    //this.projectName.text(this.controller.model.name);

    this.controller.observer.subscribe(commonEventNames.E_ITEM_ADDED, function(eventName, index){
        var element = self.controller.model.at(index);
        self.add(element);
    });

    this.controller.observer.subscribe(commonEventNames.E_ITEM_REMOVED, function(eventName, index){
        var element;
        if(self.selectedItem === null){
            // case when clear all item (them don't selected) in table
            element = self.controller.model.at(index);
            self.remove(element.id);
        } else{
            // case when remove one selected item
            self.remove(self.selectedItem.attr("id"));
            self.selectedItem = null;
        }
    });

    /*this.addTrackButton.on("click", function(event){
        self.controller.add({});
    });*/

    container.append(this.projectName);
    container.append(this.trackList);
    container.append(this.addTrackButton);
    container.append(this.instrumentChoice);

    this.addTrackButton.popup({
        on: "click"
    });
};

TrackListView.prototype.back = function(){
    var self = this;
    if(this.controller.model.isEmpty()){
        // Nothing to save, model is just in default state...
        windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "projectList");
    } else{
        this.controller.save(function(result){
            if (result instanceof Error){
                // Can't save...
            } else{
                self.controller.model.clear();
                // Project saved!
                windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "projectList");
            }
        });
    }
};

TrackListView.prototype.confirmed = function(){
    this.controller.removeById(this.selectedItem.attr("id"));
};

TrackListView.prototype.declined = function(){
    this.selectedItem = null;
};

TrackListView.prototype.add = function(track){
    var self = this;
    var id = track.id;
    var $instrumentContainer = $("<div class='track-" + id + "'>");
    var trackDataView = new TrackDataView(track.instrument, track.length, track.getContext());
    var $deleteTrackButton = Factory.deleteCircleButton(id, this.__onRemoveButtonClicked);
    $instrumentContainer.append(trackDataView.getContainer());
    $instrumentContainer.append($deleteTrackButton);
    trackDataView.getContainer().click(function(){
        var index = self.controller.model.findIndexById(id);
        self.controller.model.setActiveTrack(self.controller.model.at(index));
        windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackView");
    });
    this.trackList.append($instrumentContainer);
};

TrackListView.prototype.remove = function(id){
    this.trackList.find(".track-" + id).remove();
};

function onRemoveButtonClicked($element){
    if (this.selectedItem === null){
        this.selectedItem = $element;
        windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "teeest");
    }
}

function setTrackInstrument(value){
    var result = {};
    result.data = {};
    result.data.instrument = value;
    this.controller.add(result);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(15);
var FilterView = __webpack_require__(52);
var SettingView = __webpack_require__(56);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = TrackView;

function TrackView(controller){
    BaseWindow.call(this, controller, "track-view");

    this.title = ""; //this.track.instrument; // instrument name

    this.waveform = $("<div class='wave-form'></div>");
    this.tabBlock = $("<div class='ui top attached tabular menu'>");

    this.settingTabSegment = new SettingView(null);
    this.filterTabSegment = new FilterView(null);

    this.settingTitle = $("<a class='item' data-tab='" + this.settingTabSegment.dataTab + "'>setting</a>");
    this.filterTitle = $("<a class='item active' data-tab='" + this.filterTabSegment.dataTab + "'>filter</a>");

    this._build();
    this.hide();
    this.showTabMenu();
}

inherit(TrackView, BaseWindow);

TrackView.prototype._build = function(){
    var container = this.getContainer();

    //this.settingTabSegment.setActive(); // set Setting tab in active state
    this.filterTabSegment.setActive(); // set Setting tab in active state

    this.controller.observer.subscribe(commonEventNames.E_SET_TRACK, setTrack.bind(this));

    container.append(this.waveform);
    this.tabBlock.append(this.settingTitle);
    this.tabBlock.append(this.filterTitle);
    container.append(this.tabBlock);
    container.append(this.settingTabSegment.getContainer());
    container.append(this.filterTabSegment.getContainer());
};

TrackView.prototype.showTabMenu = function(){
    $(".tabular.menu .item").tab();
};

TrackView.prototype.back = function(){
    this.settingTabSegment.table.empty();
    windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackList");
};

function setTrack(eventName, track){
    this.settingTabSegment.setTrack(track);
    this.filterTabSegment.setFilter(track);
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseController = __webpack_require__(32);
var inherit = __webpack_require__(0);
var ObservableList = __webpack_require__(14);

module.exports = ListController;

function ListController(observer){
    BaseController.call(this, observer);
}

inherit(ListController, BaseController);

// Override parent method:
ListController.prototype.attachModel = function(model){
    // as an example we can perform type checking,
    // So ony list-like models may be attached to list-like controllers:
    if (model instanceof ObservableList){
        // model type is OK, so call parent method:
        BaseController.prototype.attachModel.call(this, model);
    }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseOption = __webpack_require__(16);

module.exports = BaseOptionList;

/**
 *
 * @param {Object} options - list of all possible options
 * @param {*} defaultValue - default one from the options list
 * @constructor
 */
function BaseOptionList(options, defaultValue){
    BaseOption.call(this, defaultValue);
    Object.defineProperties(this, {
        "options": {
            "value": options, // initial value
            "writable": false, // is able to be changed
            "enumerable": false // is it possible to see this variable when doing for..in or JSON.stringify
        }
    });
}

inherit(BaseOptionList, BaseOption);

BaseOptionList.prototype.set = function(value){
    if(value in this.options){
        BaseOption.prototype.set.call(this, value);
    }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseOption = __webpack_require__(16);

module.exports = BaseRange;

/**
 *
 * @param {*} defaultValue - default one from the options list
 * @constructor
 */
function BaseRange(defaultValue, minValue, maxValue, step){
    BaseOption.call(this, defaultValue);
    this.min = minValue;
    this.max = maxValue;
    this.step = step;
}

inherit(BaseRange, BaseOption);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseModel = __webpack_require__(35);
var inherit = __webpack_require__(0);
var commonEventNames = __webpack_require__(1);

module.exports = ObservableList;

/**
 * Observable list model. Sends notifications about it's state.
 * @constructor
 * @class ObservableList
 */
function ObservableList(){
    BaseModel.call(this, [], null);
}

inherit(ObservableList, BaseModel);

ObservableList.prototype.clear = function(){
    var data = this.__data;
    var i = data.length;
    while(i--){
        // Warn: item may be really removed from the data-list inside .remove() method!!
        this.remove(i);
    }
    // Just in case:
    this.__data.length = 0;
};

ObservableList.prototype.update = function(data){
    // Note: someone should ask to .clear() before calling this.. so don't forget!
    var i;
    if(Array.isArray(data)){
        for(i = 0; i < data.length; ++i){
            this.add(data[i]);
        }
    }

};

ObservableList.prototype.size = function(){
    return this.__data.length;
};

ObservableList.prototype.at = function(index){
    return index < this.size() ? this.__data[index] : null;
};

ObservableList.prototype.isExistId = function(id){
    return this.findIndexById(id) >= 0;
};

ObservableList.prototype.findIndexById = function(searchingId){
    var i;
    var result = -1;
    var currentElement;
    var id = parseInt(searchingId);
    for(i = 0; i < this.__data.length; ++i){
        currentElement = this.__data[i];
        if(currentElement.id === id){
            result = i;
            break;
        }
    }
    return result;
};

/**
 * Add item to the end of the list.
 * @param {*} item
 */
ObservableList.prototype.add = function(item){
    // push to back and send actual index of the added item:
    this.observer.notify(commonEventNames.E_ITEM_ADDED, this.__data.push(item) - 1);
};

ObservableList.prototype.remove = function(index){
    if (index >= 0 && index < this.size()) {
        this.observer.notify(commonEventNames.E_ITEM_REMOVED, index);
        this.__data.splice(index, 1);
    }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);

module.exports = BaseWindow;

function BaseWindow(controller, classes){
    BaseView.call(this, classes);

    this.controller = controller;
    this.title = "";
}

inherit(BaseWindow, BaseView);

BaseWindow.prototype.confirmed = null;
BaseWindow.prototype.declined = null;
BaseWindow.prototype.back = null;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseOption;

/**
 * Base class for all kind of options
 * @param {Number} value - current value
 * @constructor
 */
function BaseOption(value){
    Object.defineProperties(this, {
        "__initialValue": {
            "value": value,
            "writable": false,
            "enumerable": false
        },
        "value": {
            "value": value, // initial value
            "writable": true, // is able to be changed
            "enumerable": true // is it possible to see this variable when doing for..in or JSON.stringify
        }
    });
}

BaseOption.prototype.reset = function(){
    this.value = this.__initialValue;
};

BaseOption.prototype.set = function(value){
    this.value = value;
};

BaseOption.prototype.valueOf = function(){
    return this.value;
};

BaseOption.prototype.toString = function(){
    return "[object BaseOption]";
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostSettings = __webpack_require__(38);
var generateUID = __webpack_require__(33);

module.exports = BaseTrackModel;

// @param {String} name
// @param {Object} source
function BaseTrackModel(id, data){
    this.isDeleted = false;
    this.id = id || -generateUID();
    this.length = data.length || 1;
    this.setting = data.setting || {}; // this
    this.instrument = data.instrument || "synth";
    this.playSetting = data["play-setting"] || [];
    //this.filterSetting = data["post-setting"] || {};

    this.trackObject = this._generate(); // this
    this.filterObject = new PostSettings(data["post-setting"]);

    //ProxyTrackManager.updateFromTrack(SettingsList, this);
    //ProxyTrackManager.updateFromTrack(FiltersList, this);
}

BaseTrackModel.prototype.createFormData = function(){
    var formData = new FormData();
    formData.append("user_audio", toBlob(this.trackObject), this.name);
    formData.append("postProcessSettings", JSON.stringify(this.postProcessSettings));
    return formData;
};

BaseTrackModel.prototype.getContext = function(){
    return this.trackObject.context._context;
};

BaseTrackModel.prototype.getConstants = function(){
    return this.trackObject.context;
};

BaseTrackModel.prototype.getAudioBuffer = function(){

};

BaseTrackModel.prototype.getFrequency = function(){
    return this.trackObject.frequency.value;
};

BaseTrackModel.prototype.getVolume = function(){
    return this.trackObject.volume.value;
};

BaseTrackModel.prototype.getType = function(){
    return this.trackObject.oscillator.type;
};

BaseTrackModel.prototype.getAttack = function(){
    return this.trackObject.envelope.attack;
};

BaseTrackModel.prototype.getDecay = function(){
    return this.trackObject.envelope.decay;
};

BaseTrackModel.prototype.getSustain = function(){
    return this.trackObject.envelope.sustain;
};

BaseTrackModel.prototype.getRelease = function(){
    return this.trackObject.envelope.release;
};

/**
 * Return object of track setting in right format for transfer or saving
 * @returns {{}}
 */
BaseTrackModel.prototype.getData = function(){
    var result = {};
    result.id = this.id;
    result.isDeleted = this.isDeleted;
    result.instrument = this.instrument;
    result.length = this.length;
    result.setting = this.setting;
    result["play-setting"] = this.playSetting;
    result["post-setting"] = {}; //this.filterObjects.getOptions();
    return result;
};

BaseTrackModel.prototype.toJson = function(){
    return JSON.stringify(this);
};

BaseTrackModel.prototype.setFrequency = function(value){
    this.trackObject.frequency.value = value;
};

BaseTrackModel.prototype.setVolume = function(value){
    this.trackObject.volume.value = value;
};

BaseTrackModel.prototype.setType = function(value){
    this.trackObject.oscillator.type = value;
};

BaseTrackModel.prototype.setAttack = function(value){
    this.trackObject.envelope.attack = value;
};

BaseTrackModel.prototype.setDecay = function(value){
    this.trackObject.envelope.decay = value;
};

BaseTrackModel.prototype.setSustain = function(value){
    this.trackObject.envelope.sustain = value;
};

BaseTrackModel.prototype.setRelease = function(value){
    this.trackObject.envelope.release = value;
};

// CALL THIS BEFORE SAVE ON SERVER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**
 * Update or create oscillator && envelope data
 */
BaseTrackModel.prototype.setSetting = function(){
    if(this.trackObject){
        if(this.setting.oscillator === undefined){
            this.setting.oscillator = {};
        }
        if(this.setting.envelope === undefined){
            this.setting.envelope = {};
        }
        this.setting.oscillator.valume = this.getVolume();
        this.setting.oscillator.frequency = this.getFrequency();
        this.setting.oscillator.type = this.getType();
        this.setting.envelope.attack = this.getAttack();
        this.setting.envelope.decay = this.getDecay();
        this.setting.envelope.sustain = this.getSustain();
        this.setting.envelope.release = this.getRelease();
    }
};

/**
 * Rewrite play setting data
 * @param playSetting
 */
BaseTrackModel.prototype.setPlaySetting = function(playSetting){ // ??????????
    this.playSetting = playSetting;
};

/**
 * @param {Object} source
 * @type {null}
 * @protected
 * @return {Tone}
 */
BaseTrackModel.prototype._generate = null;

/**
 * @param {Object} options
 * @type {null}
 */
BaseTrackModel.prototype.play = null;

BaseTrackModel.prototype.playCompomponent = null;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseTrackSetting;

/**
 */
function BaseTrackSetting(name, isEnabled, options){
    Object.defineProperties(this, {
        "name": {
            "value": name,
            "writable": false,
            "enumerable": true
        },
        "isEnabled": {
            "value": !!isEnabled, // initial value
            "writable": true, // is able to be changed
            "enumerable": true // is it possible to see this variable when doing for..in or JSON.stringify
        },
        "options": {
            "value": options,
            "writable": false,
            "enumerable": true
        }
    });
}

BaseTrackSetting.prototype.reset = function(){
    var key;
    var target = this.options;
    for (key in target){
        if (target.hasOwnProperty(key)){
            target[key].reset();
        }
    }
};

BaseTrackSetting.prototype.set = function(value){
    //this.options[optionName].set(value);
    this.options.value.set(value);
};

BaseTrackSetting.prototype.valueOf = function(){
    var key;
    var result = {};
    var target = this.options;
    for (key in target){
        if (target.hasOwnProperty(key)){
            result[key] = target[key].valueOf();
        }
    }
    return result;
};

BaseTrackSetting.prototype.toString = function(){
    return "[object BaseTrackSettingSingleOption]";
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ProxyTrackManager

module.exports = {
    "updateSettingListFromTrack": function(settingList, track){ // SettingList OR FilterList
        updateList(settingList, track, setToSettingList)
    },
    "updateFilterListFromFilter": function(filterList, filter) {
        updateList(filterList, filter, setToFilterList);
        console.log(filterList);
    },
    "setSetting": function(list, track, settingName, value){
        setToTrackSetting(track, settingName, value);
        setToSettingList(list, track, settingName);
    },
    "setFilter": function(list, filter, filterName, value){

    }
};

/**
 *
 * @param listInstance - Array - SettingList OR FilterList
 * @param dataObject
 * @param callback
 */
function updateList(listInstance, dataObject, callback){
    var i;
    var name;
    var tokenSetting;
    var list = listInstance.list;
    for(i = 0; i < list.length; ++i) {
        tokenSetting = list[i]; // BaseTrackSetting type
        name = tokenSetting.name;
        callback(tokenSetting, dataObject, name);
    }
}

/**
 * Set all parameters from FilterObject to FilterList
 * @param filterElement - BaseTrackSetting
 * @param options - object
 */
function setOptionsToFilterList(filterElement, options){
    var optionName;
    console.log(options);
    for(optionName in options){
        filterElement.isEnabled = true; // switch flag for using this filter
        filterElement.options[optionName].set(options[optionName]);
    }
}

/**
 * Get data from track object and put them to SettingList
 * @param listElement
 * @param trackObject
 * @param optionName
 */
function setToSettingList(listElement, trackObject, optionName){
    switch(optionName){
        case "frequency":
            listElement.set(trackObject.getFrequency());
            break;
        case "volume":
            listElement.set( trackObject.getVolume());
            break;
        case "type":
            listElement.set(trackObject.getType());
            break;
        case "attack":
            listElement.set(trackObject.getAttack());
            break;
        case "decay":
            listElement.set(trackObject.getDecay());
            break;
        case "sustain":
            listElement.set(trackObject.getSustain());
            break;
        case "release":
            listElement.set(trackObject.getRelease());
            break;
    }
}

/**
 * Get data from filter object and put them to FilterList
 * @param listElement
 * @param filterObject
 * @param filterName
 */
function setToFilterList(listElement, filterObject, filterName){
    switch(filterName){
        case "tremolo":
            break;
        case "vibrato":
            break;
        case "crusher":
            break;
        case "phaser":
            break;
        case "freeverb":
            setOptionsToFilterList(listElement, filterObject[filterName]);
            break;
    }
}

function setToTrackSetting(track, settingName, value){
    switch(settingName){
        case "frequency":
            track.setFrequency(value);
            break;
        case "volume":
            track.setVolume(value);
            break;
        case "type":
            track.setType(value);
            break;
        case "attack":
            track.setAttack(value);
            break;
        case "decay":
            track.setDecay(value);
            break;
        case "sustain":
            track.setSustain(value);
            break;
        case "release":
            track.setRelease(value);
            break;
    }
    track.setSetting(); // write to model parameter for saving to server
}

function setTrackSetting(track, settingName, value){
    switch(settingName){
        case "frequency":
            track.setFrequency(value);
            break;
        case "volume":
            track.setVolume(value);
            break;
        case "type":
            track.setType(value);
            break;
        case "attack":
            track.setAttack(value);
            break;
        case "decay":
            track.setDecay(value);
            break;
        case "sustain":
            track.setSustain(value);
            break;
        case "release":
            track.setRelease(value);
            break;
    }
    track.setSetting(); // write to model parameter for saving to server
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TrackSettingsSet;

function TrackSettingsSet(list){
    this.list = list;
}

TrackSettingsSet.prototype.reset = function(){
    var i;
    for (i = 0; i < this.list.length; ++i){
        this.list[i].reset();
    }
};

TrackSettingsSet.prototype.set = function(optionName, value){
    var i;
    var tokenSetting;
    for(i = 0; i < this.list.length; ++i){
        tokenSetting = this.list[i];
        if(tokenSetting.name === optionName){
            tokenSetting.set(optionName, value);
        }
    }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(30);

module.exports = {
    "getAudioContextBuffer": getAudioContextBuffer,
    "merge": merge,
    "BlobToArrayBuffer": BlobToArrayBuffer,
    "AudioBufferToBlob": AudioBufferToBlob,
    "AudioContextToBlob": AudioContextToBlob
};

// return AudioBuffer
function getAudioContextBuffer(context){
    var contextConstants = context._constants; // replace on set method
    var audioBufferSourceNode = contextConstants[1];
    var buffer = audioBufferSourceNode.buffer;
    return buffer;
}

function merge(context, buffer1, buffer2){
    // add comparison channel numbers
    var i, data;
    var newLength = buffer1.length + buffer2.length;
    var track = context.createBuffer(buffer1.numberOfChannels, newLength, buffer1.sampleRate);
    for(i = 0; i < track.numberOfChannels; ++i){
        data = track.getChannelData(i);
        data.set(buffer1.getChannelData(i));
        data.set(buffer2.getChannelData(i), buffer1.length);
    }
    return track;
}

function BlobToArrayBuffer(blob, callback){
    var arrayBuffer;
    var reader = new FileReader();
    reader.onload = function(){
        arrayBuffer = reader.result;
        callback(arrayBuffer);
    };
    reader.readAsArrayBuffer(blob);
}

function AudioBufferToBlob(audioBuffer){
    var buffer = toWav(audioBuffer, {float32: true});
    console.log("+");
    console.log(buffer);
    var blob = new Blob([buffer], {"type": "audio/x-wav"});

    console.log("+");
    console.log(blob);
    return blob;
}

function AudioContextToBlob(audioContext){
    var buffer = getAudioContextBuffer(audioContext);
    var blob = AudioBufferToBlob(buffer);
    return blob;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioHelper = __webpack_require__(21);

module.exports = TrackManager;

function TrackManager(){}

// get array with Tone.Synth
TrackManager.mergeTracks = function(trackList){
    var i;
    var nextIndex;
    var currentBuffer;
    var nextBuffer;
    var nextTrackContext;
    var currentTrack = trackList[0];
    var currentTrackContext = currentTrack._context;
    currentBuffer = AudioHelper.getAudioContextBuffer(currentTrackContext);
	for(i = 0; i < trackList.length; ++i){
	    nextIndex = i + 1;
	    if(nextIndex !== trackList.length){
	        nextTrackContext = trackList[nextIndex]._context;
            nextBuffer = AudioHelper.getAudioContextBuffer(nextTrackContext);
            // put new AudioBuffer where created from merging of past tracks
            currentBuffer = AudioHelper.merge(currentTrackContext, currentBuffer, nextBuffer);
        }
	}
	return currentBuffer;
};

TrackManager.save = (function(){
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function(data, fileName){
        if(fileName === undefined){
            fileName = "test.wav";
        }
        var blob;
        var buffer;
        if(data instanceof AudioBuffer){
            blob = AudioHelper.AudioBufferToBlob(data);
        } else{
            buffer = AudioHelper.getAudioContextBuffer(data.context);
            blob = new Blob([buffer], {"type": "audio/x-wav"});
        }
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var TabSegment = __webpack_require__(57);
var BaseRange = __webpack_require__(13);
var BaseOptionList = __webpack_require__(12);
var Factory = __webpack_require__(2);

module.exports = ToolView;

function ToolView(className, tableClass){
    TabSegment.call(this, className);

    this.table = $("<div class='" + tableClass + "'>");

    this._build();
    this.show();
}

inherit(ToolView, TabSegment);

ToolView.prototype._build = function(){
    this.getContainer().append(this.table);
};

ToolView.prototype.setEvent = function(){};

ToolView.prototype.createElement = function(className, name, value){
    var $element;
    if(value instanceof BaseRange){
        $element = Factory.rangeElement(className + "-range", name, value.min, value.max,
                                        this.setEvent.bind(this), value.step, value.value);
    } else if(value instanceof BaseOptionList){
        $element = Factory.dropDownElement(className, name, value.options,
                                           this.setEvent.bind(this), value.value);
    }
    return $element;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(11);
var inherit = __webpack_require__(0);
var RequestManager = __webpack_require__(6);

module.exports = ProjectController;

function ProjectController(observer){
    ListController.call(this, observer);
}

inherit(ProjectController, ListController);

ProjectController.prototype.fetchData = function(){
    RequestManager.getProject(this.model.id, this._fetchDataHandler.bind(this));
};

ProjectController.prototype.add = function(data){
    this._addHandler(data);
    //RequestManager.createTrack(projectId, data, this._addHandler.bind(this));
    //RequestManager.createTrack(this.model.id, [], this._addHandler.bind(this));
};

ProjectController.prototype.remove = function(index){
    this.model.remove(index);
    //RequestManager.deleteTrack(trackId, this._removeHandler.bind(this));
};

ProjectController.prototype.save = function(callback){
    RequestManager.updateProject(this.model.id, this.model.toJson(), callback);
};

ProjectController.prototype.removeById = function(id){
    var index = this.model.findIndexById(id);
    this.remove(index);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(11);
var inherit = __webpack_require__(0);
var RequestManager = __webpack_require__(6);

module.exports = ProjectListController;

function ProjectListController(observer){
    ListController.call(this, observer);
}

inherit(ProjectListController, ListController);

ProjectListController.prototype.fetchData = function(){
    RequestManager.getProjectList(this._fetchDataHandler.bind(this));
};

ProjectListController.prototype.add = function(data){
    RequestManager.createProject("unknown", data, this._addHandler.bind(this));
};

ProjectListController.prototype.remove = function(id){
    var model = this.model;
    if(model.isExistId(id) === true){
        RequestManager.deleteProject(id, this._removeHandler.bind(this));
    }
};

ProjectListController.prototype._removeHandler = function(id){
    var model = this.model;
    if(id instanceof Error){
        // Oh no..
    } else{
        model.remove(this.model.findIndexById(id));
    }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(11);
var inherit = __webpack_require__(0);
var commonEventNames = __webpack_require__(1);

module.exports = TrackController;

function TrackController(observer){
    ListController.call(this, observer);
}

inherit(TrackController, ListController);

TrackController.prototype.attachModel = function(model){
    this.model = model;
};

TrackController.prototype.sendTrack = function(){
    if(this.model){
        this.observer.notify(commonEventNames.E_SET_TRACK, this.model);  // here ?????????
    }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//var audioBufferUtils = require("audio-buffer-utils");
var AudioHelper = __webpack_require__(21);
var TrackManager = __webpack_require__(22);

var sounds = [];

module.exports = function(){
	$.ajax({
		method: "GET",
		url: "sounds/new.wav/",
		dataType: "binary",  // blob????
		cache: false,
		processData: false,
		success: function(data){
		    toAudioBuffer(data, function(data){
		        var audioBuffer = data;
		    });
		},
		error: function(status){
			console.error(status);
		}
	});
};

function convert(){
    var i;
    var audioData;
    var res = [];
    var context = new AudioContext();
    for(i = 0; i < sounds.length; ++i){
        audioData = context.createBufferSource();
        toAudioBuffer(sounds[i], context, audioData);
        res.push(audioData);
    }
    return res;
}

function toAudioBuffer(blob, getAudioBuffer){
	//var arrayBuffer;
	var audioData;
	var arrayBuffer;
    var reader = new FileReader();
    var context = new AudioContext();
    reader.onload = function(){
        arrayBuffer = reader.result;
        context.decodeAudioData(arrayBuffer, function(buffer){
            audioData = buffer;  // save audio buffer
            getAudioBuffer(audioData);
            var player = new Tone.Player(audioData).toMaster();
            var synth = new Tone.Synth({"oscillator" : {"type" : "sine", "frequency" : 400}}).toMaster();
            player.start();
            synth.triggerAttack("C4");
            synth.triggerRelease(1);

            var audioBuffer = AudioHelper.getAudioContextBuffer(synth.context);
            var res = AudioHelper.merge(synth.context, audioBuffer, audioData);
            console.log(res);
            //TrackManager.save(res, "test.wav");
        });
    };
    reader.readAsArrayBuffer(blob);
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(14);
var ProjectModel = __webpack_require__(39);
var inherit = __webpack_require__(0);

module.exports = ProjectListModel;

function ProjectListModel(){
    ObservableList.call(this);
    this.__activeProject = null; // ProjectModel
}

inherit(ProjectListModel, ObservableList);

ProjectListModel.prototype.toString = function(){
    return "[object ProjectListModel]";
};

ProjectListModel.prototype.add = function(data){
    var projectModel = new ProjectModel(data);
    ObservableList.prototype.add.call(this, projectModel);
};

ProjectListModel.prototype.getActiveProject = function(){
    return this.__activeProject;
};

/**
 * @param {ProjectModel} project
 */
ProjectListModel.prototype.setActiveProject = function(project){
    this.__activeProject = project;
};

ProjectListModel.prototype.clearActiveProject = function(){
    this.__activeProject = null;
};



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);
var MessageModal = __webpack_require__(54);
var ProjectListView = __webpack_require__(8);
var TrackListView = __webpack_require__(9);
var TrackView = __webpack_require__(10);
var MenuBar = __webpack_require__(53);
var windowsTransport = __webpack_require__(4);
var commonEventNames = __webpack_require__(1);

module.exports = WindowManager;

/**
 * @param {Object} windows - map of BaseWindow instances. Example: new WindowManager({"ProjectList": new ProjectList})
 */
function WindowManager(windows){
    BaseView.call(this, "window-manager");

    this.__windows = windows;
    
    this.__activeWindow = null;
    this.isProjectListView = false;
    this.__modal = new MessageModal();
    this.__menuBar = new MenuBar();
    
    this._build();
}

inherit(WindowManager, BaseView);

WindowManager.prototype._build = function(){
    var key, tokenWindow;
    var self = this;
    var windows = this.__windows;
    var container = this.getContainer();
    
    container.append(this.__menuBar.getContainer());
    //container.append(this.__modal.getContainer());

    this.appendToBlock($(".ui.container"));
    
    this.__menuBar.show();
    this.__modal.hide();

    for (key in windows){
        tokenWindow = windows[key];
        tokenWindow.hide(); // just in case...
        container.append(tokenWindow.getContainer());
    }

    this.__modal.observer.subscribe(commonEventNames.E_CONFIRMED, function(eventName){
        if (self.__activeWindow){
            self.__activeWindow.confirmed();
        }
        self.__modal.hide();
    });

    this.__modal.observer.subscribe(commonEventNames.E_DECLINED, function(eventName){
        if (self.__activeWindow){
            self.__activeWindow.declined();
        }
        self.__modal.hide();
    });

    windowsTransport.subscribe(commonEventNames.E_SHOW_MODAL, function(eventName, message){
        self.showModal(message);
    });

    windowsTransport.subscribe(commonEventNames.E_ACTIVATE_WINDOW, function(eventName, windowName){
        self.setActiveWindow(self.__windows[windowName]);
    });

    windowsTransport.subscribe(commonEventNames.ON_BACK_BUTTON_CLICK, function(eventName, windowName){
        self.__activeWindow.back();
    });

    //RequestManager.getUser(this.hideUserOnlyElements.bind(this));
};

WindowManager.prototype.showModal = function(message){
    if (this.__activeWindow){
        this.__modal.show(message);
    }
};

WindowManager.prototype.setActiveWindow = function(newActiveWindow){
    if (this.__activeWindow){
        // Hide previously visible window
        this.__activeWindow.hide();
    }
    // Attach & show the new one:
    this.__activeWindow = newActiveWindow;
    // if menubar change after change active window
    // for example project view add play button when active project view
    this.__menuBar.adaptToActiveWindow(this.__activeWindow);
    this.__activeWindow.show();

    // TODO: consider to re-implement this...
    if(this.__activeWindow instanceof TrackListView){
        this.__activeWindow.controller.attachModel(this.__windows["projectList"].controller.model.getActiveProject());
        this.__activeWindow.controller.model.clearActiveTrack();
        // catch project data only from ProjectListView !!!!!!!!
        if(this.isProjectListView === true){
            this.__activeWindow.controller.fetchData();
        }
        this.isProjectListView = false;
    } else if(this.__activeWindow instanceof ProjectListView){
        this.isProjectListView = true;
        this.__activeWindow.controller.model.clearActiveProject();
    } else if(this.__activeWindow instanceof TrackView){
        this.__activeWindow.controller.attachModel(this.__windows["trackList"].controller.model.getActiveTrack());
        // send track settings to view
        this.__activeWindow.controller.sendTrack();
    }
};

/*WindowManager.prototype.hideUserOnlyElements = function(userName){
    if(userName instanceof Error){
        var $elements = $(".user-only");
        $elements.addClass("disabled");
        // ... add "disable" class to all of these $elements
    }
};*/


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = audioBufferToWav
function audioBufferToWav (buffer, opt) {
  opt = opt || {}

  var numChannels = buffer.numberOfChannels
  var sampleRate = buffer.sampleRate
  var format = opt.float32 ? 3 : 1
  var bitDepth = format === 3 ? 32 : 16

  var result
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1))
  } else {
    result = buffer.getChannelData(0)
  }

  return encodeWAV(result, format, sampleRate, numChannels, bitDepth)
}

function encodeWAV (samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8
  var blockAlign = numChannels * bytesPerSample

  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample)
  var view = new DataView(buffer)

  /* RIFF identifier */
  writeString(view, 0, 'RIFF')
  /* RIFF chunk length */
  view.setUint32(4, 36 + samples.length * bytesPerSample, true)
  /* RIFF type */
  writeString(view, 8, 'WAVE')
  /* format chunk identifier */
  writeString(view, 12, 'fmt ')
  /* format chunk length */
  view.setUint32(16, 16, true)
  /* sample format (raw) */
  view.setUint16(20, format, true)
  /* channel count */
  view.setUint16(22, numChannels, true)
  /* sample rate */
  view.setUint32(24, sampleRate, true)
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * blockAlign, true)
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, blockAlign, true)
  /* bits per sample */
  view.setUint16(34, bitDepth, true)
  /* data chunk identifier */
  writeString(view, 36, 'data')
  /* data chunk length */
  view.setUint32(40, samples.length * bytesPerSample, true)
  if (format === 1) { // Raw PCM
    floatTo16BitPCM(view, 44, samples)
  } else {
    writeFloat32(view, 44, samples)
  }

  return buffer
}

function interleave (inputL, inputR) {
  var length = inputL.length + inputR.length
  var result = new Float32Array(length)

  var index = 0
  var inputIndex = 0

  while (index < length) {
    result[index++] = inputL[inputIndex]
    result[index++] = inputR[inputIndex]
    inputIndex++
  }
  return result
}

function writeFloat32 (output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true)
  }
}

function floatTo16BitPCM (output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]))
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
  }
}

function writeString (view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merger_test = __webpack_require__(27);

var WindowManager = __webpack_require__(29);
var ProjectListView = __webpack_require__(8);
var TrackListView = __webpack_require__(9);

var ProjectListController = __webpack_require__(25);
var ProjectController = __webpack_require__(24);
var TrackController = __webpack_require__(26);

var ProjectListModel = __webpack_require__(28);

var TrackView = __webpack_require__(10);

var Observer = __webpack_require__(7);

var Req = __webpack_require__(6);

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


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseController;

/**
 * Base controller class.
 * @constructor
 * @class BaseController
 * @param {Observer} observer
 */
function BaseController(observer){
    this.model = null;
    this.observer = observer;
}

/**
 * Connects model with this controller and it's observer
 * @param {BaseModel} model
 */
BaseController.prototype.attachModel = function(model){
    this.model = model;
    this.model.attachObserver(this.observer);
};

BaseController.prototype._fetchDataHandler = function(result){
    var model = this.model;
    // Base handler for any fetch:
    if (result instanceof Error){
        // Oh no..
    } else {
        model.update(result);
    }
};

BaseController.prototype._addHandler = function(result){
    var model = this.model;
    if (result instanceof Error){
        // Oh no..
    } else {
        model.add(result);
    }
};

BaseController.prototype._clearHandler = function(result){
    var model = this.model;
    if (result instanceof Error){
        // Oh no..
    } else {
        model.clear();
    }
};

BaseController.prototype._removeHandler = function(value){
    var model = this.model;
    if (value instanceof Error){
        // Oh no..
    } else {
        model.remove(value);
    }
};

BaseController.prototype.fetchData = null;
BaseController.prototype.add = null;
BaseController.prototype.clear = null;
BaseController.prototype.remove = null;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var counterUID = 0;

module.exports = function(){
    return ++counterUID;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseFilterModel;

function BaseFilterModel(){
    this.isUsed = false;
    this.filterObject = this.generate();
}

BaseFilterModel.prototype.generate = function(){};

BaseFilterModel.prototype.getOptions = function(){};

BaseFilterModel.prototype.setOptions = function(){};

BaseFilterModel.prototype.applyToTrack = function(track){
    this.filterObject.toMaster();
    track.connect(this.filterObject);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseModel;

/**
 * Base model.
 * @constructor
 * @class BaseModel
 * @param {*} data - initial data
 * @param {Observer} observer
 */
function BaseModel(data, observer){
    this.__data = data;
    this.observer = observer;
}

BaseModel.prototype.attachObserver = function(observer){
    this.observer = observer;
};

BaseModel.prototype.valueOf = function(){
    return JSON.stringify(this);
};

BaseModel.prototype.toString = function(){
    return "[object BaseModel]";
};


BaseModel.prototype.toJson = function(){
    return JSON.stringify(this);
};

/**
 * Should remove everything from itself
 */
BaseModel.prototype.clear = null;

/**
 * Should update old data
 * @param {*} data - new data
 */
BaseModel.prototype.update = null;
BaseModel.prototype.add = null;
BaseModel.prototype.remove = null;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseOptionList = __webpack_require__(12);
var BaseRange = __webpack_require__(13);
var BaseTrackSetting = __webpack_require__(18);
var TrackSettingsSet = __webpack_require__(20);

module.exports = new TrackSettingsSet([
    new BaseTrackSetting("tremolo", false, {
        "frequency": new BaseRange(1),
        "depth": new BaseRange(0.1),
        "spread": new BaseRange(0),
        "type": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("vibrato", false, {
        "frequency": new BaseRange(1),
        "depth": new BaseRange(0.1),
        "type": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("crusher", false, {
        "bits": new BaseRange(1, 1, 8, 1)
    }),
    new BaseTrackSetting("phaser", false, {
        "octaves": new BaseRange(1, 0, 1000, 1),
        "frequency": new BaseRange(0, 0, 1, 0.1), // ???
        "baseFrequency": new BaseRange(1, 0, 1000, 1)
    }),
    new BaseTrackSetting("freeverb", false, {
        "dampening": new BaseRange(1, 0, 1000, 1),
        "roomSize": new BaseRange(0, 0, 1, 1), // or step = 0.001
        "wet": new BaseRange(1, 0, 1, 1)
    })
]);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(34);

module.exports = FreeverbFilter;

function FreeverbFilter(options){
    BaseFilterModel.call(this);
    this.options = options || {};
}

inherit(FreeverbFilter, BaseFilterModel);

FreeverbFilter.prototype.generate = function(){
    this.filterObject = new Tone.Freeverb(this.options);
};

FreeverbFilter.prototype.getDampening = function(){
    return this.filterObject.dampening.value;
};

FreeverbFilter.prototype.getRoomSize = function(){
    return this.filterObject.roomSize.value; // ???
};

FreeverbFilter.prototype.getWet = function(){
    return this.filterObject.wet.value; // ???
};

FreeverbFilter.prototype.getOptions = function(){
    var result = {};
    result.dampening = this.getDampening();
    result.roomSize = this.getRoomSize();
    result.wet = this.getWet();
    return result;
};

FreeverbFilter.prototype.setDampening = function(value){
    this.filterObject.dampening.value = value;
};

FreeverbFilter.prototype.setRoomSize = function(value){
    this.filterObject.roomSize.value = value; // ???
};

FreeverbFilter.prototype.setWet = function(value){
    this.filterObject.wet.value = value; // ???
};

FreeverbFilter.prototype.setOptions = function(options){
    this.setDampening(options.dampening);
    this.setRoomSize(options.roomSize);
    this.setWet(options.wet);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FreeverbFilter = __webpack_require__(37);

module.exports = PostSettings;

/**
 * Contain set of FilterModel objects.
 * Wait object with filters from server.
 * Or if track was created from the client set empty object for future settings.
 * @param postSettings - object
 * @constructor
 */
function PostSettings(postSettings){
    this.postSettings = postSettings || {};
    this.filterObjects = {};
    this.fullFilterObjects();
}

/**
 * Create corresponding filter object
 * @param filterName
 * @param filterSetting
 */
PostSettings.prototype.createFilterObjects = function(filterName, filterSetting){
    switch(filterName){
        case "tremolo":
            break;
        case "vibrato":
            break;
        case "crusher":
            break;
        case "phaser":
            break;
        case "freeverd":
            this.filterObjects[filterName] = new FreeverbFilter(filterSetting);
            break;
    }
};

/**
 * Create list of filter objects with settings from server.
 * Call when init PostSettings.
 */
PostSettings.prototype.fullFilterObjects = function(){
    var filterName;
    for(filterName in this.postSettings){
        this.createFilterObjects(filterName, this.postSettings[filterName])
    }
};

/**
 * Return object with applying filters only
 * @returns {{}}
 */
PostSettings.prototype.getPostSettings = function(){
    var filter;
    var filterName;
    var result = {};
    for(filterName in this.filterObjects){
        filter = this.filterObjects[filterName];
        result[filterName] = filter.getOptions();
        /*if(filter.isUsed === true){
            // save only used filters
            result[filterName] = filter.getOptions();
        }*/
    }
    return result;
};

/**
 * Set new filter settings in corresponding filter object and switch isUsed flag
 * @param filterList - TrackSettingsSet - FilterList
 */
PostSettings.prototype.setPostSettings = function(filterList){
    var i;
    var name;
    var tokenSetting;
    var list = filterList.list;
    for(i = 0; i < list.length; ++i){
        tokenSetting = list[i];
        name = tokenSetting.name;
        if(name in this.filterObjects){
            if(tokenSetting.isEnabled === true){
                // update existing filter
                this.filterObjects[name].setOptions(tokenSetting.options);
            } else{
                //delete no using filter in track
                delete this.filterObjects[name];
            }
        } else{
            //create new filter
            if(tokenSetting.isEnabled === true){
                this.createFilterObjects(name, tokenSetting.options); // tokenSetting.options ?????
            }
        }
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(14);
var inherit = __webpack_require__(0);
var TrackSynthesizer = __webpack_require__(42);
var TrackNoise = __webpack_require__(41);
var commonEventNames = __webpack_require__(1);

module.exports = ProjectModel;

/**
 * @param project - object
 * @constructor
 */
function ProjectModel(project) {
    ObservableList.call(this);
    this.name = project.name;
    this.id = project.id;
    this.isDeleted = false;
    this.__activeTrack = null;
}

inherit(ProjectModel, ObservableList);

ProjectModel.prototype.getActiveTrack = function(){
    return this.__activeTrack;
};

ProjectModel.prototype.setActiveTrack = function(track){
    this.__activeTrack = track;
};

ProjectModel.prototype.clearActiveTrack = function(){
    this.__activeTrack = null;
};

/**
 * @param source = object - wait {id, data}
 */
ProjectModel.prototype.add = function(source){
    var data = (source.data && typeof source.data === "object") ? source.data : {};
    var track;
    switch (data.instrument){
        case "synth":
            track = new TrackSynthesizer(source.id, data);
            break;
        case "noise":
            track = new TrackNoise(source.id, data);
            break;
        default:
            track = new TrackSynthesizer(source.id, data);
    }
    ObservableList.prototype.add.call(this, track);
};

ProjectModel.prototype.remove = function(index){
    if(index >= 0 && index < this.size()){
        this.at(index).isDeleted = true;
        this.observer.notify(commonEventNames.E_ITEM_REMOVED, index);
        // leave item in model for case of some changes and send full model for saving on server
    }
};

ProjectModel.prototype.isEmpty = function(){
    return this.name.length && this.id === 0 && this.__data.length;
};

ProjectModel.prototype.getData = function(){
    var i;
    var data = [];
    var result = {};
    result.id = this.id;
    result.name = this.name;
    for(i = 0; i < this.size(); ++i){
        data.push(this.__data[i].getData());
    }
    result.data = data;
    return result;
};

ProjectModel.prototype.toJson = function(){
    return JSON.stringify(this.getData());
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseOptionList = __webpack_require__(12);
var BaseRange = __webpack_require__(13);
var BaseTrackSetting = __webpack_require__(18);
var TrackSettingsSet = __webpack_require__(20);

module.exports = new TrackSettingsSet([
    new BaseTrackSetting("type", true, {
        "value": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("volume", true, {
        "value": new BaseRange(0, -50, 50, 0.5)
    }),
    new BaseTrackSetting("frequency", true, {
        "value": new BaseRange(440, 0, 1000, 1)
    }),
    new BaseTrackSetting("attack", true, {
        "value": new BaseRange(0, 0, 1, 0.001)
    }),
    new BaseTrackSetting("decay", true, {
        "value": new BaseRange(0, 0, 1, 0.001)
    }),
    new BaseTrackSetting("sustain", true, {
        "value": new BaseRange(0, 0, 1, 0.001)
    }),
    new BaseTrackSetting("relay", true, {
        "value": new BaseRange(0, 0, 1, 0.001)
    })
]);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(17);
var inherit = __webpack_require__(0);

module.exports = TrackNoise;

// @param {String} name
// @param {Object} source
function TrackNoise(id, data){
    BaseTrackModel.call(this, id, data);
}

inherit(TrackNoise, BaseTrackModel);

TrackNoise.prototype._generate = function(options){

};

TrackNoise.prototype.play = function(options){

};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(17);
var inherit = __webpack_require__(0);

module.exports = TrackSynthesizer;

// @param {String} name
// @param {Object} source
function TrackSynthesizer(id, data){
    BaseTrackModel.call(this, id, data);
}

inherit(TrackSynthesizer, BaseTrackModel);

TrackSynthesizer.prototype._generate = function(){
    return new Tone.Synth(this.setting).toMaster(); //{"oscillator": {}, "envelope": {}}
};

TrackSynthesizer.prototype.play = function(options){
    var i;
    var r = this.playSetting;
    for(i = 0; i < r.length; ++i){
        this.trackObject.triggerAttackRelease(r[i][0], r[i][1], r[i][2]);
    }
};

TrackSynthesizer.prototype.saveTest = function(callback){
    var DURATION = 5; // seconds
    var self = this;
    Tone.Offline(function(){
        //only nodes created in this callback will be recorded
        var i, j;
        var r = self.playSetting;
        for(i = 0; i < r.length; ++i){
            self.trackObject.triggerAttackRelease(r[i][0], r[i][1], r[i][2]);
        }
    }, DURATION).then(function(buffer){
        console.log(buffer);
        callback(buffer._buffer);
    });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//changeProjectRequest

module.exports = function(url, data, dataType, callback){
    $.ajax({
        url: url,
        cache: false,
        method: "POST",
        dataType: dataType,
        data: data,
        success: callback,
        error: function(status){
            callback(new Error(status));
        }
    });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(url, formData){
    $.ajax({
        method: "POST",
        url: url,
        data: formData,
        mimeTypes: "multipart/form-data",
        contentType: false,
        dataType: "json",
        cache: false,
        processData: false,
        success: callback,
        error: function (status) {
            callback(new Error(status));
        }
    });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json");


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "binary");


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "user/");


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "projects/");


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(url, soundName, audioSrc, callback){
    fetch(audioSrc, function(request){
        var audioData = request.response;
        var blob = new Blob([audioData], {type: 'audio/x-wav'});
        var formData = new FormData();
        formData.append('user_audio', blob, soundName);
        callback(url, formData);
    });
};

function fetch(url, resolve){
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = function(){
        resolve(request);
    };
    request.send();
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var ToolView = __webpack_require__(23);
var FiltersList = __webpack_require__(36);
var ProxyTrackManager = __webpack_require__(19);
var Factory = __webpack_require__(2);

module.exports = FilterView;

function FilterView(filter){
    ToolView.call(this, "filter-view", "two column stackable ui grid");

    this.filter = null;

    this.setFilter(filter);

    this._build();
    this.show();
}

inherit(FilterView, ToolView);


FilterView.prototype.setFilter = function(track){
    if(track){
        this.filter = track.filterObject;
        ProxyTrackManager.updateFilterListFromFilter(FiltersList, this.filter.postSettings);
        this.createFilterTools();
    }
};

FilterView.prototype.createFilterTools = function(){
    var i;
    var value;
    var options;
    var filterName;
    var optionName;
    var tokenFilter;
    var $element;
    var $elementName;
    var $mainDiv;
    var $checkBox;
    var $settingDiv;
    for(i = 0; i < FiltersList.list.length; ++i){
        tokenFilter = FiltersList.list[i];
        options = tokenFilter.options;
        filterName = tokenFilter.name;
        // create main div for checkbox component and div with settings
        $mainDiv = $("<div class='column " + filterName + "'>");
        $settingDiv = $("<div class='filter-setting-" + filterName + "'>");
        // create widgets for settings
        for(optionName in options){
            value = options[optionName]; // BaseOption
            $elementName = $("<label>" + optionName + "</label>");
            $element = this.createElement(optionName, optionName, value);
            $settingDiv.append($elementName);
            $settingDiv.append($element);
        }
        if(tokenFilter.isEnabled === true){
            $settingDiv.show();
        } else {
            $settingDiv.hide();
        }
        $checkBox = Factory.createCheckBox(filterName, filterName, filterName, checkEvent.bind(this),
                                           uncheckEvent.bind(this), tokenFilter.isEnabled);
        $mainDiv.append($checkBox);
        $mainDiv.append($settingDiv);
        this.table.append($mainDiv);
    }
};

FilterView.prototype.setEvent = function(optionName, value){
    console.log(this.track);
    ProxyTrackManager.setSetting(FiltersList, this.filter, optionName, value);
};

function checkEvent(filterName){
    this.table.find(".filter-setting-" + filterName).show();
}

function uncheckEvent(filterName) {
    this.table.find(".filter-setting-" + filterName).hide();
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);
var UserInfoBar = __webpack_require__(59);
var TrackView = __webpack_require__(10);
var TrackListView = __webpack_require__(9);
var ProjectListView = __webpack_require__(8);
var PlayerView = __webpack_require__(55);
var Factory = __webpack_require__(2);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = MenuBar;

function MenuBar(){
    BaseView.call(this, "menubar");

    this.userInfoBar = new UserInfoBar();
    this.backButton = Factory.createIconButton("ui button user-only", "arrow left icon", "");
    this.player = new PlayerView();

    this._build();
}

inherit(MenuBar, BaseView);

MenuBar.prototype._build = function(){
    var container = this.getContainer();

    //windowsTransport.notify(commonEventNames.E_DEFINE_USER);

    this.backButton.on("click", function(event){
        // Possible additional visual effect for this button...
        windowsTransport.notify(commonEventNames.ON_BACK_BUTTON_CLICK);
    });

    container.append(this.backButton);
    container.append(this.player.getContainer());
    container.append(this.userInfoBar.getContainer());
};

MenuBar.prototype.adaptToActiveWindow = function(window){
    if(window instanceof TrackView || window instanceof TrackListView){
        this.backButton.show();
        this.player.show();
    } else if(window instanceof ProjectListView){
        this.backButton.hide();
        this.player.hide();
    }
    // Here you can get some public properties from the window to update the "look" of the menu bar
    // For example:
    // - window.title
    // - change some controlls according to the window type
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);
var Factory = __webpack_require__(2);
var Observer = __webpack_require__(7);
var commonEventNames = __webpack_require__(1);

module.exports = MessageModal;

function MessageModal(){
    BaseView.call(this, "ui modal");
    this.text = $("<p></p>");
    this.okButton = Factory.createButton("ui button", "ok");
    this.cancelButton = Factory.createButton("ui button", "cancel");
    this.observer = new Observer();

    this._build();
}

inherit(MessageModal, BaseView);

MessageModal.prototype._build = function(){
    var container = this.getContainer();
    var self = this;

    this.okButton.on("click", function(event){
        self.observer.notify(commonEventNames.E_CONFIRMED, null);
        self.hide();
    });

    this.cancelButton.on("click", function(event){
        self.observer.notify(commonEventNames.E_DECLINED, null);
        self.hide();
    });

    container.append(this.text);
    container.append(this.okButton);
    container.append(this.cancelButton);
};

MessageModal.prototype.show = function(message){

    this.getContainer().modal({
        closable : false,
        allowMultiple: false,
        context: $(".window-manager")
    });

    this.text.text(message);
    this.getContainer().modal("show");
};

MessageModal.prototype.hide = function(){
    this.text.text(""); // reset old message
    this.getContainer().modal("hide");
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(3);

module.exports = PlayerView;

function PlayerView(){
    BaseView.call(this, "player-view");

    this.playButton = Factory.createIconButton("ui button", "play icon", "");
    this.pauseButton = Factory.createIconButton("ui button", "pause icon", "");
    this.stopButton = Factory.createIconButton("ui button", "stop icon", "");

    this._build();
}

inherit(PlayerView, BaseView);

PlayerView.prototype._build = function(){
    var container = this.getContainer();

    this.playButton.on("click", function(_){
    });
    this.pauseButton.on("click", function(_){
    });
    this.stopButton.on("click", function(_){
    });

    container.append(this.playButton);
    container.append(this.pauseButton);
    container.append(this.stopButton);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var ToolView = __webpack_require__(23);
var SettingsList = __webpack_require__(40);
var ProxyTrackManager = __webpack_require__(19);
var Factory = __webpack_require__(2);

module.exports = SettingView;

/**
 * Simple view with some data/widgets
 * @param track
 * @constructor
 */
function SettingView(track){
    ToolView.call(this, "setting-view", "two column stackable ui grid");

    this.track = null;

    this.setTrack(track);

    this._build();
    this.show();
}

inherit(SettingView, ToolView);


SettingView.prototype.setTrack = function(track){
    if(track){
        this.track = track;
        ProxyTrackManager.updateSettingListFromTrack(SettingsList, this.track);
        this.createSettingTools(); // OR CREATE UPDATE METHOD FOR rangeElement AND dropDownElement ???
    }
};

SettingView.prototype.createSettingTools = function(){
    var i;
    var value;
    var options;
    var $element;
    var $elementName;
    var tokenSetting;
    var settingName;
    for(i = 0; i < SettingsList.list.length; ++i){
        tokenSetting = SettingsList.list[i];
        //tokenSetting.reset();
        options = tokenSetting.options;
        value = options.value; // BaseOption
        settingName = tokenSetting.name;
        $elementName = $("<div class='column'>" + settingName + "</div>");
        $element = this.createElement("column", settingName, value);
        this.table.append($elementName);
        this.table.append($element);
    }
};

SettingView.prototype.setEvent = function(optionName, value){
    console.log(this.track);
    ProxyTrackManager.setSetting(SettingsList, this.track, optionName, value);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);

module.exports = TabSegment;

function TabSegment(dataTab){
    BaseView.call(this, "ui bottom attached tab segment");
    this.getContainer().attr("data-tab", dataTab);
    this.dataTab = dataTab;
}

inherit(TabSegment, BaseView);

TabSegment.prototype.setActive = function(){
    this.getContainer().addClass("active");
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(3);

module.exports = TrackDataView;

function TrackDataView(instrument, time, context){
    BaseView.call(this, "track-data-view");
    this.instrument = $("<h4>" + instrument + "</h4>");
    this.time = $("<h4>" + time + "</h4>");
    this.waveform = $("<div class='wf'></div>");
    // this.createWaveForm(context);

    this._build();
}

inherit(TrackDataView, BaseView);

TrackDataView.prototype._build = function(){
    var container = this.getContainer();

    container.append(this.instrument);
    container.append(this.time);
    container.append(this.waveform);
};

TrackDataView.prototype.createWaveForm = function(){
    /*var data = this.trackModel.getContext();
    //this.trackModel.play();
    //this.trackModel.saveTest(TrackManager.save);
    this.waveform = new WaveForm();
    this.getContainer().append(this.waveform.getContainer());
    if(data instanceof Blob){
        this.waveform.createWaveFormFromFile(data);
    } else if(data instanceof AudioContext){
        this.waveform.createWaveForm(data);
    }*/
    var self = this;
    Tone.Offline(function(){
        //only nodes created in this callback will be recorded
        //var oscillator = new Tone.Oscillator().toMaster().start(0);
        var synthBass = new Tone.Synth({"oscillator": {"frequency": 440},
            "envelope": {"attack" : 0.5, "decay": 0.9, "sustain": 0.3, "release": 1}}).toMaster();
        synthBass.triggerAttackRelease('C4', 5);
        synthBass.triggerAttackRelease('A2', 2, 2);
        synthBass.triggerAttackRelease('A2', 2, 3);
        //schedule their events
    }, 5).then(function(buffer){
        //do something with the output buffer
        console.log(buffer);
        //TrackManager.save(buffer._buffer);
        var blob = AudioHelper.AudioBufferToBlob(buffer._buffer);
        self.waveform = new WaveForm();
        self.getContainer().append(self.waveform.getContainer());
        self.waveform.createWaveFormFromFile(blob);

        /*
        self.waveform = new WaveForm();
        self.getContainer().append(self.waveform.getContainer());

        var p = new Tone.Player(buffer._buffer).toMaster().start();
        self.waveform.createWaveForm(p.context._context);
         */
    })

};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(3);
var UserModal = __webpack_require__(60);
var RequestManager = __webpack_require__(6);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = UserInfoBar;

function UserInfoBar(){
    BaseView.call(this, "user-info-bar");

    this.userName = null;
    this.joinButton = Factory.createButton("", "join");
    this.userModal = new UserModal();

    this._build();
}

inherit(UserInfoBar, BaseView);

UserInfoBar.prototype._build = function(){
    var container = this.getContainer();

    this.joinButton.on("click", function(){
        windowsTransport.notify(commonEventNames.E_SHOW_LOGIN_FORM);
    });

    //eventListener.subscribe(eventListener.E_DEFINE_USER, this._fetchUserName.bind(this));
    this._fetchUserName();

    container.append(this.userName);
    container.append(this.joinButton);
};

UserInfoBar.prototype._fetchUserName = function(){
    RequestManager.getUser(this.setUserName.bind(this));

};

UserInfoBar.prototype.setUserName = function(userName){
    if(userName instanceof Error){
        this.userName = $("<p>anonym</p>");
        // eventListener.notify("USER_IS_ANONYM");
    } else{
        this.userName = $("<p>" + userName + "</p>");
        // eventListener.notify("USER_IS_LOGEDIN", userName);
    }
    this.getContainer().append(this.userName);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(3);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(4);

module.exports = UserModal;

function UserModal(){
    BaseView.call(this, "ui modal user-registration");
    this.facebookLogIn = Factory.createIconButton("ui facebook button", "facebook icon", "Facebook");
    //this.label = $("<div class='ui pointing below label'>Join without registration");
    this.buttonLogout = Factory.createButton("", "Logout");

    this._build();
}

inherit(UserModal, BaseView);

UserModal.prototype._build = function(){
    this.facebookLogIn.on("click", function(event){
        location.href = "/accounts/facebook/login/";
    });

    this.buttonLogout.on("click", function(event){
        location.href = "/accounts/logout/";
    });

    windowsTransport.subscribe(commonEventNames.E_SHOW_LOGIN_FORM, this.show.bind(this));

    this._container.append(this.facebookLogIn);
    //this._container.append(this.label);
    this._container.append(this.buttonLogout);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ })
/******/ ]);