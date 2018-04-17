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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 2 */
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
    "ON_BACK_BUTTON_CLICK": "ON_BACK_BUTTON_CLICK"
};


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventListener = __webpack_require__(7);

module.exports = {
    "createButton": createButton,
    "createIconButton": createIconButton,
    "deleteCircleButton": deleteCircleButton
};

function createButton(className, text){
    return $("<button class='ui button " + className + "'>" + text + "</button>");
}

function createIconButton(buttonClass, iconClass, name){
    return $("<button class='" + buttonClass + "'>" +
        "<i class='" + iconClass + "'></i>" + name + "</button>");
}

function deleteCircleButton(buttonId, callback){
    var $deleteProjectButton = createIconButton("circular ui icon button", "remove icon", "");
    $deleteProjectButton.attr("id", buttonId);
    $deleteProjectButton.on("click", function(event){
        callback($(this));
    });
    return $deleteProjectButton;
}

function createList(listData){
    var i;
    var $list = $("<div class='ui link list'>");
    for(i = 0; i < listData.length; ++i){
        $list.append("<a id=" + i + " class='item'>" + listData[i] + "</a>");
    }
    return $list;
}

function createDivBlock(className){
    return $("<div class='" + className + "'></div>");
}


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transportAudioFile = __webpack_require__(39);
var TrackManager = __webpack_require__(15);

var changeSound = __webpack_require__(32);
var changeRequest = __webpack_require__(31);
var getSound = __webpack_require__(36);
var getProject = __webpack_require__(35);
var projectList = __webpack_require__(38);
var deleteProject = __webpack_require__(33);
var deleteTrack = __webpack_require__(34);
var getUser = __webpack_require__(37);


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


var Observer = __webpack_require__(5);

var eventListener = new Observer;

eventListener.ON_SHOW_PROJECT_LIST = "ON_SHOW_PROJECT_LIST";
eventListener.ON_ADD_PROJECT = "ON_ADD_PROJECT";
eventListener.ON_EDIT_PROJECT = "ON_EDIT_PROJECT";
eventListener.ON_DELETE_PROJECT = "ON_DELETE_PROJECT";
eventListener.DEFINE_USER = "E_DEFINE_USER";
eventListener.SHOW_TRACK = "SHOW_TRACK";
eventListener.SHOW_PROJECT = "SHOW_PROJECT";
eventListener.SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";
eventListener.SHOW_INSTRUMENT_VIEW = "SHOW_INSTRUMENT_VIEW";
eventListener.PROJECT_LIST_MODEL_UPDATED = "PROJECT_LIST_MODEL_UPDATED";
eventListener.PROJECT_MODEL_UPDATED = "PROJECT_MODEL_UPDATED";
eventListener.SHOW_TRACK_TOOL_FORM = "SHOW_TRACK_TOOL_FORM";
eventListener.SHOW_SYNTH_TOOL_FORM = "SHOW_SYNTH_TOOL_FORM";
eventListener.SHOW_OSCILLATOR_TOOL_FORM = "SHOW_OSCILLATOR_TOOL_FORM";
eventListener.SHOW_NOISE_TOOL_FORM = "SHOW_NOISE_TOOL_FORM";
eventListener.CONFIRM_DELETE = "CONFIRM_DELETE";

module.exports = eventListener;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Observer = __webpack_require__(5);

module.exports = new Observer();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseModel = __webpack_require__(27);
var inherit = __webpack_require__(0);
var commonEventNames = __webpack_require__(2);

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
    // Run over all items and remove each step-by-step:
    while(this.size()){
        this.remove(0); // pop first element
    }
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
    console.log(searchingId);
    for(i = 0; i < this.__data.length; ++i){
        currentElement = this.__data[i];
        console.log(currentElement);
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
    console.log("rem obs mod");
    console.log(index);
    var element = this.at(index);
    //item.isDeleted = true;
    if (index < this.size() && index >= 0) {
        // send signal to view for remove item from list
        this.observer.notify(commonEventNames.E_ITEM_REMOVED, index);
        // leave item (if it isDeleted) in model for case of some changes and send full model for saving on server
        if(element.isDeleted === false){
            this.__data.splice(index, 1);
        }
    }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(9);
var inherit = __webpack_require__(0);
var TrackSynthesizer = __webpack_require__(30);
var TrackNoise = __webpack_require__(29);
var commonEventNames = __webpack_require__(2);

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
}

inherit(ProjectModel, ObservableList);

/**
 * @param source = object - wait {id, data}
 */
