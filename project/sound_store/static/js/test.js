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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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
    "E_SET_TRACK": "E_SET_TRACK",
    "E_RECORD_TRACK": "E_RECORD_TRACK",
    "E_CLEAR_RECORD_TRACK": "E_CLEAR_RECORD_TRACK",
    "E_PLAY_WAVE": "E_PLAY_WAVE",
    "E_PAUSE_WAVE": "E_PAUSE_WAVE",
    "E_STOP_WAVE": "E_STOP_WAVE",
    "E_EXPORT_PROJECT": "E_EXPORT_PROJECT",
    "E_EXPORT_TRACK": "E_EXPORT_TRACK",
    "E_PLAY_PROJECT": "E_PLAY_PROJECT",
    "E_STOP_PROJECT": "E_STOP_PROJECT",
    "E_RENAME_PROJECT": "E_RENAME_PROJECT"
};


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Observer = __webpack_require__(12);

module.exports = new Observer();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "createKey": createKey,
    "createInput": createInput,
    "createButton": createButton,
    "rangeElement": rangeElement,
    "buttonsPopup": buttonsPopup,
    "setColorToKey": setColorToKey,
    "createCheckBox": createCheckBox,
    "dropDownElement": dropDownElement,
    "createIconButton": createIconButton,
    "createButtonPopup": createButtonPopup,
    "deleteCircleButton": deleteCircleButton,
    "setBeginValueToRangeElement": setBeginValueToRangeElement
};

function createButton(className, text){
    return $("<button class='ui button " + className + "'>" + text + "</button>");
}

function createIconButton(buttonClass, iconClass, name){
    return $("<button class='" + buttonClass + "'>" +
        "<i class='" + iconClass + "'></i>" + name + "</button>");
}

function createButtonPopup(buttonClass, iconClass, name, message){
    var $button;
    if(iconClass){
        $button = $("<button class='" + buttonClass + "' data-content='" + message + "'>" +
                    "<i class='" + iconClass + "'></i>" + name + "</button>");
    } else{
        $button = $("<button class='ui button " + buttonClass + "' data-content='" + message + "'>"
                    + name + "</button>");
    }
    $button.popup();
    return $button;
}

function deleteCircleButton(buttonId, callback){
    var $deleteProjectButton = createIconButton("circular ui icon button delete", "remove icon", "");
    $deleteProjectButton.attr("id", buttonId);
    $deleteProjectButton.on("click", function(){
        callback($(this));
    });
    return $deleteProjectButton;
}

function createInput(className, text){
    var $result = $("<div class='ui input " + className + "'>");
    var $input = $("<input type='text'>");
    $input.value = text;
    $result.append($input);
    return $result;
}

/**
 * Create range element (equalizer) with label with value of it
 * @param className
 * @param id - String - element name
 * @param minValue
 * @param maxValue
 * @param callback
 * @param stepValue
 * @param beginValue
 * @returns {*|jQuery|HTMLElement}
 */
function rangeElement(className, id, minValue, maxValue, callback, stepValue, beginValue){
    var value;
    var step = stepValue || 1;
    var begin = beginValue || 0;
    var $result = $("<div class='" + className + "'>");
    var $label = $("<div class='ui label'>" + begin + "</div>");
    var $element = $("<input id='" + id + "' type='range' step=" + step + " min=" + minValue +
                     " max=" + maxValue + " value=" + begin + ">");
    $element.on("input", function(){
        value = $(this).val();
        $label.text(value);
        callback(id, Number(value));
    });
    $result.append($element);
    $result.append($label);
    return $result;
}

/**
 * Set value to range element and its label
 * @param rangeElement
 * @param id
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
            checkCallback($(this).attr("id"), $(this).prop("checked"));
        } else{
            uncheckCallback($(this).attr("id"), $(this).prop("checked"));
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
    var value = defaultValue || 0;
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
            callback($(this).attr("id"), $(this).text(), $(this).attr("data-value"));
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
    var $row = $("<div class='ui two column divided center aligned grid'>");
    for(i = 0; i < buttonNameList.length; ++i){
        $column = $("<div class='column'>");
        $button = createButton("", buttonNameList[i]);
        $button.on("click", function(event){
            callback($(this).text());
        });
        $column.append($button);
        $row.append($column);
    }
    $result.append($row);
    return $result;
}

function keyContent(key, note){
    var $result = $("<div class='key-content'>");
    var $note = $("<label class='note'>" + note + "</label>");
    var $key = $("<label class='keyboard " + key + "'>" + key + "</label>");
    $result.append($note);
    $result.append("<br>");
    $result.append($key);
    return $result;
}

var isClicked = false;
function createKey(className, id, style, key, note, mouseDownCallback, mouseUpCallback){
    var $key = $("<div class='" + className + "' id='" + id + "' style='" + style + "'>");
    $key.append(keyContent(key, note));
    $key.mousedown(function(event){
        isClicked = true;
        mouseDownCallback(key);
    });
    $key.mouseup(function(event){
        isClicked = false;
        mouseUpCallback(key);
    });
    $key.mouseenter(function(event){
        if(isClicked === true){
            mouseDownCallback(key);
        }
    });
    $key.mouseleave(function(event){
        mouseUpCallback(key);
    });
    return $key;
}

function setColorToKey(pianoElement, key, color){
    pianoElement.find('#' + key).css("background-color", color);
}


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


module.exports = BaseFilterModel;

function BaseFilterModel(options){
    this.filter = null;
    this.options = options || {};
    this.generate();
}

BaseFilterModel.prototype.generate = null;

BaseFilterModel.prototype.getOptions = function(){};

BaseFilterModel.prototype.setOptions = function(){};

BaseFilterModel.prototype.setByName = function(){};

BaseFilterModel.prototype.applyToTrack = function(track){
    this.filter.toMaster();
    //track.disconnect(Tone.Master);
    track.connect(this.filter);
};

BaseFilterModel.prototype.disconnectFilter = function(track){
    track.disconnect(this.filter);
    //track.toMaster();
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostSettings = __webpack_require__(67);
var generateUID = __webpack_require__(49);
var AudioHelper = __webpack_require__(10);

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
    this.playObjects = [];

    this.trackObject = this._generate();
    this.postSettings = new PostSettings(data["post-setting"]);

    this.createPlayObjects();
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
    return AudioHelper.getAudioContextBuffer(this.getConstants());
};

BaseTrackModel.prototype.getBlob = function(){
    return AudioHelper.AudioContextToBlob(this.getConstants());
};

BaseTrackModel.prototype.getVolume = function(){
    return this.trackObject ? this.trackObject.volume.value : null;
};

BaseTrackModel.prototype.getType = function(){
    return this.trackObject ? this.trackObject.type : null;
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
    result["post-setting"] = this.postSettings.getPostSettings();
    return result;
};

BaseTrackModel.prototype.toJson = function(){
    return JSON.stringify(this);
};

BaseTrackModel.prototype.setVolume = function(value){
    this.trackObject.volume.value = value;
};

BaseTrackModel.prototype.setType = function(value){
    this.trackObject.type = value;
};

/**
 * Set data to play setting list from play setting object
 */
BaseTrackModel.prototype.setPlaySettings = function(){
    var i;
    this.playSetting.length = 0; // clear previous play setting data
    for(i = 0; i < this.playObjects.length; ++i){
        this.playSetting.push(this.playObjects[i].getData());
    }
};

BaseTrackModel.prototype.emptyPlaySetting = function(){
    this.playSetting.length = 0;
    this.playObjects.length = 0;
};

BaseTrackModel.prototype.disconnectFromAudioSource = function(){
    this.trackObject.disconnect(Tone.Master);
};

BaseTrackModel.prototype.clearObject = function(){
    this.trackObject = null;
};

/**
 * @param {Object} source
 * @type {null}
 * @protected
 * @return {Tone}
 */
BaseTrackModel.prototype._generate = null;

BaseTrackModel.prototype.createPlayObjects = null;

/**
 * @param {Object} options
 * @type {null}
 */
BaseTrackModel.prototype.play = null;

BaseTrackModel.prototype.record = null;

BaseTrackModel.prototype.setSetting = null;

BaseTrackModel.prototype.applyFilter = null;

BaseTrackModel.prototype.removeFilter = null;

BaseTrackModel.prototype.merge = null;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseRecorder;


function BaseRecorder(){}

BaseRecorder.prototype.play = null;

BaseRecorder.prototype.getData = null;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseDrumModel = __webpack_require__(27);
var inherit = __webpack_require__(0);

module.exports = MembraneModel;

function MembraneModel(playSetting){
    BaseDrumModel.call(this, playSetting);
}

inherit(MembraneModel, BaseDrumModel);

MembraneModel.prototype._generate = function(){
    return new Tone.MembraneSynth(this.setting).toMaster();
};

MembraneModel.prototype.stop = function(){
    this.trackObject.triggerRelease();
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(45);

module.exports = {
    "save": save,
    "getAudioContextBuffer": getAudioContextBuffer,
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
    var blob = new Blob([buffer], {"type": "audio/x-wav"});
    return blob;
}

function AudioContextToBlob(audioContext){
    var buffer = getAudioContextBuffer(audioContext);
    var blob = AudioBufferToBlob(buffer);
    return blob;
}

var save = (function(){
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
            blob = AudioBufferToBlob(data);
        } else{
            buffer = getAudioContextBuffer(data.context);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mergeBuffers = __webpack_require__(46);
var AudioHelper = __webpack_require__(10);

module.exports = TrackManager;

var AudioContext = window.AudioContext || window.webkitAudioContext;

function TrackManager(){}

// get array with Tone.Synth
TrackManager.mergeTracks = function(bufferList){
    var context = new AudioContext();
    return mergeBuffers(bufferList, context);
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(26);
var Factory = __webpack_require__(4);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = ProjectListView;

function ProjectListView(controller){
    BaseWindow.call(this, controller, "project-list");

    this.title = $("<h1>Projects list</h1>");
    this.table = $("<div class='five column stackable ui grid projects'>");
    this.addTrackButton = Factory.createButtonPopup("circular ui icon button add-project", "large plus icon", "",
                                                    "Click to add new project");

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

    windowsTransport.subscribe(commonEventNames.E_RENAME_PROJECT, function(eventName, object){
        // update project name after renaming
        self.table.find('#' + object.id).text(object.name);
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
    var $deleteProjectButton;
    $deleteProjectButton = Factory.deleteCircleButton(_id, this.onRemoveButtonClicked);
    $item = $("<div class='name' id='" + _id + "'>" + object.name +"</div>");
    $column = $("<div class='column' id='item-" + _id + "'>");
    $column.append($item);
    $column.append($deleteProjectButton);
    $deleteProjectButton.hide();
    $column.mouseenter(function(event){
        $deleteProjectButton.show();
    });
    $column.mouseleave(function(event){
        $deleteProjectButton.hide();
    });
    $column.on("click", function(event){
        var index = self.controller.model.findIndexById(_id);
        self.controller.model.setActiveProject(self.controller.model.at(index));
        windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackList");
    });
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
        windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "Do you really want to delete project?");
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseWindow = __webpack_require__(26);
var TrackDataView = __webpack_require__(97);
var Factory = __webpack_require__(4);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

var ProjectRecorder = __webpack_require__(68);

module.exports = TrackListView;

function TrackListView(controller){
    BaseWindow.call(this, controller, "track-list-view");

    this.projectNameEditor = $("<div class='project-name-editor'>");
    this.projectName = $("<div class='project-name' data-content='Click to rename'>");
    this.inputName = Factory.createInput("rename", "");
    this.okRenameButton = Factory.createButton("confirm-renaming", "ok");
    this.cancelRenameButton = Factory.createButton("cancel-renaming", "cancel");

    this.addTrackButton = Factory.createIconButton("circular ui icon button add-track", "large plus icon", "");
    this.instrumentChoice = Factory.buttonsPopup(["synth", "drum"], //, "oscillator", "noise"],
                                                 setTrackInstrument.bind(this));
    this.trackList = $("<div class='track-list'>");
    this.__onRemoveButtonClicked = onRemoveButtonClicked.bind(this);

    this.selectedItem = null;

    this.isSaveAction = false;

    this.player = new Tone.Player(); // FIX THIS !!!!!!

    this._build();
    this.hide();
}

inherit(TrackListView, BaseWindow);

TrackListView.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    this.projectName.popup();
    this.projectName.on("click", function(){
        self.renameProject();
    });

    this.okRenameButton.on("click", function(){
        self.hideRenameComponents();
        // apply changing to model and view
        self.controller.model.name = self.inputName.find("input").val();
        self.projectName.text(self.inputName.find("input").val());
        windowsTransport.notify(commonEventNames.E_RENAME_PROJECT, {"id": self.controller.model.id,
                                                                    "name": self.controller.model.name});
    });

    this.cancelRenameButton.on("click", function(){
        self.hideRenameComponents();
    });

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

    windowsTransport.subscribe(commonEventNames.E_EXPORT_PROJECT, function(){
        var r = new ProjectRecorder(self.controller.model);
        r.createRecord(r.saveBuffers.bind(r));
    });

    windowsTransport.subscribe(commonEventNames.E_PLAY_PROJECT, function(eventName, audioPlayer){
        var r = new ProjectRecorder(self.controller.model);  // always create new ProjectRecorder ??
        r.createRecord(audioPlayer.createPlayer.bind(audioPlayer));
    });

    this.projectNameEditor.append(this.inputName);
    this.projectNameEditor.append(this.okRenameButton);
    this.projectNameEditor.append(this.cancelRenameButton);

    this.projectNameEditor.hide();
    this.inputName.hide();
    this.okRenameButton.hide();
    this.cancelRenameButton.hide();

    container.append(this.projectName);
    container.append(this.projectNameEditor);
    container.append(this.trackList);
    container.append(this.addTrackButton);
    container.append(this.instrumentChoice);

    this.addTrackButton.popup({
        on: "click"
    });
};

TrackListView.prototype.back = function(){
    windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "Do you want to save project settings?");
    this.isSaveAction = true;
};

TrackListView.prototype.confirmed = function(){
    var self = this;
    if(this.isSaveAction === true){
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
        this.isSaveAction = false;
    } else{
        this.controller.removeById(this.selectedItem.attr("id"));
    }
};

TrackListView.prototype.declined = function(){
    if(this.isSaveAction === true){
        this.controller.model.clear();
        windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "projectList");
        this.isSaveAction = false;
    } else{
        this.selectedItem = null;
    }
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
    $deleteTrackButton.hide();
    $instrumentContainer.mouseenter(function(event){
        $deleteTrackButton.show();
    });
    $instrumentContainer.mouseleave(function(event){
        $deleteTrackButton.hide();
    });
    this.trackList.append($instrumentContainer);
};

TrackListView.prototype.remove = function(id){
    this.trackList.find(".track-" + id).remove();
};

TrackListView.prototype.playBuffer = function(buffer){
    this.player.buffer = buffer;
    this.player.start();
};

TrackListView.prototype.setProjectName = function(name){
    this.projectName.text(name);
};

TrackListView.prototype.renameProject = function(){
    console.log("+");
    var self = this;
    var input = this.inputName.find("input");
    this.showRenameComponents();
    input.val(this.projectName.text());
};

TrackListView.prototype.showRenameComponents = function(){
    this.projectName.hide();
    this.projectNameEditor.show();
    this.inputName.show();
    this.okRenameButton.show();
    this.cancelRenameButton.show();
};

TrackListView.prototype.hideRenameComponents = function(){
    this.projectName.show();
    this.projectNameEditor.hide();
    /*this.inputName.hide();
    this.okRenameButton.hide();
    this.cancelRenameButton.hide();*/
};

function onRemoveButtonClicked($element){
    if (this.selectedItem === null){
        this.selectedItem = $element;
        windowsTransport.notify(commonEventNames.E_SHOW_MODAL, "Do you really want to delete track?");
    }
}

function setTrackInstrument(value){
    var result = {};
    result.data = {};
    result.data.instrument = value;
    this.controller.add(result);
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var WaveForm = __webpack_require__(100);
var BaseWindow = __webpack_require__(26);
var FilterView = __webpack_require__(88);
var SettingView = __webpack_require__(95);
var InstrumentView = __webpack_require__(89);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

var AudioBufferRecorder = __webpack_require__(17);
var DrumAudioBufferRecorder = __webpack_require__(30);
var TrackDrum = __webpack_require__(23);
var TrackManager = __webpack_require__(11);

module.exports = TrackView;

function TrackView(controller){
    BaseWindow.call(this, controller, "track-view");

    this.title = "";

    this.waveform = new WaveForm();
    this.tabBlock = $("<div class='ui top attached tabular menu'>");

    this.tools = $("<div class='ui stackable two column grid tools'>");

    this.settingTabSegment = new SettingView(null);
    this.filterTabSegment = new FilterView(null);

    this.settingTitle = $("<a class='item' data-tab='" + this.settingTabSegment.dataTab + "'>settings</a>");
    this.filterTitle = $("<a class='item' data-tab='" + this.filterTabSegment.dataTab + "'>filters</a>");

    this.instrumentView = new InstrumentView();

    this.recorder = null;

    this._build();
    this.hide();
    this.showTabMenu();
}

inherit(TrackView, BaseWindow);

TrackView.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    this.setActiveSettingView();

    this.controller.observer.subscribe(commonEventNames.E_SET_TRACK, setTrack.bind(this));

    windowsTransport.subscribe(commonEventNames.E_EXPORT_TRACK, function(){
        console.log("export track");
        console.log(self.controller.model);
        if(self.controller.model instanceof TrackDrum){
            console.log("???????????????????");
            self.recorder = new DrumAudioBufferRecorder();
        } else{
            self.recorder = new AudioBufferRecorder();
        }
        self.recorder.setModel(self.controller.model);
        self.recorder.record(TrackManager.save);
    });

    this.createView();
};

TrackView.prototype.createView = function(){
    var halfWidth = ($(window).width() / 2) - 200;
    var instrumentColumn = $("<div class='column instrument'>");
    var toolColumn = $("<div class='column tool'>");
    instrumentColumn.css("min-width", halfWidth);
    toolColumn.css("min-width", halfWidth);
    instrumentColumn.append(this.waveform.getContainer());
    instrumentColumn.append(this.instrumentView.getContainer());
    this.tabBlock.append(this.settingTitle);
    this.tabBlock.append(this.filterTitle);
    toolColumn.append(this.tabBlock);
    toolColumn.append(this.settingTabSegment.getContainer());
    toolColumn.append(this.filterTabSegment.getContainer());
    this.tools.append(instrumentColumn);
    this.tools.append(toolColumn);
    this.getContainer().append(this.tools);
};

TrackView.prototype.showTabMenu = function(){
    $(document).ready(function(){
        $('.tabular.menu .item').tab({history:false});
    });
};

TrackView.prototype.setActiveSettingView = function(){
    this.settingTabSegment.setActive();
    this.settingTitle.addClass("active");
};

TrackView.prototype.setActiveFilterView = function(){
    this.filterTabSegment.setActive();
    this.filterTitle.addClass("active");
};

TrackView.prototype.back = function(){
    this.settingTabSegment.table.empty();
    this.filterTabSegment.table.empty();
    this.waveform.getContainer().empty();
    windowsTransport.notify(commonEventNames.E_ACTIVATE_WINDOW, "trackList");
    this.settingTabSegment.resetToolOptions(); // reset previous setting of track
    this.filterTabSegment.resetToolOptions(); // reset previous filter of track
    // save playing setting
    this.instrumentView.track.setPlaySettings();
    this.instrumentView.instrument.getContainer().empty();
    this.instrumentView.getContainer().empty();

    this.instrumentView.track = null;
    this.recorder = null;
    this.waveform.wavesurfer = null;
};

TrackView.prototype.bindKeyEvent = function(){
    this.instrumentView.instrument.keyDown();
    this.instrumentView.instrument.keyUp();
};

function setTrack(eventName, track){
    this.settingTabSegment.setTrack(track);
    this.filterTabSegment.setFilter(track);
    this.instrumentView.setTrack(track);

    if(track.id > 0){
        // draw waveform only for fulled track
        // new track (it's id < 0) always empty
        if (track instanceof TrackDrum) {
            this.recorder = new DrumAudioBufferRecorder();
        } else {
            this.recorder = new AudioBufferRecorder();
        }
        console.log();
        this.recorder.setModel(track);
        this.recorder.record(this.waveform.create.bind(this.waveform));
    }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseController = __webpack_require__(48);
var inherit = __webpack_require__(0);
var ObservableList = __webpack_require__(21);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventDuration = __webpack_require__(38);

module.exports = AudioBufferRecorder;

function AudioBufferRecorder(trackModel){
    this.track = null; // current track
    this.playData = null; // playing data for current track
    this.duration = 0; // duration for current track
    this.trackModel = trackModel;
    this.filterObjects = {};
    this.setModel(trackModel);
}

AudioBufferRecorder.prototype.setModel = function(trackModel){
    if(trackModel){
        this.trackModel = trackModel;
        this.createTrack();
    }
};

/**
 * Again create track and filters for record them to Offline
 */
AudioBufferRecorder.prototype.createTrack = function(){
    this.filterObjects.length = 0;
    switch(this.trackModel.instrument){
        case "synth":
            this.track = new Tone.Synth(this.trackModel.setting).toMaster();
            this.playData = createSynthPlayData(this.trackModel.playObjects);
            this.duration = eventDuration.keyDuration(this.playData);
            break;
        case "drum":
            this.track = null;
            break;
        case "oscillator":
            this.track = new Tone.Oscillator(this.trackModel.setting).toMaster();
            this.playData = createOscillatorPlayData(this.trackModel.playObjects);
            this.duration = eventDuration.durationByTime(this.playData);
            break;
        case "noise":
            this.track = new Tone.NoiseSynth();
            break;
    }
    this.createFilters();
};

AudioBufferRecorder.prototype.createFilter = function(filterName, filterSetting){
    switch(filterName){
        case "tremolo":
            this.filterObjects[filterName] = new Tone.Tremolo(filterSetting);
            break;
        case "vibrato":
            this.filterObjects[filterName] = new Tone.Vibrato(filterSetting);
            break;
        case "crusher":
            this.filterObjects[filterName] = new Tone.BitCrusher(filterSetting);
            break;
        case "phaser":
            this.filterObjects[filterName] = new Tone.Phaser(filterSetting);
            break;
        case "freeverb":
            this.filterObjects[filterName] = new Tone.Freeverb(filterSetting);
            break;
    }
};

AudioBufferRecorder.prototype.createFilters = function(){
    var name;
    if(Object.keys(this.trackModel.postSettings.filterObjects).length !== 0){
        this.track.disconnect(Tone.Master); // disconnect track from Master only if it has applying to filter/s
    }
    for(name in this.trackModel.postSettings.filterObjects){
        this.createFilter(name, this.trackModel.postSettings.filterObjects[name].getOptions());
        this.applyFilterToTrack(this.filterObjects[name]);
    }
};

/**
 * Apply all filters from filterObjects to one track
 */
AudioBufferRecorder.prototype.applyFilterToTrack = function(filter){
    filter.toMaster();
    this.track.connect(filter);
};

/**
 * Play events for track
 * @param instrument - String - instrument name
 * @param value - Object - object with play values
 */
AudioBufferRecorder.prototype.play = function(instrument, value){
    var self = this;
    switch(instrument){
        case "synth":
            this.track.triggerAttackRelease(value.note, value.duration, value.time);
            break;
        case "drum":
            break;
        case "oscillator":
            setTimeout(function(){
                self.track.frequency.value = value.frequency;
                self.track.volume.value = value.volume;
            }, value.time*1000);
            this.track.start(value.time);
            //this.track.stop();
            break;
        case "noise":
            break;
    }
};

AudioBufferRecorder.prototype.record = function(callback){
    var self = this;
    Tone.Offline(function(){
        self.createTrack(self.trackModel.instrument);
        var part = new Tone.Part(function(time, value){
            // record all play values
            self.play(self.trackModel.instrument, value);
            console.log(time, self.duration, value);
        }, self.playData);
        part.start(0);
        Tone.Transport.start();
    }, this.duration).then(function(buffer){
        console.log("result");
        console.log(buffer._buffer);
        callback(buffer._buffer);
    });
};

function createSynthPlayData(trackPlayData){
    var events = [];
    var tmp, i;
    for(i = 0; i < trackPlayData.length; ++i){
        tmp = {};
        tmp.time = trackPlayData[i].triggerAttackTime / 1000;
        tmp.duration = trackPlayData[i].triggerReleaseTime / 1000;
        tmp.note = trackPlayData[i].note;
        events.push(tmp);
    }
    return events;
}

function createOscillatorPlayData(trackPlayData){
    var events = [];
    var tmp, i;
    for(i = 0; i < trackPlayData.length; ++i){
        tmp = {};
        tmp.time = trackPlayData[i].startTime / 1000;
        tmp.frequency = trackPlayData[i].frequency;
        tmp.volume = trackPlayData[i].volume;
        events.push(tmp);
    }
    return events;
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseOption = __webpack_require__(28);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseOption = __webpack_require__(28);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseRecorder = __webpack_require__(8);

module.exports = DrumRecorder;

function DrumRecorder(instrumentName, playValue, startTime, releaseTime){
    BaseRecorder.call(this);
    this.instrument = instrumentName;
    this.playValue = playValue;
    this.startTime = startTime || 0;
    this.releaseTime = releaseTime || 0;
}

inherit(DrumRecorder, BaseRecorder);

DrumRecorder.prototype.play = function(drumObject){
    if((typeof this.playValue) === "string") {
        drumObject.triggerAttack(this.playValue, '+' + (this.startTime / 1000));
    } else{
        drumObject.triggerAttackRelease(this.playValue, '+' + (this.startTime / 1000));
    }
};

DrumRecorder.prototype.getData = function(){
    var result = {};
    result.instrument = this.instrument;
    result.playValue = this.playValue;
    result.startTime = this.startTime;
    return result;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseModel = __webpack_require__(51);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseRecorder = __webpack_require__(8);

module.exports = PlayerRecorder;

function PlayerRecorder(instrumentName, startTime){
    BaseRecorder.call(this);
    this.instrument = instrumentName;
    this.startTime = startTime || 0;
}

inherit(PlayerRecorder, BaseRecorder);

PlayerRecorder.prototype.play = function(playerObject){
    playerObject.start('+' + (this.startTime / 1000));
};

PlayerRecorder.prototype.getData = function(){
    var result = {};
    result.instrument = this.instrument;
    result.startTime = this.startTime;
    return result;
};



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(7);
var DrumRecorder = __webpack_require__(20);
var PlayerRecorder = __webpack_require__(22);
var inherit = __webpack_require__(0);
var KickLeft = __webpack_require__(60);
var KickRight = __webpack_require__(61);
var BigTom = __webpack_require__(54);
var LeftTom = __webpack_require__(62);
var Bell = __webpack_require__(53);
var SnarePlayer = __webpack_require__(70);
var HiHatPlayer = __webpack_require__(59);

module.exports = TrackDrum;  // FIXME !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function TrackDrum(id, data){
    BaseTrackModel.call(this, id, data);
    this.drums = data.drums || []; // list of names of used drums
    this.drumObjects = {}; // only used drum
    this.allDrumObjects = {}; // instances of all possible drum objects
    this.volume = data.volume || 1;
    this.createAllDrumObjects();
    this.createDrumObjects();
}

inherit(TrackDrum, BaseTrackModel);

TrackDrum.prototype._generate = function(){};

TrackDrum.prototype.getContext = function(){};

TrackDrum.prototype.getConstants = function(){};

TrackDrum.prototype.getAudioBuffer = function(){};

TrackDrum.prototype.getBlob = function(){};

TrackDrum.prototype.disconnectFromAudioSource = function(){};

TrackDrum.prototype.getVolume = function(){
    return this.volume;
};

TrackDrum.prototype.setVolume = function(value){
    var name;
    this.volume = value;
    for(name in this.allDrumObjects){
        this.allDrumObjects[name].setVolume(value);
    }
};

TrackDrum.prototype.getData = function(){
    var result = {};
    result.id = this.id;
    result.isDeleted = this.isDeleted;
    result.instrument = this.instrument;
    result["drums"] = this.drums;
    result["play-setting"] = this.playSetting;
    result["post-setting"] = this.postSettings.getPostSettings();
    return result;
};

/**
 * Add new drum
 * @param drumName
 */
TrackDrum.prototype.addDrum = function(drumName){
    if(this.drums.indexOf(drumName) === -1){
        // get reference to drum object
        this.drumObjects[drumName] = this.allDrumObjects[drumName];
        this.drums.push(drumName);
    }
};

/**
 * Put used drum sound object in this.drumObjects if them exist
 */
TrackDrum.prototype.createDrumObjects = function(){
    var drumName;
    for(drumName in this.allDrumObjects){
        if(this.drums.indexOf(drumName) !== -1){
            // get reference to drum object
            this.drumObjects[drumName] = this.allDrumObjects[drumName];
        }
    }
};

TrackDrum.prototype.play = function(){
    var i, token;
    for(i = 0; i < this.playObjects.length; ++i){
        token = this.playObjects[i];
        token.play(this.drumObjects[token.instrument].trackObject);
    }
};

TrackDrum.prototype.stop = function(){
    var drum;
    for(drum in this.drumObjects){
        this.drumObjects[drum].stop();
    }
};

TrackDrum.prototype.createPlayObject = function(value, time){
    var recorder;
    if(value.instrument === "snare" || value.instrument === "hi-hat"){
        recorder = new PlayerRecorder(value.instrument, time);
    } else{
        recorder = new DrumRecorder(value.instrument, value.playValue, time);
    }
    this.playObjects.push(recorder);
};

TrackDrum.prototype.createPlayObjects = function(){
    var i, tokenPlaySetting;
    for(i = 0; i < this.playSetting.length; ++i){
        tokenPlaySetting = this.playSetting[i];
        this.createPlayObject(tokenPlaySetting, tokenPlaySetting.startTime);
    }
};


/*TrackDrum.prototype.createPlayObjects = function(){
    var i, token;
    for(i = 0; i < this.playSetting.length; ++i){
        token = this.playSetting[i];
        this.playObjects.push(new DrumRecorder(token.instrument, token.playValue, token.startTime));
    }
};*/

/**
 * Apply filter for each drum object
 * @param filter
 */
TrackDrum.prototype.applyFilter = function(filter){
    var drum;
    for(drum in this.allDrumObjects){
        filter.applyToTrack(this.allDrumObjects[drum].trackObject);
    }
};

/**
 * Remove filter from each drum object
 * @param filter
 */
TrackDrum.prototype.removeFilter = function(filter){
    var drum;
    for(drum in this.allDrumObjects){
        filter.disconnectFilter(this.allDrumObjects[drum].trackObject);
    }
};

TrackDrum.prototype.merge = function(){
    // merge this.object !!!!!!!
};

TrackDrum.prototype.clearObject = function(){
    var drum;
    for(drum in this.allDrumObjects){
        this.allDrumObjects[drum].clearObject();
    }
};

TrackDrum.prototype.emptyPlaySetting = function(){
    this.playSetting.length = 0;
    this.playObjects.length = 0;
    this.drums.length = 0;
};

/**
 * Init all drum sound objects
 */
TrackDrum.prototype.createAllDrumObjects = function(){
    this.allDrumObjects["kick-left"] = new KickLeft();
    this.allDrumObjects["kick-right"] = new KickRight();
    this.allDrumObjects["big-tom"] = new BigTom();
    this.allDrumObjects["left-tom"] = new LeftTom();
    this.allDrumObjects["bell"] = new Bell();
    this.allDrumObjects["snare"] = new SnarePlayer();
    this.allDrumObjects["hi-hat"] = new HiHatPlayer();
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transportAudioFile = __webpack_require__(85);
var TrackManager = __webpack_require__(11);

var changeSound = __webpack_require__(76);
var changeRequest = __webpack_require__(75);
var getSound = __webpack_require__(80);
var getProject = __webpack_require__(79);
var projectList = __webpack_require__(82);
var deleteProject = __webpack_require__(77);
var deleteTrack = __webpack_require__(78);
var getUser = __webpack_require__(81);


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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);

module.exports = BaseInstrument;

function BaseInstrument(track, instrumentName){
    BaseView.call(this, instrumentName);
    this.track = track;
    this.startTime = 0;
    this.isRecordNow = false;
}

inherit(BaseInstrument, BaseView);

BaseInstrument.prototype.recordEvent = function(eventName, recordButton){
    if(this.isRecordNow === true){
        // stop record
        this.isRecordNow = false;
        recordButton.text("record");
        recordButton.attr("data-content", "Click to record sound");
    } else{
        this.isRecordNow = true;
        recordButton.text("stop");
        recordButton.attr("data-content", "Click to stop record");
        this.clearEvent();
    }
};

BaseInstrument.prototype.clearEvent = function(){
    if(this.track){
        console.log("clear recorded");
        this.track.emptyPlaySetting(); // clear previous play data setting
    }
};

BaseInstrument.prototype.keyDown = function(){};

BaseInstrument.prototype.keyUp = function(){};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioHelper = __webpack_require__(10);
var DrumRecorder = __webpack_require__(20);
var PlayerRecorder = __webpack_require__(22);

module.exports = BaseDrumModel;

function BaseDrumModel(setting, playSetting){
    this.instrument = null;
    this.setting = setting || {};
    this.playSetting = playSetting || [];
    this.playObjects = [];
    this.playValue = null;
    //this.createPlayObjects();
    this.setInstrument();
    this.setSetting();
    this.trackObject = this._generate();
}

BaseDrumModel.prototype._generate = null;

BaseDrumModel.prototype.setSetting = null;

BaseDrumModel.prototype.setInstrument = null;

BaseDrumModel.prototype.getVolume = function(){
    return this.trackObject ? this.trackObject.volume.value : null;
};

BaseDrumModel.prototype.setVolume = function(value){
    this.trackObject.volume.value = value;
};

BaseDrumModel.prototype.emptyPlaySetting = function(){
    this.playSetting.length = 0;
    this.playObjects.length = 0;
};

BaseDrumModel.prototype.clearObject = function(){
    this.trackObject = null;
};

BaseDrumModel.prototype.getContext = function(){
    return this.trackObject.context._context;
};

BaseDrumModel.prototype.getConstants = function(){
    return this.trackObject.context;
};

BaseDrumModel.prototype.getAudioBuffer = function(){
    return AudioHelper.getAudioContextBuffer(this.getConstants());
};

BaseDrumModel.prototype.play = function(){
    var i;
    for(i =0; i < this.playObjects.length; ++i){
        this.playObjects[i].play(this.trackObject);
    }
};

BaseDrumModel.prototype.playNow = function(){
    this.trackObject.triggerAttack(this.playValue);
};

BaseDrumModel.prototype.playAll = function(){
    var token;
    for(token in this.playSetting){
        this.play(this.playSetting[token].playValue, this.playSetting[token].startTime);
    }
};

BaseDrumModel.prototype.stop = null;

/*BaseDrumModel.prototype.createPlayObject = function(value, time){
    var recorder;
    if(value.instrument === "snare" || value.instrument === "hi-hat"){
        recorder = new PlayerRecorder(value.instrument, time);
    } else{
        recorder = new DrumRecorder(value.instrument, value.playValue, time);
    }
    this.playObjects.push(recorder);
};

BaseDrumModel.prototype.createPlayObjects = function(){
    var i, tokenPlaySetting;
    for(i = 0; i < this.playSetting.length; ++i){
        tokenPlaySetting = this.playSetting[i];
        this.createPlayObject(tokenPlaySetting, tokenPlaySetting.startTime);
    }
};*/


/***/ }),
/* 28 */
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
/* 29 */
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
        if(target.hasOwnProperty(key)){
            result[key] = target[key].valueOf();
        }
    }
    return result;
};

BaseTrackSetting.prototype.toString = function(){
    return "[object BaseTrackSettingSingleOption]";
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var TrackManager = __webpack_require__(11);
var AudioBufferRecorder = __webpack_require__(17);
var eventDuration = __webpack_require__(38);

module.exports = DrumAudioBufferRecorder;

function DrumAudioBufferRecorder(drumModel){
    AudioBufferRecorder.call(this, drumModel);
    this.drumCount = 0;
    this.drumAudioBuffers = [];
    this.durationList = {};
    this.playDataList = {};
}

inherit(DrumAudioBufferRecorder, AudioBufferRecorder);

DrumAudioBufferRecorder.prototype.setModel = function(drumModel){
    if(drumModel){
        this.trackModel = drumModel;
        this.drumCount = drumModel.drums.length;
        this.createTracks();
    }
};

DrumAudioBufferRecorder.prototype.createTrack = function(drumTrack){
    this.filterObjects.length = 0;  // empty previous track filters
    if(drumTrack instanceof AudioBuffer){
        // create sound from buffer
        this.track = new Tone.Player(drumTrack).toMaster();
    } else{
        // create sound from drum model
        if(drumTrack.trackObject instanceof Tone.MembraneSynth){
            this.track = new Tone.MembraneSynth(drumTrack.setting).toMaster();
        } else if(drumTrack.trackObject instanceof Tone.MetalSynth){
            this.track = new Tone.MetalSynth(drumTrack.setting).toMaster();
        } else if(drumTrack.trackObject instanceof Tone.Player){
            this.track = new Tone.Player(drumTrack.url).toMaster();
        }
    }
    if(this.track){
        this.createFilters();
        //this.playData = createDrumPlayData(this.trackModel.playObjects, drumTrack.instrument);
        //this.duration = eventDuration.durationByTime(this.playData);
    }
    console.log("track");
    console.log(this.track);
};

DrumAudioBufferRecorder.prototype.createTracks = function(){
    var drum, name;
    for(name in this.trackModel.drumObjects){
        drum = this.trackModel.drumObjects[name];
        this.createTrack(drum);
        // save play data and duration at once
        // save play data of each track in object: key - instrument name, value - array of objects with playing data
        this.playDataList[drum.instrument] = createDrumPlayData(this.trackModel.playObjects, drum.instrument);
        // save duration of each track in object: key - instrument name, value - duration
        this.durationList[drum.instrument] = eventDuration.durationByTime(this.playDataList[drum.instrument]);
    }
};

DrumAudioBufferRecorder.prototype.play = function(drumTrack, value){
    if(drumTrack.trackObject instanceof Tone.MembraneSynth){
        this.track.triggerAttack(value.playValue, value.time);
    } else if(drumTrack.trackObject instanceof Tone.Player){
        this.track.start(value.time);
    } else if(drumTrack.trackObject instanceof Tone.MetalSynth){
        this.track.triggerAttackRelease(value.playValue, value.time);
    }
};

DrumAudioBufferRecorder.prototype.recordAudioFile = function(drumTrack, callback){
    var buffer, bufferObject;
    var self = this;
    if(drumTrack.trackObject instanceof Tone.Player){
        bufferObject = new Tone.Buffer(drumTrack.url);
        Tone.Buffer.on("load", function(){
            buffer = bufferObject.get();
            // record buffer only when it completely loaded
            self._record(drumTrack, callback, buffer);
        });
    } else{
        this._record(drumTrack, callback);
    }
};

DrumAudioBufferRecorder.prototype.record = function(callback){
    var i, drumTrack;
    this.drumAudioBuffers.length = 0;
    for(i = 0; i < this.drumCount; ++i){
        // this.trackModel.drums[i] - drum instrument name
        drumTrack = this.trackModel.drumObjects[this.trackModel.drums[i]];
        // convert all drum objects to AudioBuffers
        this.recordAudioFile(drumTrack, callback);
    }
};

DrumAudioBufferRecorder.prototype._record = function(drumTrack, callback, buffer){
    var result; // result of merged AudioBuffer
    var self = this;
    // durationList[drumTrack.instrument] - duration of corresponded instrument
    var duration = this.durationList[drumTrack.instrument];
    // playDataList[drumTrack.instrument] - play data of corresponded instrument
    var playData = this.playDataList[drumTrack.instrument];
    console.log(drumTrack.instrument);
    console.log("duration");
    console.log(duration);
    Tone.Offline(function(){
        if(buffer){
            self.createTrack(buffer);
        } else{
            self.createTrack(drumTrack);
        }
        console.log("offline");
        console.log(playData);
        var part = new Tone.Part(function(time, value){
            // record all play values
            console.log("part");
            self.play(drumTrack, value);
        }, playData);
        part.start(0);
        Tone.Transport.start();
    }, duration).then(function(buffer){
        self.drumAudioBuffers.push(buffer._buffer); // save new audioBuffer in list
        console.log("then");
        console.log(buffer._buffer);
        console.log(self.drumAudioBuffers);
        if(self.drumAudioBuffers.length === self.drumCount){
            result = TrackManager.mergeTracks(self.drumAudioBuffers);
            console.log("result");
            console.log(result);
            callback(result);
        }
    });
};

function createDrumPlayData(trackPlayData, instrument){
    var events = [];
    var tmp, i, token;
    for(i = 0; i < trackPlayData.length; ++i){
        tmp = {};
        token = trackPlayData[i];
        if(token.instrument === instrument){
            tmp.time = token.startTime / 1000;
            if(token.playValue){
                tmp.playValue = token.playValue;
            }
            events.push(tmp);
        }
    }
    return events;
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var clamp = __webpack_require__(84);
var BaseRecorder = __webpack_require__(8);

module.exports = MixerRecorder;


function MixerRecorder(frequency, volume, startTime, stopTime){
    BaseRecorder.call(this);
    this.frequency = frequency;
    this.volume = volume;
    this.startTime = startTime || 0;
    //this.stopTime = stopTime || 0;
    this.checkValues();
}

inherit(MixerRecorder, BaseRecorder);

MixerRecorder.prototype.checkValues = function(){
    this.frequency = clamp(this.frequency, 0, 1500);
    this.volume = clamp(this.volume, -75, 75);
};

MixerRecorder.prototype.play = function(oscillator){
    var self = this;
    setTimeout(function(){
        oscillator.frequency.value = self.frequency;
        oscillator.volume.value = self.volume;
    }, this.startTime);
    oscillator.start('+' + (this.startTime / 1000));
    //oscillator.stop(this.stopTime / 1000);
};

MixerRecorder.prototype.getData = function(){
    var result = {};
    result.frequency = this.frequency;
    result.volume = this.volume;
    result.startTime = this.startTime;
    result.stopTime = this.stopTime;
    return result;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseRecorder = __webpack_require__(8);

module.exports = PianoKeyRecorder;

/**
 * @param piano - Tone.Synth
 * @param note - String
 * @param triggerAttackTime
 * @param triggerReleaseTime
 * @constructor
 */
function PianoKeyRecorder(piano, note, triggerAttackTime, triggerReleaseTime){
    BaseRecorder.call(this);
    this.piano = piano;
    this.note = note;
    this.triggerAttackTime = triggerAttackTime || 0; // milliseconds
    this.triggerReleaseTime = triggerReleaseTime || 0; // milliseconds
}

inherit(PianoKeyRecorder, BaseRecorder);

PianoKeyRecorder.prototype.play = function(){
    // convert to seconds:
    var start = this.triggerAttackTime / 1000;
    var duration = (this.triggerReleaseTime - this.triggerAttackTime) / 1000;
    this.piano.triggerAttackRelease(this.note, duration, '+' + start);
};

PianoKeyRecorder.prototype.getData = function(){
    var result = {};
    result.note = this.note;
    result.triggerAttackTime = this.triggerAttackTime;
    result.triggerReleaseTime = this.triggerReleaseTime;
    return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlayerRecorder = __webpack_require__(22);

module.exports = PlayerModel;

function PlayerModel(url, playSetting){
    this.url = url;
    this.instrument = null;
    this.playSetting = playSetting || [];
    this.playObjects = [];
    this.playValue = null;
    this.createPlayObjects();
    this.setInstrument();
    this.trackObject = this._generate();
}

PlayerModel.prototype._generate = function(){
    return new Tone.Player({"url": this.url}).toMaster();
};

PlayerModel.prototype.setInstrument = null;

PlayerModel.prototype.start = function(){
    var i;
    for(i =0; i < this.playObjects.length; ++i){
        this.playObjects[i].play(this.trackObject);
    }
};

PlayerModel.prototype.playNow = function(){
    this.trackObject.start();
};

PlayerModel.prototype.stop = function(){
    this.trackObject.stop();
};

PlayerModel.prototype.emptyPlaySetting = function(){
    this.playSetting.length = 0;
    this.playObjects.length = 0;
};

PlayerModel.prototype.createPlayObject = function(startTime){
    this.playObjects.push(new PlayerRecorder(this.instrument, startTime));
};

PlayerModel.prototype.createPlayObjects = function(){
    var i, tokenPlaySetting;
    for(i = 0; i < this.playSetting.length; ++i){
        tokenPlaySetting = this.playSetting[i];
        this.createPlayObject(tokenPlaySetting.startTime);
    }
};



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(21);
var inherit = __webpack_require__(0);
var TrackSynthesizer = __webpack_require__(37);
var TrackNoise = __webpack_require__(71);
var TrackOscillator = __webpack_require__(72);
var TrackDrum = __webpack_require__(23);
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
        case "drum":
            track = new TrackDrum(source.id, data);
            break;
        case "oscillator":
            track = new TrackOscillator(source.id, data);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var capitalize = __webpack_require__(83);
var TrackSynthesizer = __webpack_require__(37);

module.exports = {
    "updateSettingListFromTrack": function(settingList, track){ // SettingList OR FilterList
        updateList(settingList, track, setToSettingList)
    },
    "updateFilterListFromFilter": function(filterList, filter){
        updateList(filterList, filter, setToFilterList);
    },
    "setSetting": function(list, track, settingName, value){
        setToTrackSetting(track, settingName, value);
        setToSettingList(list, track, settingName);
    },
    "setFilter": function(filterList, filter, filterName, value){
        setOptionToFilterList(filterList, filter, filterName, value);
    },
    "addFilter": function(filterList, filter, filterName, isEnabled){
        addFilter(filterList, filter, filterName, isEnabled);
    },
    "resetFilter": function(filterList, filterName){
        resetFilter(filterList, filterName);
    },
    "resetFilters": function(filterList){
        setFilterListToDefault(filterList);
    },
    "resetSettings": function(settingList){
        setSettingListToDefault(settingList);
    }
};

/**
 * Set data from BaseTrackModel/PostSettings to corresponding list
 * @param listInstance - TrackSettingsSet - SettingList OR FilterList
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
function setFilterOptionsToFilterList(filterElement, options){
    var optionName;
    for(optionName in options){
        filterElement.isEnabled = true; // switch flag for using this filter
        filterElement.options[optionName].set(options[optionName]);
    }
}

/**
 * Get data from filter object and put them to FilterList
 * @param listElement
 * @param filterObject
 * @param filterName
 */
function setToFilterList(listElement, filterObject, filterName){
    setFilterOptionsToFilterList(listElement, filterObject[filterName]);
}

/**
 * Set one option in filter options
 * @param filterList - TrackSettingsSet
 * @param filterObject - PostSettings
 * @param optionName
 * @param value
 */
function setOptionToFilterList(filterList, filterObject, optionName, value){
    var i;
    var tokenFilter;
    var list = filterList.list;
    for(i = 0; i < list.length; ++i){
        tokenFilter = list[i];
        if(optionName in tokenFilter.options){
            tokenFilter.options[optionName].set(value);
            filterObject.setValueToFilter(tokenFilter.name, optionName, value);
        }
    }
}

/**
 * Put all settings from FilterList to FilterObject
 * @param filterList - TrackSettingsSet
 * @param filterObject - PostSettings
 * @param filterName
 * @param isEnabled
 */
function addFilter(filterList, filterObject, filterName, isEnabled){
    var i;
    var tokenFilter;
    var list = filterList.list;
    for(i = 0; i < list.length; ++i){
        tokenFilter = list[i];
        if(tokenFilter.name === filterName){
            tokenFilter.isEnabled = isEnabled;
            filterObject.setFilter(tokenFilter);
        }
    }
}

function setFilterListToDefault(filterList) {
    var i;
    var option;
    var options;
    var tokenFilter;
    var list = filterList.list;
    for (i = 0; i < list.length; ++i) {
        tokenFilter = list[i];
        tokenFilter.isEnabled = false;
        options = tokenFilter.options;
        for(option in options){
            //options[option].value = options[option].__initialValue;
            options[option].reset();
        }
    }
}

function resetFilter(filterList, filterName){
    var i;
    var option;
    var options;
    var tokenFilter;
    var list = filterList.list;
    for (i = 0; i < list.length; ++i) {
        tokenFilter = list[i];
        if(tokenFilter.name === filterName) {
            tokenFilter.isEnabled = false;
            options = tokenFilter.options;
            for(option in options){
                //options[option].value = options[option].__initialValue;
                options[option].reset();
                console.log(options);
            }
        }
    }
}

function setSettingListToDefault(settingList) {
    var i;
    var tokenFilter;
    var list = settingList.list;
    for (i = 0; i < list.length; ++i) {
        tokenFilter = list[i];
        tokenFilter.isEnabled = false;
        tokenFilter.reset();
    }
}

/**
 * Get data from track object and put them to SettingList
 * @param listElement
 * @param trackObject
 * @param optionName
 */
function setToSettingList(listElement, trackObject, optionName){
    var result;
    var methodName = "get" + capitalize(optionName);
    if (methodName in trackObject){
        listElement.isEnabled = true;
        result = trackObject[methodName]();
        // add only existing methods/parameters from track to SettingList
        if (result !== undefined || result !== null){
            listElement.set(trackObject[methodName]());
            hideExistingParams(listElement, trackObject.instrument);
        }
    }
}

function setToTrackSetting(track, settingName, value){
    var methodName = "set" + capitalize(settingName);
    track[methodName](value);
    track.setSetting(); // write to model parameter for saving to server
}

/**
 * Hide existing parameters in SettingList
 */
function hideExistingParams(listElement, instrumentName){
    switch(instrumentName){
        case "drum":
            if(listElement.name === "frequency" || listElement.name === "type"){
                listElement.isEnabled = false;
            }
            break;
        case "oscillator":
            if(listElement.name === "frequency" || listElement.name === "volume"){
                listElement.isEnabled = false;
            }
            break;
        case "noise":
            break;
    }
}


/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(7);
var PianoKeyPlayer = __webpack_require__(32);
var inherit = __webpack_require__(0);

module.exports = TrackSynthesizer;

// @param {String} name
// @param {Object} source
function TrackSynthesizer(id, data){
    BaseTrackModel.call(this, id, data);
}

inherit(TrackSynthesizer, BaseTrackModel);

TrackSynthesizer.prototype.getType = function(){
    return this.trackObject.oscillator.type;
};

TrackSynthesizer.prototype.getAttack = function(){
    return this.trackObject.envelope.attack;
};

TrackSynthesizer.prototype.getDecay = function(){
    return this.trackObject.envelope.decay;
};

TrackSynthesizer.prototype.getSustain = function(){
    return this.trackObject.envelope.sustain;
};

TrackSynthesizer.prototype.getRelease = function(){
    return this.trackObject.envelope.release;
};

TrackSynthesizer.prototype.setType = function(value){
    this.trackObject.oscillator.type = value;
};

TrackSynthesizer.prototype.setAttack = function(value){
    this.trackObject.envelope.attack = value;
};

TrackSynthesizer.prototype.setDecay = function(value){
    this.trackObject.envelope.decay = value;
};

TrackSynthesizer.prototype.setSustain = function(value){
    this.trackObject.envelope.sustain = value;
};

TrackSynthesizer.prototype.setRelease = function(value){
    this.trackObject.envelope.release = value;
};

TrackSynthesizer.prototype.setSetting = function(){
    if(this.trackObject){
        if(this.setting.oscillator === undefined){
            this.setting.oscillator = {};
        }
        if(this.setting.envelope === undefined){
            this.setting.envelope = {};
        }
        this.setting.oscillator.valume = this.getVolume();
        //this.setting.oscillator.frequency = this.getFrequency();
        //this.setting.frequency = this.getFrequency();
        this.setting.oscillator.type = this.getType();
        this.setting.envelope.attack = this.getAttack();
        this.setting.envelope.decay = this.getDecay();
        this.setting.envelope.sustain = this.getSustain();
        this.setting.envelope.release = this.getRelease();
    }
};

TrackSynthesizer.prototype._generate = function(){
    return new Tone.Synth(this.setting).toMaster(); //{"oscillator": {}, "envelope": {}}
};

TrackSynthesizer.prototype.play = function(){
    var i;
    for(i = 0; i < this.playObjects.length; ++i){
        this.playObjects[i].play();
    }
};

TrackSynthesizer.prototype.stop = function(){
    this.trackObject.triggerRelease();
};

TrackSynthesizer.prototype.playKeyNow = function(note){
    try {
        this.trackObject.triggerAttack(note);
    } catch(SyntaxError){
        console.log(note);
    }
};

TrackSynthesizer.prototype.stopKeyNow = function(){
    this.trackObject.triggerRelease();
};

TrackSynthesizer.prototype.createPlayObjects = function(){
    var i, tokenPlaySetting;
    for(i = 0; i < this.playSetting.length; ++i){
        tokenPlaySetting = this.playSetting[i];
        this.playObjects.push(new PianoKeyPlayer(this.trackObject, tokenPlaySetting.note,
            tokenPlaySetting.triggerAttackTime, tokenPlaySetting.triggerReleaseTime));
    }
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expect object list with time and duration parametrs
 * @param timeData - Array
 * @returns {number}
 */
module.exports = {
    "keyDuration": keyDuration,
    "durationByTime": durationByTime,
    "durationByStartTime": durationByStartTime
};


function keyDuration(timeData){
    var duration = 0;
    var tmp, token;
    for(token in timeData){
        if(timeData[token].time === 0){
            duration = timeData[token].duration;
        } else{
            tmp = timeData[token].time + timeData[token].duration;
            duration = Math.max(duration, tmp);
        }
    }
    return duration - 0.1;
}

function durationByTime(timeData){
    var time;
    var duration = 0;
    for(time in timeData){
        duration += timeData[time].time;
    }
    return duration + 0.5;
}

function durationByStartTime(timeData){
    var time;
    var duration = 0;
    for(time in timeData){
        duration += timeData[time].startTime;
    }
    return duration + 0.5;
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var TabSegment = __webpack_require__(96);
var BaseRange = __webpack_require__(19);
var BaseOptionList = __webpack_require__(18);
var Factory = __webpack_require__(4);

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

ToolView.prototype.resetToolOptions = null;

ToolView.prototype.setEvent = function(){};

ToolView.prototype.createElement = function(className, name, value){
    var $element;
    if(value instanceof BaseRange){
        $element = Factory.rangeElement(className + " range", name, value.min, value.max,
                                        this.setEvent.bind(this), value.step, value.value);
    } else if(value instanceof BaseOptionList){
        $element = Factory.dropDownElement(className, name, value.options,
                                           this.setEvent.bind(this), value.value);
    }
    return $element;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(16);
var inherit = __webpack_require__(0);
var RequestManager = __webpack_require__(24);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(16);
var inherit = __webpack_require__(0);
var RequestManager = __webpack_require__(24);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListController = __webpack_require__(16);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ObservableList = __webpack_require__(21);
var ProjectModel = __webpack_require__(34);
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);
var MessageModal = __webpack_require__(91);
var ProjectListView = __webpack_require__(13);
var TrackListView = __webpack_require__(14);
var TrackView = __webpack_require__(15);
var MenuBar = __webpack_require__(90);
var windowsTransport = __webpack_require__(3);
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
    this.__activeWindow.show();

    console.log("active");
    console.log(this.__activeWindow.controller.model);

    // TODO: consider to re-implement this...
    if(this.__activeWindow instanceof TrackListView){
        this.__activeWindow.controller.attachModel(this.__windows["projectList"].controller.model.getActiveProject());
        this.__activeWindow.controller.model.clearActiveTrack();
        // catch project data only from ProjectListView !!!!!!!!
        if(this.isProjectListView === true){
            this.__activeWindow.controller.fetchData();
        }
        this.isProjectListView = false;
        this.__activeWindow.setProjectName(this.__windows["projectList"].controller.model.getActiveProject().name);
    } else if(this.__activeWindow instanceof ProjectListView){
        this.isProjectListView = true;
        this.__activeWindow.controller.model.clearActiveProject();
    } else if(this.__activeWindow instanceof TrackView){
        this.__activeWindow.controller.attachModel(this.__windows["trackList"].controller.model.getActiveTrack());
        // send track settings to view
        this.__activeWindow.controller.sendTrack();
        this.__activeWindow.bindKeyEvent();
    }
    // if menubar change after change active window
    // for example project view add play button when active project view
    this.__menuBar.adaptToActiveWindow(this.__activeWindow);
};

/*WindowManager.prototype.hideUserOnlyElements = function(userName){
    if(userName instanceof Error){
        var $elements = $(".user-only");
        $elements.addClass("disabled");
        // ... add "disable" class to all of these $elements
    }
};*/


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = mergeBuffers;

function mergeBuffers(buffers, ac) {
  var maxChannels = 0;
  var maxDuration = 0;
  for (var i = 0; i < buffers.length; i++) {
    if (buffers[i].numberOfChannels > maxChannels) {
      maxChannels = buffers[i].numberOfChannels;
    }
    if (buffers[i].duration > maxDuration) {
      maxDuration = buffers[i].duration;
    }
  }
  var out = ac.createBuffer(maxChannels,
                                 ac.sampleRate * maxDuration,
                                 ac.sampleRate);

  for (var j = 0; j < buffers.length; j++) {
    for (var srcChannel = 0; srcChannel < buffers[j].numberOfChannels; srcChannel++) {
      var outt = out.getChannelData(srcChannel);
      var inn = buffers[j].getChannelData(srcChannel);
      for (var i = 0; i < inn.length; i++) {
        outt[i] += inn[i];
      }
      out.getChannelData(srcChannel).set(outt, 0);
    }
  }
  return out;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WindowManager = __webpack_require__(44);
var ProjectListView = __webpack_require__(13);
var TrackListView = __webpack_require__(14);

var ProjectListController = __webpack_require__(41);
var ProjectController = __webpack_require__(40);
var TrackController = __webpack_require__(42);

var ProjectListModel = __webpack_require__(43);

var TrackView = __webpack_require__(15);

var Observer = __webpack_require__(12);

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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var counterUID = 0;

module.exports = function(){
    return ++counterUID;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(7);
var ProjectModel = __webpack_require__(34);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = AudioPlayer;

function AudioPlayer(model){
    this.model = null;

    this.projectPlayer = null;
    this.recorder = null;

    this.setModel(model);
}

AudioPlayer.prototype.setModel = function(model){
    if(model){
        console.log("new model");
        console.log(model);
        this.model = model;
    }
};

AudioPlayer.prototype.play = function(){
    if(this.model instanceof BaseTrackModel){
        console.log("play");
        console.log(this.model);
        this.model.play();
        windowsTransport.notify(commonEventNames.E_PLAY_WAVE);
    } else if(this.model instanceof ProjectModel){
        console.log("? ? ?");
        windowsTransport.notify(commonEventNames.E_PLAY_PROJECT, this);
    }
};

AudioPlayer.prototype.createPlayer = function(buffer){
    var self = this;
    this.projectPlayer = new Tone.Player(buffer).toMaster();
    this.projectPlayer.start();
    windowsTransport.subscribe(commonEventNames.E_STOP_PROJECT, function(){
        self.projectPlayer.stop();
    });
};

AudioPlayer.prototype.stop = function(){
    if(this.model instanceof BaseTrackModel){
        this.model.stop();
    } else if(this.model instanceof ProjectModel){
        windowsTransport.notify(commonEventNames.E_STOP_PROJECT);
    }
    windowsTransport.notify(commonEventNames.E_STOP_WAVE);
};


/***/ }),
/* 51 */
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

BaseModel.prototype.get = function(){
    return this.__data;
};

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = BaseNote;

function BaseNote(value){
    this.value = value;
}

BaseNote.prototype.getValue = function(){
    return this.value;
};

BaseNote.prototype.setValue = function(value){
    this.value = value;
};



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MetalSynthModel = __webpack_require__(63);
var inherit = __webpack_require__(0);

module.exports = Bell;

function Bell(){
    MetalSynthModel.call(this);
    this.playValue = 4;
    this.setSetting();
}

inherit(Bell, MetalSynthModel);

Bell.prototype.setSetting = function(){
    if(this.setting.envelope === undefined){
        this.setting.envelope = {};
    }
    this.setting.volume = -10;
    this.setting.resonance = 800;
    this.setting.harmonicity = 12;
    this.setting.modulationIndex = 20;
    this.setting.envelope.decay = 0.4;
};

Bell.prototype.setInstrument = function(){
    this.instrument = "bell";
};



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MembraneModel = __webpack_require__(9);
var inherit = __webpack_require__(0);

module.exports = BigTom;

function BigTom(){
    MembraneModel.call(this);
    this.playValue = "E1";
    this.setSetting();
}

inherit(BigTom, MembraneModel);

BigTom.prototype.setSetting = function(){
    if(this.setting.oscillator === undefined){
        this.setting.oscillator = {};
    }
    if(this.setting.envelope === undefined){
        this.setting.envelope = {};
    }
    this.setting.pitchDecay = 0.9;
    this.setting.octaves = 3;
    this.setting.oscillator.type = "sine";
    this.setting.envelope.attack = 0.001;
    this.setting.envelope.decay = 1;
    this.setting.envelope.release = 0.8;
    this.setting.envelope.attackCurve = "exponential";
};

BigTom.prototype.setInstrument = function(){
    this.instrument = "big-tom";
};




/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//CrusherFilter

var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(6);

module.exports = CrusherFilter;

function CrusherFilter(options){
    BaseFilterModel.call(this, options);
}

inherit(CrusherFilter, BaseFilterModel);

CrusherFilter.prototype.generate = function(){
    this.filter = new Tone.BitCrusher(this.options);
};

CrusherFilter.prototype.getBit = function(){
    return this.filter.bits;
};

CrusherFilter.prototype.getOptions = function(){
    return this.options;
};

CrusherFilter.prototype.setBit = function(value){
    this.options.bits = value;
    this.filter.bits = value;
};

CrusherFilter.prototype.setOptions = function(options){
    this.setBit(options.bits);
};

CrusherFilter.prototype.setByName = function(optionName, value){
    switch(optionName){
        case "bits":
            this.setBit(value);
            break;
    }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = new DrumModel;

function DrumModel(){
    this.kickLeft = "kick-left";
    this.kickRight = "kick-right";
    this.bigTom = "big-tom";
    this.leftTom = "left-tom";
    this.bell = "bell";
    this.hiHat = "hi-hat";
    this.snare = "snare";
    this.hitHat1 = null;
    this.hitHat2 = null;
    this.hitHat3 = null;
    //this.keys = ['B', 'N', 'F', 'G', 'H', 'J', 'K', 'E', 'R', 'I'];
    this.keys = [['B', 'N'], ['F', 'G'], ['H', 'J'], ['T', 'Y']];
    this.images = ["/static/images/kick.png", "/static/images/tom.png",
                   "/static/images/snare.png", "/static/images/hi-hat.png"];
    this.popupText = ["Kick (big drum) - percussive low-register musical instrument, " +
                      "a membrane speaker with an undefined pitch of sound.",
                      "Tom-tom (tom) - is a cylindrical drum with no snares.",
                      "Snare - is a percussion instrument that produces a sharp staccato sound, " +
                      "when the head is struck with a drum stick.",
                      "Hi-hat - is a combination of two cymbals, a foot-operated pedal."];
}

DrumModel.prototype.getDrumNameForKey = function(key){
    var result = null;
    switch(key){
        case 'B': result = this.kickLeft; break;
        case 'N': result = this.kickRight; break;
        case 'F': result = this.bigTom; break;
        case 'G': result = this.leftTom; break;
        case 'H': result = this.snare; break;
        case 'J': result = this.snare1; break;
        case 'T': result = this.bell; break;
        case 'Y': result = this.hiHat; break;
        default: console.log("wrong key: " + key); break;
    }
    return result;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseOptionList = __webpack_require__(18);
var BaseRange = __webpack_require__(19);
var BaseTrackSetting = __webpack_require__(29);
var TrackSettingsSet = __webpack_require__(36);

module.exports = new TrackSettingsSet([
    new BaseTrackSetting("tremolo", false, {
        "frequency": new BaseRange(0, 0, 1000, 1),
        "depth": new BaseRange(0, 0, 1, 0.01),
        "spread": new BaseRange(0, 0, 360, 1),
        "type": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("vibrato", false, {
        "frequency": new BaseRange(0, 0, 1000, 1),
        "depth": new BaseRange(0, 0, 1, 0.01),
        "type": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("crusher", false, {
        "bits": new BaseRange(4, 1, 8, 1)
    }),
    new BaseTrackSetting("phaser", false, {
        "octaves": new BaseRange(1, 0, 100, 0.01),
        "frequency": new BaseRange(0, 0, 1, 0.1)
        //"wet": new BaseRange(0, 0, 1, 0.1)
    }),
    new BaseTrackSetting("freeverb", false, {
        "dampening": new BaseRange(1, 0, 3000, 1),
        "roomSize": new BaseRange(0, 0, 0.7, 0.1)
        //"wet": new BaseRange(0, 0, 1, 0.1)
    })
]);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(6);

module.exports = FreeverbFilter;

function FreeverbFilter(options){
    BaseFilterModel.call(this, options);
}

inherit(FreeverbFilter, BaseFilterModel);

FreeverbFilter.prototype.generate = function(){
    this.filter = new Tone.Freeverb(this.options);
};

FreeverbFilter.prototype.getDampening = function(){
    return this.filter.dampening.value;
};

FreeverbFilter.prototype.getRoomSize = function(){
    return this.filter.roomSize.value;
};

FreeverbFilter.prototype.getWet = function(){
    return this.filter.wet.value;
};

FreeverbFilter.prototype.getOptions = function(){
    return this.options;
};

FreeverbFilter.prototype.setDampening = function(value){
    this.options.dampening = value;
    this.filter.dampening.value = value;
};

FreeverbFilter.prototype.setRoomSize = function(value){
    this.options.roomSize = value;
    this.filter.roomSize.value = value;
};

FreeverbFilter.prototype.setWet = function(value){
    this.options.wet = value;
    this.filter.wet.value = value;
};

FreeverbFilter.prototype.setOptions = function(options){
    this.setDampening(options.dampening);
    this.setRoomSize(options.roomSize);
    this.setWet(options.wet);
};

FreeverbFilter.prototype.setByName = function(optionName, value){
    switch(optionName){
        case "dampening":
            this.setDampening(value);
            break;
        case "roomSize":
            this.setRoomSize(value);
            break;
    }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlayerModel = __webpack_require__(33);
var inherit = __webpack_require__(0);

module.exports = HiHatPlayer;

function HiHatPlayer(playSetting){
    PlayerModel.call(this, "/static/audio/hho.mp3", playSetting);
}

inherit(HiHatPlayer, PlayerModel);

HiHatPlayer.prototype.setInstrument = function(){
    this.instrument = "hi-hat";
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MembraneModel = __webpack_require__(9);
var inherit = __webpack_require__(0);

module.exports = KickLeft;

function KickLeft(){
    MembraneModel.call(this);
    this.playValue = "E1";
    this.setSetting();
}

inherit(KickLeft, MembraneModel);

KickLeft.prototype.setSetting = function(){
    if(this.setting.oscillator === undefined){
        this.setting.oscillator = {};
    }
    if(this.setting.envelope === undefined){
        this.setting.envelope = {};
    }
    this.setting.pitchDecay = 0.06;
    this.setting.octaves = 6;
    this.setting.oscillator.type = "sine";
    this.setting.envelope.attack = 0.05;
    this.setting.envelope.decay = 0.3;
    this.setting.envelope.sustain = 0;
    this.setting.envelope.release = 1.4;
    this.setting.envelope.attackCurve = "exponential";
};

KickLeft.prototype.setInstrument = function(){
    this.instrument = "kick-left";
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MembraneModel = __webpack_require__(9);
var inherit = __webpack_require__(0);

module.exports = KickRight;

function KickRight(){
    MembraneModel.call(this);
    this.playValue = "C2";
    this.setSetting();
}

inherit(KickRight, MembraneModel);

KickRight.prototype.setSetting = function(){
    if(this.setting.oscillator === undefined){
        this.setting.oscillator = {};
    }
    if(this.setting.envelope === undefined){
        this.setting.envelope = {};
    }
    this.setting.pitchDecay = 0.1;
    this.setting.octaves = 10;
    this.setting.oscillator.type = "sine";
    this.setting.envelope.attack = 0.02;
    this.setting.envelope.decay = 0.6;
    this.setting.envelope.sustain = 0;
};

KickRight.prototype.setInstrument = function(){
    this.instrument = "kick-right";
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MembraneModel = __webpack_require__(9);
var inherit = __webpack_require__(0);

module.exports = LeftTom;

function LeftTom(){
    MembraneModel.call(this);
    this.playValue = "E1";
    this.setSetting();
}

inherit(LeftTom, MembraneModel);

LeftTom.prototype.setSetting = function(){
    if(this.setting.oscillator === undefined){
        this.setting.oscillator = {};
    }
    if(this.setting.envelope === undefined){
        this.setting.envelope = {};
    }
    this.setting.pitchDecay = 0.01;
    this.setting.octaves = 3;
    this.setting.oscillator.type = "sine";
    this.setting.envelope.attack = 0.001;
};

LeftTom.prototype.setInstrument = function(){
    this.instrument = "left-tom";
};





/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseDrumModel = __webpack_require__(27);
var inherit = __webpack_require__(0);

module.exports = MetalSynthModel;

function MetalSynthModel(playSetting){
    BaseDrumModel.call(this, playSetting);
}

inherit(MetalSynthModel, BaseDrumModel);

MetalSynthModel.prototype._generate = function(){
    return new Tone.MetalSynth(this.setting).toMaster();
};

MetalSynthModel.prototype.stop = function(){
    this.trackObject.triggerRelease();
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//PhaserFilter

var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(6);

module.exports = PhaserFilter;

function PhaserFilter(options){
    BaseFilterModel.call(this, options);
}

inherit(PhaserFilter, BaseFilterModel);

PhaserFilter.prototype.generate = function(){
    this.filter = new Tone.Phaser(this.options);
};

PhaserFilter.prototype.getFrequency = function(){
    return this.filter.frequency.value;
};

PhaserFilter.prototype.getOctaves = function(){
    return this.filter.octaves.value;
};

PhaserFilter.prototype.getWet = function(){
    return this.filter.wet.value;
};

PhaserFilter.prototype.getOptions = function(){
    return this.options;
};

PhaserFilter.prototype.setFrequency = function(value){
    this.options.frequency = value;
    this.filter.frequency.value = value;
};

PhaserFilter.prototype.setOctaves = function(value){
    this.options.octaves = value;
    this.filter.octaves.value = value;
};

PhaserFilter.prototype.setWet = function(value){
    this.options.wet = value;
    this.filter.wet.value = value;
};

PhaserFilter.prototype.setOptions = function(options){
    this.setFrequency(options.frequency);
    this.setOctaves(options.octaves);
    this.setWet(options.wet);
};

PhaserFilter.prototype.setByName = function(optionName, value){
    switch(optionName){
        case "frequency":
            this.setFrequency(value);
            break;
        case "octaves":
            this.getOctaves(value);
            break;
    }
};



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PianoNote = __webpack_require__(66);

module.exports = new PianoModel;

function PianoModel(){
    this.notes = [
        new PianoNote("C1", ["C1", "С4"], "C1"),
        new PianoNote("C#1", ["C#1", "С#4"], "C#1"),
        new PianoNote("D1", ["D1", "D4"], "D1"),
        new PianoNote("D#1", ["D#1", "D#4"], "D#1"),
        new PianoNote("E1", ["E1", "E4"], "E1"),
        new PianoNote("F1", ["F1", "F4"], "F1"),
        new PianoNote("F#1", ["F#1", "F#4"], "F#1"),
        new PianoNote("G1", ["G1", "G4"], "G1"),
        new PianoNote("G#1", ["G#1", "G#4"], "G#1"),
        new PianoNote("A1", ["A1", "A4"], "A1"),
        new PianoNote("A#1", ["A#1", "A#4"], "A#1"),
        new PianoNote("B1", ["B1", "B4"], "B1"),

        new PianoNote("C2", ["C2", "С5"], "C2"),
        new PianoNote("C#2", ["C#2", "С#5"], "C#2"),
        new PianoNote("D2", ["D2", "D5"], "D2"),
        new PianoNote("D#2", ["D#2", "D#5"], "D#2"),
        new PianoNote("E2", ["E2", "E5"], "E2"),
        new PianoNote("F2", ["F2", "F5"], "F2"),
        new PianoNote("F#2", ["F#2", "F#5"], "F#2"),
        new PianoNote("G2", ["G2", "G5"], "G2"),
        new PianoNote("G#2", ["G#2", "G#5"], "G#2"),
        new PianoNote("A2", ["A2", "A5"], "A2"),
        new PianoNote("A#2", ["A#2", "A#5"], "A#2"),
        new PianoNote("B2", ["B2", "B5"], "B2"),


        new PianoNote("C3", ["C3", "С6"], "C3"),
        new PianoNote("C#3", ["C#3", "С#6"], "C#3"),
        new PianoNote("D3", ["D3", "D6"], "D3"),
        new PianoNote("D#3", ["D#3", "D#6"], "D#3"),
        new PianoNote("E3", ["E3", "E6"], "E3"),
        new PianoNote("F3", ["F3", "F6"], "F3"),
        new PianoNote("F#3", ["F#3", "F#6"], "F#3"),
        new PianoNote("G3", ["G3", "G6"], "G3"),
        new PianoNote("G#3", ["G#3", "G#6"], "G#3"),
        new PianoNote("A3", ["A3", "A6"], "A3"),
        new PianoNote("A#3", ["A#3", "A#6"], "A#3"),
        new PianoNote("B3", ["B3", "B6"], "B3")
    ];
    this.keyList = ['W', '0', 'R', '1', 'Y', 'I', '2', 'P', '3', 'A', '4', 'S', 'D', '5', 'F', '6', 'G', 'H',
                    '7', 'J', '8', 'K', '9', 'L', 'Z', 'Q', 'X', 'E', 'C', 'V', 'T', 'B', 'U', 'N', 'O', 'M']
}

PianoModel.prototype.getNoteForKey = function(key){
    var result = null;
    //switch(String.fromCharCode(keyCode)){
    switch(key){
        case '0': result = this.__findNoteByDefaultValue("C#1"); break;
        case '1': result = this.__findNoteByDefaultValue("D#1"); break;
        case '2': result = this.__findNoteByDefaultValue("F#1"); break;
        case '3': result = this.__findNoteByDefaultValue("G#1"); break;
        case '4': result = this.__findNoteByDefaultValue("A#1"); break;
        case '5': result = this.__findNoteByDefaultValue("C#2"); break;
        case '6': result = this.__findNoteByDefaultValue("D#2"); break;
        case '7': result = this.__findNoteByDefaultValue("F#2"); break;
        case '8': result = this.__findNoteByDefaultValue("G#2"); break;
        case '9': result = this.__findNoteByDefaultValue("A#2"); break;
        case 'Q': result = this.__findNoteByDefaultValue("C#3"); break;
        case 'E': result = this.__findNoteByDefaultValue("D#3"); break;
        case 'T': result = this.__findNoteByDefaultValue("F#3"); break;
        case 'U': result = this.__findNoteByDefaultValue("G#3"); break;
        case 'O': result = this.__findNoteByDefaultValue("A#3"); break;

        case 'W': result = this.__findNoteByDefaultValue("C1"); break;
        case 'R': result = this.__findNoteByDefaultValue("D2"); break;
        case 'Y': result = this.__findNoteByDefaultValue("E1"); break;
        case 'I': result = this.__findNoteByDefaultValue("F1"); break;
        case 'P': result = this.__findNoteByDefaultValue("G1"); break;
        case 'A': result = this.__findNoteByDefaultValue("A1"); break;
        case 'S': result = this.__findNoteByDefaultValue("B1"); break;
        case 'D': result = this.__findNoteByDefaultValue("C2"); break;
        case 'F': result = this.__findNoteByDefaultValue("D2"); break;
        case 'G': result = this.__findNoteByDefaultValue("E2"); break;
        case 'H': result = this.__findNoteByDefaultValue("F2"); break;
        case 'J': result = this.__findNoteByDefaultValue("G2"); break;
        case 'K': result = this.__findNoteByDefaultValue("A2"); break;
        case 'L': result = this.__findNoteByDefaultValue("B2"); break;
        case 'Z': result = this.__findNoteByDefaultValue("C3"); break;
        case 'X': result = this.__findNoteByDefaultValue("D3"); break;
        case 'C': result = this.__findNoteByDefaultValue("E3"); break;
        case 'V': result = this.__findNoteByDefaultValue("F3"); break;
        case 'B': result = this.__findNoteByDefaultValue("G3"); break;
        case 'N': result = this.__findNoteByDefaultValue("A3"); break;
        case 'M': result = this.__findNoteByDefaultValue("B3"); break;
        default: console.log("wrong key: " + key); break;
    }
    return result;
};

PianoModel.prototype.__findNoteByValue = function(value){
    var i;
    for (i = 0; i < this.notes.length; ++i){
        if(this.notes[i].value === value){
            return this.notes[i];
        }
    }
    return null;
};

PianoModel.prototype.__findNoteByDefaultValue = function(value){
    var i;
    for (i = 0; i < this.notes.length; ++i){
        if(this.notes[i].defaultValue === value){
            return this.notes[i];
        }
    }
    return null;
};

PianoModel.prototype.shift = function(shiftIndex){
    var i;
    for(i = 0; i < this.notes.length; ++i){
        if(shiftIndex >= 0 && shiftIndex < this.notes[i].additionalValue.length)
        this.notes[i].setValueFromAdditional(shiftIndex);
    }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseNote = __webpack_require__(52);

module.exports = PianoNote;

function PianoNote(defaultValue, additionalValue, value){
    BaseNote.call(this, value);
    this.additionalValue = additionalValue || [];
    this.defaultValue = defaultValue;
    this.__isBlack = defaultValue.indexOf('#') > -1;
}

inherit(PianoNote, BaseNote);

PianoNote.prototype.isBlack = function(){
    return this.__isBlack;
};

PianoNote.prototype.setValueFromAdditional = function(index){
    var value = this.additionalValue[index];
    if(value){
        this.setValue(value);
    }
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FreeverbFilter = __webpack_require__(58);
var CrusherFilter = __webpack_require__(55);
var PhaserFilter = __webpack_require__(64);
var VibratoFilter = __webpack_require__(74);
var TremoloFilter = __webpack_require__(73);

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
            this.filterObjects[filterName] = new TremoloFilter(filterSetting);
            break;
        case "vibrato":
            this.filterObjects[filterName] = new VibratoFilter(filterSetting);
            break;
        case "crusher":
            this.filterObjects[filterName] = new CrusherFilter(filterSetting);
            break;
        case "phaser":
            this.filterObjects[filterName] = new PhaserFilter(filterSetting);
            break;
        case "freeverb":
            this.filterObjects[filterName] = new FreeverbFilter(filterSetting);
            break;
    }
};

PostSettings.prototype.getFilterModel = function(filterName){
    var result = null;
    if(filterName in this.filterObjects){
        result = this.filterObjects[filterName];
    }
    return result;
};

/**
 * Apply filter to track from track model
 * @param filterName - String
 * @param trackModel - BaseTrackModel
 */
PostSettings.prototype.setToTrack = function(filterName, trackModel){
    var filter = this.getFilterModel(filterName);
    if(filter !== null){
        //trackModel.disconnectFromAudioSource();
        if(trackModel.applyFilter === null) {
            filter.applyToTrack(trackModel.trackObject);
        } else{
            trackModel.applyFilter(filter);
        }
    }
};

PostSettings.prototype.removeFromTrack = function(filterName, trackModel){
    var filter = this.getFilterModel(filterName);
    if(filter !== null){
        if(trackModel.removeFilter === null) {
            filter.disconnectFilter(trackModel.trackObject);
        } else{
            trackModel.removeFilter(filter);
        }
    }
};

/**
 * Create list of filter objects with settings from server.
 * Call when init PostSettings.
 */
PostSettings.prototype.fullFilterObjects = function(){
    var filterName;
    for(filterName in this.postSettings){
        this.createFilterObjects(filterName, this.postSettings[filterName]);
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
    var tokenSetting;
    var list = filterList.list;
    for(i = 0; i < list.length; ++i){
        tokenSetting = list[i];
        this.setFilter(tokenSetting);
    }
};

/**
 * Add or delete filter from filterObjects
 * @param filter
 */
PostSettings.prototype.setFilter = function(filter){
    var name = filter.name;
    if(name in this.filterObjects){
        if(filter.isEnabled === true){
            // update existing filter
            this.filterObjects[name].setOptions(filter.valueOf());
        } else{
            //delete no using filter in track
            delete this.filterObjects[name];
        }
    } else{
        //create new filter
        if(filter.isEnabled === true){
            this.createFilterObjects(name, filter.valueOf());
        }
    }
};

PostSettings.prototype.setValueToFilter = function(filterName, optionName, value){
    var filter;
    if(filterName in this.filterObjects){
        filter = this.filterObjects[filterName];
        if(optionName in filter.options){
            filter.setByName(optionName, value);
        }
    }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioBufferRecorder = __webpack_require__(17);
var DrumAudioBufferRecorder = __webpack_require__(30);
var TrackDrum = __webpack_require__(23);
var TrackManager = __webpack_require__(11);

module.exports = ProjectRecorder;

function ProjectRecorder(projectModel){
    this.projectModel = projectModel;
    this.models = this.projectModel.__data;
    console.log(this.models);
    this.recorders = [];
    this.buffers = [];
}

ProjectRecorder.prototype.setModel = function(model){
    if(model){
        this.projectModel = model;
        this.models = this.projectModel.__data;
    }
};

ProjectRecorder.prototype.createRecord = function(callback){
    var i, model, recorder;
    for(i = 0; i < this.models.length; ++i){
        model = this.models[i];
        if(model instanceof TrackDrum){
            recorder = new DrumAudioBufferRecorder();
            recorder.setModel(model);
        } else{
            recorder = new AudioBufferRecorder();
            recorder.setModel(model);
        }
        recorder.record(callback);
    }
};

ProjectRecorder.prototype.saveBuffers = function(buffer){
    var result;
    this.buffers.push(buffer);
    if(this.buffers.length === this.models.length){
        result = TrackManager.mergeTracks(this.buffers);
        console.log("project");
        console.log(result);
        TrackManager.save(result);
    }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseOptionList = __webpack_require__(18);
var BaseRange = __webpack_require__(19);
var BaseTrackSetting = __webpack_require__(29);
var TrackSettingsSet = __webpack_require__(36);

module.exports = new TrackSettingsSet([
    new BaseTrackSetting("type", false, {
        "value": new BaseOptionList({
            "sine": 1,
            "square": 2,
            "triangle": 3,
            "sawtooth": 4
        }, 1)
    }),
    new BaseTrackSetting("volume", false, {
        "value": new BaseRange(0, -50, 50, 0.5)
    }),
    new BaseTrackSetting("frequency", false, {
        "value": new BaseRange(440, 0, 1000, 1)
    }),
    new BaseTrackSetting("attack", false, {
        "value": new BaseRange(0.05, 0, 10, 0.001)
    }),
    new BaseTrackSetting("decay", false, {
        "value": new BaseRange(0.2, 0, 10, 0.001)
    }),
    new BaseTrackSetting("sustain", false, {
        "value": new BaseRange(0.2, 0, 10, 0.001)
    }),
    new BaseTrackSetting("release", false, {
        "value": new BaseRange(1.5, 0, 10, 0.001)
    })
]);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlayerModel = __webpack_require__(33);
var inherit = __webpack_require__(0);

module.exports = SnarePlayer;

function SnarePlayer(playSetting){
    PlayerModel.call(this, "/static/audio/snare.mp3", playSetting);
}

inherit(SnarePlayer, PlayerModel);

SnarePlayer.prototype.setInstrument = function(){
    this.instrument = "snare";
};



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(7);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseTrackModel = __webpack_require__(7);
var inherit = __webpack_require__(0);
var MixerRecorder = __webpack_require__(31);

module.exports = TrackOscillator;

// @param {String} name
// @param {Object} source
function TrackOscillator(id, data){
    BaseTrackModel.call(this, id, data);
}

inherit(TrackOscillator, BaseTrackModel);

TrackOscillator.prototype._generate = function(){
    return new Tone.Oscillator(this.setting).toMaster();
};

TrackOscillator.prototype.getFrequency = function(){
    return this.trackObject ? this.trackObject.frequency.value : null;
};

TrackOscillator.prototype.setFrequency = function(value){
    this.trackObject.frequency.value = value;
};

TrackOscillator.prototype.createPlayObjects = function(){
    var i, tokenPlaySetting;
    for(i = 0; i < this.playSetting.length; ++i){
        tokenPlaySetting = this.playSetting[i];
        this.playObjects.push(new MixerRecorder(tokenPlaySetting.frequency, tokenPlaySetting.volume,
                                                tokenPlaySetting.startTime));
    }
};

TrackOscillator.prototype.play = function(){
    var i;
    for(i =0; i < this.playObjects.length; ++i){
        this.playObjects[i].play(this.trackObject);
    }
    this.trackObject.stop();
};

TrackOscillator.prototype.stop = function(){
    this.trackObject.stop();
};

TrackOscillator.prototype.setSetting = function(){
    if(this.trackObject){
        if(this.setting === undefined){
            this.setting = {};
        }
        this.setting.type = this.getType();
    }
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(6);

module.exports = TremoloFilter;

function TremoloFilter(options){
    BaseFilterModel.call(this, options);
}

inherit(TremoloFilter, BaseFilterModel);

TremoloFilter.prototype.generate = function(){
    this.filter = new Tone.Tremolo(this.options);
};

TremoloFilter.prototype.getFrequency = function(){
    return this.filter.frequency.value;
};

TremoloFilter.prototype.getDepth = function(){
    return this.filter.depth.value;
};

TremoloFilter.prototype.getSpread = function(){
    return this.filter.spread;
};

TremoloFilter.prototype.getType = function(){
    return this.filter.type;
};

TremoloFilter.prototype.getOptions = function(){
    return this.options;
};

TremoloFilter.prototype.setFrequency = function(value){
    this.options.frequency = value;
    this.filter.frequency.value = value;
};

TremoloFilter.prototype.setDepth = function(value){
    this.options.depth = value;
    this.filter.depth.value = value;
};

TremoloFilter.prototype.setSpread = function(value){
    this.options.spread = value;
    this.filter.spread = value;
};

TremoloFilter.prototype.setType = function(value){
    this.options.type = value;
    this.filter.type = value;
};

TremoloFilter.prototype.setOptions = function(options){
    this.setFrequency(options.frequency);
    this.setDepth(options.depth);
    this.setSpread(options.spread);
    this.setType(options.type);
};

TremoloFilter.prototype.setByName = function(optionName, value){
    switch(optionName){
        case "frequency":
            this.setFrequency(value);
            break;
        case "depth":
            this.setDepth(value);
            break;
        case "spread":
            this.setSpread(value);
            break;
        case "type":
            this.setType(value);
            break;
    }
};




/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseFilterModel = __webpack_require__(6);

module.exports = VibratoFilter;

function VibratoFilter(options){
    BaseFilterModel.call(this, options);
}

inherit(VibratoFilter, BaseFilterModel);

VibratoFilter.prototype.generate = function(){
    this.filter = new Tone.Vibrato(this.options);
};

VibratoFilter.prototype.getFrequency = function(){
    return this.filter.frequency.value;
};

VibratoFilter.prototype.getDepth = function(){
    return this.filter.depth.value;
};

VibratoFilter.prototype.getType = function(){
    return this.filter.type;
};

VibratoFilter.prototype.getOptions = function(){
    return this.options;
};

VibratoFilter.prototype.setFrequency = function(value){
    this.options.frequency = value;
    this.filter.frequency.value = value;
};

VibratoFilter.prototype.setDepth = function(value){
    this.options.depth = value;
    this.filter.depth.value = value;
};

VibratoFilter.prototype.setType = function(value){
    this.options.type = value;
    this.filter.type = value;
};

VibratoFilter.prototype.setOptions = function(options){
    this.setFrequency(options.frequency);
    this.setDepth(options.depth);
    this.setType(options.type);
};

VibratoFilter.prototype.setByName = function(optionName, value){
    switch(optionName){
        case "frequency":
            this.setFrequency(value);
            break;
        case "depth":
            this.setDepth(value);
            break;
        case "type":
            this.setType(value);
            break;
    }
};



/***/ }),
/* 75 */
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json");


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "binary");


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "user/");


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "projects/");


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(value, min, max){
    if(value > max){
        value = max;
    } else if(value < min){
        value = min;
    }
    return value;
};


/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = CoordMap;

function CoordMap(){
    this.map = $("<div class='coord-map'>");
}

CoordMap.prototype.getY = function(y){
    var newCoord = 0;
    var newHeight = getEven(this.map.height());
    var center = newHeight / 2;
    if(y === center){
        // begin coord
        newCoord = 0;
    } else if(y === 0){
        // max coord
        newCoord = center;
    } else if(y < center && y > 0){
        // positive
        // new coord for positive part is just division of center and y
        newCoord = getNewCoord(y, center);
    } else if(y > center && y <= newHeight){
        // convert to negative
        newCoord = (center - getNewCoord(y, newHeight)) * (-1);
    }
    return newCoord;
};

CoordMap.prototype.getX = function(x){
    var newCoord = 0;
    var newWidth = getEven(this.map.width());
    var center = newWidth / 2;
    if(x === center){
        // begin coord
        newCoord = 0;
    } else if(x === 0){
        // max coord
        newCoord = newWidth / -2;
    } else if(x < center && x > 0){
        // convert to negative
        newCoord = getNewCoord(x, center) * (-1);
    } else if(x > center && x <= newWidth){
        // positive
        newCoord = center - getNewCoord(x, newWidth);
        console.log(newCoord);
    }
    return newCoord;
};

function getNewCoord(coord, limit){
    return limit - coord
}

function getEven(number){
    var evenNumber = number;
    if(number % 2 !== 0){
        evenNumber = number - 1;
    }
    return evenNumber;
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var DrumRecorder = __webpack_require__(20);
var DrumModel = __webpack_require__(56);
var BaseInstrument = __webpack_require__(25);

module.exports = DrumMachine;

function DrumMachine(track){
    BaseInstrument.call(this, track, "drum-machine");

    this.drumGrid = null;

    this._build();
}

inherit(DrumMachine, BaseInstrument);

DrumMachine.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    this.createDrumGrid(DrumModel.images, DrumModel.keys, DrumModel.popupText);

    container.append(this.drumGrid);
};

DrumMachine.prototype._recordHandler = function(drumObject){
    this.track.addDrum(drumObject.instrument);
    if(this.track.playObjects.length === 0){
        this.startTime = Date.now();
        // this is the first button pressed, so it's time to remember the start time!
        //this.track.playObjects.push(new DrumRecorder(drumObject.instrument, drumObject.playValue, 0));
        this.track.createPlayObject(drumObject, 0);
    } else{
        //this.track.playObjects.push(new DrumRecorder(drumObject.instrument, drumObject.playValue, Date.now()-this.startTime));
        this.track.createPlayObject(drumObject, Date.now()-this.startTime);
    }
};

DrumMachine.prototype._keyDownHandler = function(key){
    var drumObject = null;
    var drumName = DrumModel.getDrumNameForKey(key);
    if(drumName !== null){
        if(this.track){
            drumObject = this.track.allDrumObjects[drumName];
            drumObject.playNow();
            if (this.isRecordNow === true) {
                this._recordHandler(drumObject);
            }
        }
    }
};

DrumMachine.prototype.keyDown = function(){
    var key;
    var self = this;
    $(document).keydown(function(event){
        key = String.fromCharCode(event.keyCode);
        self._keyDownHandler(key);
    });
};

DrumMachine.prototype.createDrumGrid = function(imagePathList, keyList, drumExploring){
    var i, j, key;
    var self = this;
    var $img = null;
    var $keys = null;
    var $column = null;
    var $keyItem = null;
    this.drumGrid = $("<div class='ui two column grid drum'>");
    for(i = 0; i < imagePathList.length; ++i){
        $img = $("<img class='ui small image' src='" + imagePathList[i] + "' " +
                 "data-content='" + drumExploring[i] + "'>");
        $img.popup();
        $keys = $("<div class='keys'>");
        for(j = 0; j < keyList[i].length; ++j){
            key = keyList[i][j];
            $keyItem = $("<div id='" + key + "' " +
                         "data-content='Click or press key " + key + " for play'>"
                         + key + "</div>");
            $keyItem.on("click", function(event){
                self._keyDownHandler($(this).attr("id"));
            });
            $keyItem.popup();
            $keys.append($keyItem);
        }
        $column = $("<div class='column'>");
        $column.append($keys);
        $column.append($img);
        this.drumGrid.append($column);
    }
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var ToolView = __webpack_require__(39);
var FiltersList = __webpack_require__(57);
var ProxyTrackManager = __webpack_require__(35);
var Factory = __webpack_require__(4);

module.exports = FilterView;

function FilterView(track){
    ToolView.call(this, "filter-view", "two column stackable ui grid filter");

    this.track = null;
    this.filter = null;

    this.setFilter(track);

    this._build();
    this.show();
}

inherit(FilterView, ToolView);

FilterView.prototype.resetToolOptions = function(){
    ProxyTrackManager.resetFilters(FiltersList);
};

FilterView.prototype.setFilter = function(track){
    if(track){
        this.track = track;
        this.filter = track.postSettings;
        // set filters settings from sound for to view on form
        ProxyTrackManager.updateFilterListFromFilter(FiltersList, this.filter.getPostSettings());
        this.createFilterColumns();
    }
};

FilterView.prototype.setEvent = function(optionName, value){
    ProxyTrackManager.setFilter(FiltersList, this.filter, optionName, value);
};

/**
 * Full div with filter setting of rangeElement || dropDownElement
 */
FilterView.prototype.createFilterSettingElements = function(mainBlock, options){
    var value;
    var optionName;
    var $element;
    var $elementName;
    for(optionName in options){
        value = options[optionName]; // BaseOption
        $elementName = $("<label>" + optionName + "</label>");
        $element = this.createElement(optionName, optionName, value);
        mainBlock.append($elementName);
        mainBlock.append($element);
    }
};

/**
 * Create block (one column) with some filters
 * @param count
 * @param startValue
 * @returns {*|jQuery|HTMLElement}
 */
FilterView.prototype.createFilterTools = function(count, startValue){
    var i = startValue || 0;
    var options;
    var filterName;
    var tokenFilter;
    var $mainDiv;
    var $checkBox;
    var $settingDiv;
    var $result = $("<div class='column'>");
    for(i; i < count; ++i){
        tokenFilter = FiltersList.list[i];
        options = tokenFilter.options;
        filterName = tokenFilter.name;
        // create main div for checkbox component and div with settings
        $mainDiv = $("<div class='item-" + filterName + "'>");
        $settingDiv = $("<div class='filter-setting-" + filterName + "'>");
        // create widgets for settings
        this.createFilterSettingElements($settingDiv, options);
        if(tokenFilter.isEnabled === true){
            $settingDiv.show();
            // apply filter to sound right away
            this.filter.setToTrack(filterName, this.track);
        } else {
            $settingDiv.hide();
        }
        $checkBox = Factory.createCheckBox(filterName, filterName, filterName, checkEvent.bind(this),
                                           uncheckEvent.bind(this), tokenFilter.isEnabled);
        $mainDiv.append($checkBox);
        $mainDiv.append($settingDiv);
        $result.append($mainDiv);
    }
    return $result;
};

/**
 * Create table with two columns.
 * Each columns contain div with filter settings elements
 */
FilterView.prototype.createFilterColumns = function(){
    var $column1;
    var $column2;
    var elCountFirstCol = Math.ceil(FiltersList.list.length / 2);
    $column1 = this.createFilterTools(elCountFirstCol);
    $column2 = this.createFilterTools(FiltersList.list.length, elCountFirstCol);
    this.table.append($column1);
    this.table.append($column2);
};

/**
 * Show and apply filter to view and to track
 * @param filterName
 * @param isChecked
 */
function checkEvent(filterName, isChecked){
    this.table.find(".filter-setting-" + filterName).show();
    ProxyTrackManager.addFilter(FiltersList, this.filter, filterName, isChecked);
    // apply filter to sound
    this.filter.setToTrack(filterName, this.track);
}

/**
 * Hide and disconnect filter from view and track
 * @param filterName
 * @param isChecked
 */
function uncheckEvent(filterName, isChecked){
    // delete filter from sound
    this.filter.removeFromTrack(filterName, this.track);
    this.table.find(".filter-setting-" + filterName).hide();
    // transfer disabled filter for to delete it from PostSettings and track
    ProxyTrackManager.addFilter(FiltersList, this.filter, filterName, isChecked);
    ProxyTrackManager.resetFilter(FiltersList, filterName); // ???
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);
var Piano = __webpack_require__(93);
var Oscillator = __webpack_require__(92);
var DrumMachine = __webpack_require__(87);
var windowsTransport = __webpack_require__(3);
var commonEventNames = __webpack_require__(1);

module.exports = InstrumentView;

/**
 * Create instrument view corresponding to track instrument
 * @param track
 * @constructor
 */
function InstrumentView(track){
    BaseView.call(this, "instrument-view");
    this.track = track;

    this.instrument = null;
    this.prevInstrument = null;

    this.setInstrument();

    this._build();
}

inherit(InstrumentView, BaseView);

InstrumentView.prototype._build = function(){
    var container = this.getContainer();

    container.append(this.instrument);
};

InstrumentView.prototype.setTrack = function(track){
    if(track){
        this.track = track;
        this.setInstrument();
        windowsTransport.subscribe(commonEventNames.E_RECORD_TRACK,
                                   this.instrument.recordEvent.bind(this.instrument));
        windowsTransport.subscribe(commonEventNames.E_CLEAR_RECORD_TRACK,
                                   this.instrument.clearEvent.bind(this.instrument));
    }
};

InstrumentView.prototype.setInstrument = function(){
    if(this.track) {
        if(this.prevInstrument){
            console.log("+++++++++++");
            console.log(this.prevInstrument.track);
            //this.prevInstrument.track.disconnectFromAudioSource();
            // reset reference to track model of previous instrument view
            this.prevInstrument.track = null;
            console.log(this.prevInstrument.track);
        }
        switch (this.track.instrument) {
            case "synth":
                this.instrument = new Piano(this.track);
                break;
            case "drum":
                this.instrument = new DrumMachine(this.track);
                break;
            case "oscillator":
                this.instrument = new Oscillator(this.track);
                break;
        }
        this.prevInstrument = this.instrument;
        this.getContainer().append(this.instrument.getContainer());
    }
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);
var UserInfoBar = __webpack_require__(98);
var TrackView = __webpack_require__(15);
var TrackListView = __webpack_require__(14);
var ProjectListView = __webpack_require__(13);
var PlayerView = __webpack_require__(94);
var Factory = __webpack_require__(4);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = MenuBar;

function MenuBar(){
    BaseView.call(this, "menubar");

    this.menu = $("<div class='ui horizontal list menu-bar'>");

    this.userInfoBar = new UserInfoBar();
    this.backButton = Factory.createIconButton("ui button back user-only", "large arrow left icon", "");
    this.exportProjectButton = Factory.createButtonPopup("export project", null, "export", "Click to save on device");
    this.exportTrackButton = Factory.createButtonPopup("export track", null, "export", "Click to save on device");
    this.player = new PlayerView();
    this.recordButton = Factory.createButtonPopup("record", null, "record", "Click to record sound");
    this.clearButton = Factory.createButtonPopup("clear", null, "clear", "Click to clear sound");

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

    this.recordButton.on("click", function(event){
        windowsTransport.notify(commonEventNames.E_RECORD_TRACK, $(this));
    });

    this.clearButton.on("click", function(event){
        windowsTransport.notify(commonEventNames.E_CLEAR_RECORD_TRACK);
    });

    this.exportTrackButton.on("click", function(event){
        windowsTransport.notify(commonEventNames.E_EXPORT_TRACK);
    });

    this.exportProjectButton.on("click", function(event){
        windowsTransport.notify(commonEventNames.E_EXPORT_PROJECT);
    });

    this.hideButtons();

    this.menu.append(this.backButton);
    this.menu.append(this.exportProjectButton);
    this.menu.append(this.exportTrackButton);
    this.menu.append(this.player.getContainer());
    this.menu.append(this.recordButton);
    this.menu.append(this.clearButton);
    this.menu.append(this.userInfoBar.getContainer());

    container.append(this.menu);
};

MenuBar.prototype.adaptToActiveWindow = function(newWindow){
    if(newWindow instanceof TrackView){
        this.showComponentForTrack(newWindow);
        this.recordButton.show();
        this.clearButton.show();
        this.exportTrackButton.show();
        this.exportProjectButton.hide();
    } else if(newWindow instanceof TrackListView){
        this.showComponentForTrack(newWindow);
        this.hideButtons();
        this.exportProjectButton.show();
    } else if(newWindow instanceof ProjectListView){
        this.backButton.hide();
        this.player.hide();
        this.exportProjectButton.hide();
    }
};

MenuBar.prototype.showComponentForTrack = function(newWindow){
    this.backButton.show();
    this.player.show();
    this.player.audioPlayer.setModel(newWindow.controller.model);
};

MenuBar.prototype.hideButtons = function(){
    this.exportTrackButton.hide();
    this.recordButton.hide();
    this.clearButton.hide();
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);
var Factory = __webpack_require__(4);
var Observer = __webpack_require__(12);
var commonEventNames = __webpack_require__(1);

module.exports = MessageModal;

function MessageModal(){
    BaseView.call(this, "ui modal message");
    this.text = $("<p></p>");
    this.buttons = $("<div class='button-group'>");
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

    this.buttons.append(this.okButton);
    this.buttons.append(this.cancelButton);
    container.append(this.text);
    container.append(this.buttons);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var MixerRecorder = __webpack_require__(31);
var BaseInstrument = __webpack_require__(25);
var CoordMap = __webpack_require__(86);

module.exports = Oscillator;

function Oscillator(track){
    BaseInstrument.call(this, track, "oscillator");

    this.draggable = null;
    this.draggie = null;

    this.stopTime = 0;

    this.isMouseClicked = false;

    this.isMousePressed = false;
    this.pressedCoords = [];

    //this.coordsMap = $("<div class='coord-map'>");
    this.coordsMap = new CoordMap();
    this.oscillator = $("<div class='circle-drag draggable'>");
    this._build();
}

inherit(Oscillator, BaseInstrument);

Oscillator.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    // containment - create coord relative to coord-map
    this.draggable = this.oscillator.draggabilly({containment: this.coordsMap.map});
    this.draggie = this.draggable.data("draggabilly");

    setPosition(this.draggie, this.track.getFrequency(), this.track.getVolume());

    this.draggable.on("dragMove", function(event){
        self.isMousePressed = false;
        self.dragMoveEvent();
    });

    this.draggable.on("pointerDown", function(event){
        self.isMousePressed = true;
        //self.dragPointPressEvent();
    });

    this.draggable.on("pointerUp", function(event){
        self.isMousePressed = false;
        //self.dragPointPressEvent();
    });

    this.draggable.on("dragEnd", function(event){
        self.isMousePressed = false;
        self.dragEndEvent();
    });

    this.coordsMap.map.append(this.oscillator);
    container.append(this.coordsMap.map);
};

Oscillator.prototype.recordEvent = function(eventName, recordButton){
    if(this.isRecordNow === true){
        // stop record
        recordButton.text("record");
        this.isRecordNow = false;
        console.log(this.track.playObjects);
    } else{
        this.isRecordNow = true;
        this.track.emptyPlaySetting(); // clear previous play data setting
        recordButton.text("stop");
    }
};

Oscillator.prototype.clearEvent = function(){
    this.track.emptyPlaySetting();
};

Oscillator.prototype._dragHandler = function(){
    var x = this.draggie.position.x;
    var y = this.coordsMap.getY(this.draggie.position.y);
    console.log( 'dragMove', x, y);
    this.track.setFrequency(x);
    this.track.setVolume(y);
    this.track.trackObject.start();
    console.log(this.track);
    console.log("----------------------");
    if(this.track.playObjects.length === 0){
        this.startTime = Date.now();
        this.track.playObjects.push(new MixerRecorder(x, y, 0));
    } else{
        this.track.playObjects.push(new MixerRecorder(x, y, Date.now()-this.startTime));
    }
};

Oscillator.prototype._pressHandler = function(stopTime){
    //this._playOscillator();
    console.log(this.track);
    console.log("----------------------");
    if(this.track.playObjects.length === 0){
        this.track.playObjects.push(new MixerRecorder(x, y, 0));
    } else{
        this.track.playObjects.push(new MixerRecorder(x, y, Date.now()-this.startTime));
    }
};

Oscillator.prototype.dragMoveEvent = function(){
    this._dragHandler();
};

Oscillator.prototype.dragPointPressEvent = function(){
    var pressedCoord = {'x': this.draggie.position.x, 'b': this.draggie.position.y};
    if(this.isMousePressed === true){
        if(isContainObject(this.pressedCoords, pressedCoord) === false){
            this.startTime = Date.now();
            this.pressedCoords.push(pressedCoord);
            console.log("++++++++");
        }
    } else{
        this.stopTime = Date.now();
        //this._pressHandler(this.stopTime);
        console.log("--------");
    }
};

Oscillator.prototype.dragEndEvent = function(){
    this.track.trackObject.stop();
};

function setPosition(draggieObject, x, y) {
    draggieObject.position.x = x;
    draggieObject.position.y = y;
    draggieObject.setLeftTop();
}

function isContainObject(list, object){
    var i;
    var result = false;
    for(i = 0; i < list.length; i++){
        if(list[i] === object){
            result = true;
        }
    }
    return result;
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var PianoKeyRecorder = __webpack_require__(32);
var BaseInstrument = __webpack_require__(25);
var PianoModel = __webpack_require__(65);
var Factory = __webpack_require__(4);

module.exports = Piano;

function Piano(track){
    BaseInstrument.call(this, track, "piano");

    this.isMouseClicked = false;

    this.__pressedKeys = [];
    //this.__movedKeys = [];
    //this.__recordedKeys = [];

    this.piano = $("<div class='keys'>");
    this.octaveDiv = $("<div class='octaves'>");
    this.label = $("<div class='octave-label'>Octaves</div>");
    this.octaveRange = Factory.dropDownElement("octave-range", "octave-range", {" 1 - 3 ": 0, " 4 - 6 ": 1},
                                                this._dropDownEvent.bind(this));
    this._build();
}

inherit(Piano, BaseInstrument);

Piano.prototype._build = function(){
    var self = this;
    var container = this.getContainer();
    this.createKeys();

    /*this.piano.mouseup(function(event){
        self.isMouseClicked = false;
    });*/

    /*this.replayButton.on("click", function(){
        var i;
        console.log(self.__recordedKeys);
        for (i = 0; i < self.__recordedKeys.length; ++i){
            self.__recordedKeys[i].play();
        }
    });*/

    container.append(this.piano);
    this.octaveDiv.append(this.label);
    this.octaveDiv.append(this.octaveRange);
    container.append(this.octaveDiv);
};

Piano.prototype._dropDownEvent = function(id, text, dataValue){
    PianoModel.shift(dataValue); // change keys notation
    this.createKeys();
};

Piano.prototype.createKeys = function(){
    var i, tokenNote, style, key;
    var notes = PianoModel.notes;
    var keyDistance = 40;
    var whiteKeyDistance = -40;
    var blackKeyDistance = -15;
    this.piano.empty(); // clear previous piano keys
    for (i = 0; i < notes.length; ++i){
        tokenNote = notes[i];
        key = PianoModel.keyList[i];
        if(tokenNote.isBlack() === true){
            style = "background-color: rgb(32,32,32); width: 30px; height: 120px; z-index: 1; color: #ffffff;";
            this.piano.append(Factory.createKey("key", key, "left: " + blackKeyDistance + "; " + style,
                                                key, tokenNote.value, this._keyDownHandler.bind(this),
                                                this._keyUpHandler.bind(this)));
        } else{
            whiteKeyDistance += keyDistance;
            blackKeyDistance += keyDistance;
            this.piano.append(Factory.createKey("key", key, "left: " + whiteKeyDistance + ";", key,
                                                tokenNote.value, this._keyDownHandler.bind(this),
                                                this._keyUpHandler.bind(this)));
        }
        //container.append(Factory.createKey(tokenNote.value, tokenNote.isBlack()));
    }
};

Piano.prototype._recordAttackHandler = function(note){
    if(this.track.playObjects.length === 0){
        // this is the first button pressed, so it's time to remember the start time!
        this.startTime = Date.now();
        this.track.playObjects.push(new PianoKeyRecorder(this.track.trackObject, note, 0));
    } else{
        // it is not first key press, so just record the difference between start moment and present:
        this.track.playObjects.push(new PianoKeyRecorder(this.track.trackObject, note, Date.now()-this.startTime));
    }
};

Piano.prototype._recordReleaseHandler = function(note){
    var i, tokenPlayObject;
    for (i = 0; i < this.track.playObjects.length; ++i){
        tokenPlayObject = this.track.playObjects[i];
        if(tokenPlayObject.note === note && tokenPlayObject.triggerReleaseTime === 0){
            // If current recItem has same note and has default releaseTime - so this is what we need:
            tokenPlayObject.triggerReleaseTime = Date.now() - this.startTime;
        }
    }
};

Piano.prototype._keyDownHandler = function(key){
    var note = PianoModel.getNoteForKey(key);
    if(note !== null){
        if(this.__pressedKeys.indexOf(key) === -1){
            // play pressed key once
            this.__pressedKeys.push(key);
            Factory.setColorToKey(this.piano, key, "grey");
            if(this.track){
                this.track.playKeyNow(note.getValue());
                if(this.isRecordNow === true){
                    this._recordAttackHandler(note.getValue());
                }
            }
        }
    }
};

Piano.prototype._keyUpHandler = function(key){
    var note = PianoModel.getNoteForKey(key);
    if(note !== null) {
        if(this.__pressedKeys.indexOf(key) >= 0) {
            // change unpressed key color on default
            if (note.isBlack() === true) {
                Factory.setColorToKey(this.piano, key, "black");
            } else {
                Factory.setColorToKey(this.piano, key, "");
            }
            // stop key playing
            if(this.track){
                this.track.stopKeyNow();
                if(this.isRecordNow === true){
                    this._recordReleaseHandler(note.getValue());
                }
                this.__pressedKeys.splice(this.__pressedKeys.indexOf(key), 1);
            }
        }
    }
};

Piano.prototype.keyDown = function(){
    var key;
    var self = this;
    $(document).keydown(function(event) {
        key = String.fromCharCode(event.keyCode);
        self._keyDownHandler(key);
    });
};

Piano.prototype.keyUp = function(){
    var key;
    var self = this;
    $(document).keyup(function(event) {
        key = String.fromCharCode(event.keyCode);
        self._keyUpHandler(key);
    });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(4);
var BaseView = __webpack_require__(2);
var AudioPlayer = __webpack_require__(50);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = PlayerView;

function PlayerView(){
    BaseView.call(this, "player-view");

    this.audioPlayer = new AudioPlayer();

    this.playButton = Factory.createIconButton("ui button", "play icon", "");
    this.stopButton = Factory.createIconButton("ui button", "stop icon", "");

    this._build();
}

inherit(PlayerView, BaseView);

PlayerView.prototype._build = function(){
    var self = this;
    var container = this.getContainer();

    this.playButton.on("click", function(event){
        self.audioPlayer.play();
    });
    this.stopButton.on("click", function(event){
        self.audioPlayer.stop();
    });

    container.append(this.playButton);
    container.append(this.stopButton);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var ToolView = __webpack_require__(39);
var SettingsList = __webpack_require__(69);
var ProxyTrackManager = __webpack_require__(35);

module.exports = SettingView;

/**
 * Simple view with some data/widgets
 * @param track
 * @constructor
 */
function SettingView(track){
    ToolView.call(this, "setting-view", "two column stackable ui grid setting");

    this.track = null;

    this.setTrack(track);

    this._build();
    this.show();
}

inherit(SettingView, ToolView);

SettingView.prototype.resetToolOptions = function(){
    ProxyTrackManager.resetSettings(SettingsList);
};

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
        if(tokenSetting.isEnabled){
            options = tokenSetting.options;
            value = options.value; // BaseOption
            settingName = tokenSetting.name;
            $elementName = $("<div class='column'>" + settingName + "</div>");
            $element = this.createElement("column", settingName, value);
            this.table.append($elementName);
            this.table.append($element);
        }
    }
};

SettingView.prototype.setEvent = function(optionName, value){
    ProxyTrackManager.setSetting(SettingsList, this.track, optionName, value);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(2);

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
    //container.append(this.time);
    container.append(this.waveform);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(4);
var BaseView = __webpack_require__(2);
var UserModal = __webpack_require__(99);
var RequestManager = __webpack_require__(24);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = UserInfoBar;

function UserInfoBar(){
    BaseView.call(this, "user-info-bar");

    this.userName = $("<div class='username'>anonym</div>");
    this.joinButton = Factory.createButton("join", "join");
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
    } else{
        this.userName.text(userName);
        // eventListener.notify("USER_IS_LOGEDIN", userName);
    }
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(4);
var BaseView = __webpack_require__(2);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = UserModal;

function UserModal(){
    BaseView.call(this, "ui modal user-registration");
    this.buttons = $("<div class='buttons-registration'>");
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

    this.buttons.append(this.facebookLogIn);
    this.buttons.append(this.buttonLogout);
    this.getContainer().append(this.buttons);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var AudioHelper = __webpack_require__(10);
var BaseView = __webpack_require__(2);
var commonEventNames = __webpack_require__(1);
var windowsTransport = __webpack_require__(3);

module.exports = WaveForm;

function WaveForm(){
    BaseView.call(this, "wave-form");

    this.wavesurfer = null;

    this._build();
}

inherit(WaveForm, BaseView);

WaveForm.prototype._build = function(){
};

WaveForm.prototype.create = function(buffer){
    var self = this;
    this.wavesurfer = WaveSurfer.create({
        container: this.getContainer().get(0),
        waveColor: "#262626",
        progressColor: "#ebebeb",
        height: 120
    });
    this.wavesurfer.on("ready", function(){
        self.wavesurfer.drawer.container.style.display = '';
        self.wavesurfer.drawBuffer();
    });
    this.wavesurfer.loadBlob(AudioHelper.AudioBufferToBlob(buffer));
    windowsTransport.subscribe(commonEventNames.E_PLAY_WAVE, function(){
        self.wavesurfer.setMute(true);
        self.wavesurfer.play();
    });
    windowsTransport.subscribe(commonEventNames.E_STOP_WAVE, this.wavesurfer.stop.bind(this.wavesurfer));
};


/***/ })
/******/ ]);