ProjectModel.prototype.add = function(source){
    var track;
    var instrument;
    var data = source.data;
    if(data === undefined){
        //default data
        track = new TrackSynthesizer(source.id, {});
    } else{
        instrument = data.instrument;
        if(instrument === "synth"){
            track = new TrackSynthesizer(source.id, data);
        } else if(instrument === "noise"){
            track = new TrackNoise(source.id, data);
        }
    }
    if(track){
        ObservableList.prototype.add.call(this, track);
    }
    console.log(this);
};

ProjectModel.prototype.remove = function(index){
    var item = this.at(index);
    item.isDeleted = true;
    ObservableList.prototype.remove.call(this, index);
};

ProjectModel.prototype.clear = function(){
    var index = 0;
    while(this.size()){
        this.observer.notify(commonEventNames.E_ITEM_REMOVED, index);
        this.__data.splice(index, 1);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(16);
var TrackDataView = __webpack_require__(42);
var Factory = __webpack_require__(4);
var commonEventNames = __webpack_require__(2);
var windowsTransport = __webpack_require__(8);

module.exports = TrackListView;

function TrackListView(controller){
    BaseWindow.call(this, controller, "project-component-view");

    this.projectName = $("<h1></h1>");
    this.addTrackButton = Factory.createIconButton("circular ui icon button add", "plus icon", "");
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
            console.log("---");
            element = self.controller.model.at(index);
            console.log(element);
            self.remove(element.id);
        } else{
            // case when remove one selected item
            self.remove(self.selectedItem.attr("id"));
            self.selectedItem = null;
        }
    });

    this.addTrackButton.on("click", function(event){
        self.controller.add({});
    });

    windowsTransport.subscribe(commonEventNames.ON_BACK_BUTTON_CLICK, function(){
        if (self.controller.model.isEmpty()){
            // Nothing to save, model is just in default state...
            windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "projectList");
        } else {
            self.controller.save(function(result){
                if (result instanceof Error){
                    // Can't save...
                } else {
                    self.controller.model.clear();
                    // Project saved!
                    windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "projectList");
                    console.log("back");
                }
            });
        }
    });

    container.append(this.projectName);
    container.append(this.trackList);
    container.append(this.addTrackButton);
};


TrackListView.prototype.confirmed = function(name){
    // !!!!!!!!
    this.controller.removeById(this.selectedItem.attr("id"));
};

TrackListView.prototype.declined = function(name){
    this.selectedItem = null;
};

TrackListView.prototype.add = function(track){
    var id = track.id;
    var $instrumentContainer = $("<div class='track-" + id + "'>");
    var trackDataView = new TrackDataView(track.instrument, track.length, track.getContext());
    var $deleteTrackButton = Factory.deleteCircleButton(id, this.__onRemoveButtonClicked);
    $instrumentContainer.append(trackDataView.getContainer());
    $instrumentContainer.append($deleteTrackButton);
    this.trackList.append($instrumentContainer);
};

TrackListView.prototype.remove = function(id){
    $(".track-" + id).remove();
};

function onRemoveButtonClicked($element){
    if (this.selectedItem === null){
        this.selectedItem = $element;
        windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "teeest");
    }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseController = __webpack_require__(25);
var inherit = __webpack_require__(0);
var ObservableList = __webpack_require__(9);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostProcessSettings = __webpack_require__(28);
var generateUID = __webpack_require__(26);

module.exports = BaseTrackModel;

// @param {String} name
// @param {Object} source
function BaseTrackModel(id, data){
    this.isDeleted = false;
    this.id = id || -generateUID();
    this.length = data.length || 1;
    this.setting = data.setting || {};
    this.instrument = data.instrument || "synth";
    this.playSetting = data["play-setting"] || [];
    this.postSetting = data["post-setting"] || [];
    this.postProcessSettings = new PostProcessSettings(this.postSetting);
    this.trackObject = this._generate();
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

BaseTrackModel.prototype.toJson = function(){
    return JSON.stringify(this);
};

BaseTrackModel.prototype.getData = function(){
    var result = {};
    result.isDeleted = this.isDeleted;
    result.id = this.id;
    result.instrument = this.instrument;
    result.length = this.length;
    result.setting = this.setting;
    result["play-setting"] = this.playSetting;
    result["post-setting"] = this.postSetting;
    return result;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(23);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioHelper = __webpack_require__(14);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);

module.exports = BaseWindow;

function BaseWindow(controller, classes){
    BaseView.call(this, classes);

    this.controller = controller;
    this.title = "";
}

inherit(BaseWindow, BaseView);

BaseWindow.prototype.confirmed = null;
BaseWindow.prototype.declined = null;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(12);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(12);
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


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//var audioBufferUtils = require("audio-buffer-utils");
var AudioHelper = __webpack_require__(14);
var TrackManager = __webpack_require__(15);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(9);
var ProjectModel = __webpack_require__(10);
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

ProjectListModel.prototype.remove = function(id){
    ObservableList.prototype.remove.call(this, this.model.findIndexById(id));
};

/**
 * @param {ProjectModel} project
 */
ProjectListModel.prototype.setActiveProject = function(project){
    this.activeProject = project;
};



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(16);
var Factory = __webpack_require__(4);
var commonEventNames = __webpack_require__(2);
var windowsTransport = __webpack_require__(8);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var MessageModal = __webpack_require__(41);
var TrackList = __webpack_require__(11);
var MenuBar = __webpack_require__(40);
var windowsTransport = __webpack_require__(8);
var commonEventNames = __webpack_require__(2);

module.exports = WindowManager;

/**
 * @param {Object} windows - map of BaseWindow instances. Example: new WindowManager({"ProjectList": new ProjectList})
 */
function WindowManager(windows){
    BaseView.call(this, "window-manager");

    this.__windows = windows;
    
    this.__activeWindow = null;
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

    //RequestManager.getUser(this.hideUserOnlyElements.bind(this));
};

WindowManager.prototype.showModal = function(message){
    if (this.__activeWindow){
        this.__modal.show(message);
    }
};

WindowManager.prototype.setActiveWindow = function(newActiveWindow){
    if (this.__activeWindow){
        // Hide previosly visible window
        this.__activeWindow.hide();
    }
    // Attach & show the new one:
    this.__activeWindow = newActiveWindow;
    // if menubar change after change active window
    // for example project view add play button when active project view
    this.__menuBar.adaptToActiveWindow(this.__activeWindow);
    this.__activeWindow.show();

    // TODO: consider to re-implement this...
    if (this.__activeWindow instanceof TrackList){
        this.__activeWindow.controller.attachModel(this.__windows["projectList"].controller.model.activeProject);
        this.__activeWindow.controller.fetchData();
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merger_test = __webpack_require__(19);

var WindowManager = __webpack_require__(22);
var ProjectListView = __webpack_require__(21);
var TrackListView = __webpack_require__(11);

var ProjectListController = __webpack_require__(18);
var ProjectController = __webpack_require__(17);
var ProjectListModel = __webpack_require__(20);
var ProjectModel = __webpack_require__(10);
var Observer = __webpack_require__(5);

var Req = __webpack_require__(6);

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


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var counterUID = 0;

module.exports = function(){
    return ++counterUID;
};


/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = PostProcessSettings;

function PostProcessSettings(options){
    this.volume = 1;
    this.vibrato = {};
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(13);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(13);
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "json");


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "binary");


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "json", "user/");


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "json", "projects/");


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(1);
var UserInfoBar = __webpack_require__(43);
var Factory = __webpack_require__(4);
var inherit = __webpack_require__(0);
var commonEventNames = __webpack_require__(2);
var windowsTransport = __webpack_require__(8);
var eventListener = __webpack_require__(7);

module.exports = MenuBar;

function MenuBar(){
    BaseView.call(this, "menubar");

    this.userInfoBar = new UserInfoBar();
    this.backButton = Factory.createIconButton("ui button user-only", "arrow left icon", "");

    this._build();
}

inherit(MenuBar, BaseView);

MenuBar.prototype._build = function(){
    var container = this.getContainer();

    eventListener.notify(eventListener.E_DEFINE_USER);

    this.backButton.on("click", function(event){
        // Possible additional visual effect for this button...
        windowsTransport.notify(commonEventNames.ON_BACK_BUTTON_CLICK);
    });

    container.append(this.backButton);
    container.append(this.userInfoBar.getContainer());
};

MenuBar.prototype.adaptToActiveWindow = function(window){
    // Here you can get some public properties from the window to update the "look" of the menu bar
    // For example:
    // - window.title
    // - change some controlls according to the window type
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var Factory = __webpack_require__(4);
var Observer = __webpack_require__(5);
var commonEventNames = __webpack_require__(2);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(4);
var BaseView = __webpack_require__(1);
var UserModal = __webpack_require__(44);
var RequestManager = __webpack_require__(6);
var eventListener = __webpack_require__(7);

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
        eventListener.notify(eventListener.SHOW_LOGIN_FORM);
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(4);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(7);

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

    eventListener.subscribe(eventListener.SHOW_LOGIN_FORM, this.show.bind(this));

    this._container.append(this.facebookLogIn);
    //this._container.append(this.label);
    this._container.append(this.buttonLogout);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ })
/******/ ]);