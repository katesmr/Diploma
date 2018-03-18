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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
    "createButton": createButton,
    "createIconButton": createIconButton,
    "createGridData": createGridData
};

function createButton(text){
    return $("<button class='ui button'>" + text + "</button>");
}

function createIconButton(buttonClass, iconClass, name){
    return $("<button class='" + buttonClass + "'>" +
        "<i class='" + iconClass + "'></i>" + name + "</button>");
}

function createIconButton(buttonClass, iconClass, name){
    return $("<button class='" + buttonClass + "'>" +
        "<i class='" + iconClass + "'></i>" + name + "</button>");
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

function createGridData(titleList){
    var i;
    var $column;
    var $table = $("<div class='five column stackable ui grid'>");
    for(i = 0; i < titleList.length; ++i){
        $column = $("<div class='column'><a>" + titleList[i] +"</a></div>");
        $table.append($column);
    }
    return $table;
}


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


module.exports = {
    "getAudioContextBuffer": getAudioContextBuffer,
    "merge": merge,
    "BlobToArrayBuffer": BlobToArrayBuffer
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(12);
var AudioHelper = __webpack_require__(4);

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
    return function(audioBuffer, fileName){
        var buffer;
        if(audioBuffer instanceof AudioBuffer){
            buffer = toWav(audioBuffer, {float32: true});
        } else{
            buffer = AudioHelper.getAudioContextBuffer(audioBuffer._context);
        }
        var blob = new Blob([buffer], {"type": "audio/x-wav"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var getProjectData = require("requests/getProjectData");
var transportAudioFile = __webpack_require__(19);
var TrackManager = __webpack_require__(5);

var changeSound = __webpack_require__(14);
var getSound = __webpack_require__(16);
var projectList = __webpack_require__(18);
var deleteProject = __webpack_require__(15);
var getUser = __webpack_require__(17);

var MessageModal = __webpack_require__(20);

module.exports = RequestManager;

function RequestManager(){
    this.messageModal = new MessageModal();
}

RequestManager.prototype.getUser = function(context, callback){
    getUser(callback.bind(context));
    /*getUser(function(){
        //projectList("projects/", projectView.fullProjectList.bind(projectView));
        projectList("projects/", callback.bind(context));
    });*/
};

RequestManager.prototype.getProjectData = function(){};

RequestManager.prototype.deleteProject = function(projectName){
    var url = "projects/delete/";
    var fullUrl = url + projectName + '/';
    deleteProject(fullUrl, this.messageModal.show);
};

RequestManager.prototype.getProject = function(){};

RequestManager.prototype.createSound = function(soundName, audioSrc){
    var url = "sounds/create/";
    // var url = "sound/update/";
    var fullUrl = url + soundName + '/';
    transportAudioFile(fullUrl, soundName, audioSrc, changeSound);
};

RequestManager.prototype.downloadSound = function(soundName){
    var url = "sounds/download/";
    var fullUrl = url + soundName + '/';
    getSound(fullUrl, function(data){
        TrackManager.save(data, soundName);
    });
};

RequestManager.prototype.uploadSound = function(soundName, callback){
    var url = "sounds/";
    var fullUrl = url + soundName + '/';
    getSound(fullUrl, callback);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//var audioBufferUtils = require("audio-buffer-utils");
var AudioHelper = __webpack_require__(4);
var TrackManager = __webpack_require__(5);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var ProjectList = __webpack_require__(22);
var eventListener = __webpack_require__(25);

module.exports = ContentView;

function ContentView(){
    BaseView.call(this, "content-view");

    this.projectList = new ProjectList(["teeeeest1", "test2", "sibsneaepinb", "qqqqqq",
        "rr", "rwythrjtejedbxd", "rrr", "wegrfgnh",
        "aknv", "teeeeest1", "test2", "sibsneaepinb", "qqqqqq",
        "rr", "rwythrjtejedbxd", "rrr", "wegrfgnh",
        "aknv"]);

    this.sideBar = null;
    this.trackView = null;

    this._build();
}

inherit(ContentView, BaseView);

ContentView.prototype._build = function(){
    var container = this.getContainer();

    if (!eventListener.subscribe(eventListener.ON_SHOW_PROJECT_LIST, this.showProjectList.bind(this))){

        console.error("Unable to subscribe to", eventListener.ON_SHOW_PROJECT_LIST, "event!");
    }
    // EXAMPLE:
    eventListener.subscribe("ADD_TRACK", this.addTrack.bind(this));

    container.append(this.projectList);

    this.appendToBlock($(".ui.container"));
};

ContentView.prototype.showProjectList = function(){
    this.hideALl();
    this.projectList.show();
};

ContentView.prototype.hideALl = function(){
    this.projectList.hide();
    // ... hide all evelements
};

ContentView.prototype.addTrack = function(trackInfo){
    this.sideBar.addTrack(trackInfo);
    this.trackView.addTrack(trackInfo);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(1);
var UserInfoBar = __webpack_require__(31);
var ProjectBar = __webpack_require__(21);
var inherit = __webpack_require__(0);

module.exports = MenuBar;

function MenuBar(){
    BaseView.call(this, "menubar");

    this.userInfoBar = new UserInfoBar();
    this.projectBar = new ProjectBar();

    this._build();
}

inherit(MenuBar, BaseView);

MenuBar.prototype._build = function(){
    var container = this.getContainer();

    container.append(this.userInfoBar);
    container.append(this.projectBar);

    this.userInfoBar.appendToBlock(container);
    this.projectBar.appendToBlock(container);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var SaveButtonBar = __webpack_require__(29);
var PlayButtonBar = __webpack_require__(30);

module.exports = PlayerView;

function PlayerView(){
    BaseView.call(this, "player");

    this.playButtonBar = new PlayButtonBar();
    this.saveButtonBar = new SaveButtonBar();

    this._build();
}

inherit(PlayerView, BaseView);

PlayerView.prototype._build = function(){
    var container = this.getContainer();

    container.append(this.playButtonBar);
    container.append(this.saveButtonBar);

    this.playButtonBar.appendToBlock(container);
    this.saveButtonBar.appendToBlock(container);
};


/***/ }),
/* 11 */,
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merger_test = __webpack_require__(7);
var RequestManager = __webpack_require__(6);
var ProjectBaseView = __webpack_require__(32);

module.exports = {
    "merger_test": merger_test
};

var requestManager = new RequestManager();

var projectBaseView = new ProjectBaseView();


/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "binary");


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "json", "user/");


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(3);

module.exports = baseRequest.bind(null, "GET", "json");


/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//MessageModal
var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);

module.exports = MessageModal;

function MessageModal() {
    BaseView.call(this, "ui basic modal");
    this.text = null;
    this.okButton = $("<i class='check circle outline'></i>");

    this._build();
}

inherit(MessageModal, BaseView);

MessageModal.prototype.show = function(message){
    this.text = $("<p class='message-modal'>" + message + "</p>");
    this._container.modal("show");
};

MessageModal.prototype._build = function(){
    this._container.append(this.text);
    this._container.append(this.okButton);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(25);

module.exports = ProjectBar;

function ProjectBar(){
    BaseView.call(this, "projectbar");

    this.showProjectListButton = Factory.createIconButton("ui button user-only", "book icon", "");
    this.addProjectButton = Factory.createIconButton("ui button", "plus icon", "");
    this.editProjectButton = Factory.createIconButton("ui button user-only", "disabled edit icon", "");
    this.deleteProjectButton = Factory.createIconButton("ui button user-only", "disabled trash icon", "");

    this._build();
}

inherit(ProjectBar, BaseView);

ProjectBar.prototype._build = function(){
    var container = this.getContainer();

    this.showProjectListButton.on("click", function(_){
        // Possible additional visual effect for this button...
        eventListener.notify(eventListener.ON_SHOW_PROJECT_LIST);
    });
    this.addProjectButton.on("click", function(_){
        //
        eventListener.notify(eventListener.ON_ADD_PROJECT, null);
    });
    this.editProjectButton.on("click", function(_){
        eventListener.notify(eventListener.ON_EDIT_PROJECT);
    });
    this.deleteProjectButton.on("click", function(_){
        eventListener.notify(eventListener.ON_DELETE_PROJECT);
    });

    container.append(this.addProjectButton);
    container.append(this.editProjectButton);
    container.append(this.deleteProjectButton);
    container.append(this.showProjectListButton);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);

module.exports = ProjectList;

function ProjectList(data){
    BaseView.call(this, "project-list");

    this.projectList = Factory.createGridData(data);

    this._build();
    this.hide();
}

inherit(ProjectList, BaseView);

ProjectList.prototype._build = function(){
    this._container.append(this.projectList);

    // eventListener.subscribe("ON_SHOW_PROJECT_LIST", this._fetchProjectList.bind(this));
};

ProjectList.prototype._fetchProjectList = function(){
    // request to the server:
    // var self = this;
    // requestManager.getProjectLIst(function(){ self.showProjectList() });
};

ProjectList.prototype.showProjectList = function(){
    // this.getContainer().show();
};


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);

module.exports = UserModal;

function UserModal(){
    BaseView.call(this, "ui modal");
    this.facebookLogIn = Factory.createIconButton("ui facebook button", "facebook icon", "Facebook");
    //this.label = $("<div class='ui pointing below label'>Join without registration");
    this.buttonLogout = Factory.createButton("Logout");

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

    this._container.append(this.facebookLogIn);
    //this._container.append(this.label);
    this._container.append(this.buttonLogout);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Observer = __webpack_require__(27);

var eventListener = new Observer;

eventListener.ON_SHOW_PROJECT_LIST = "ON_SHOW_PROJECT_LIST";
eventListener.ON_ADD_PROJECT = "ON_ADD_PROJECT";
eventListener.ON_EDIT_PROJECT = "ON_EDIT_PROJECT";
eventListener.ON_DELETE_PROJECT = "ON_DELETE_PROJECT";

module.exports = eventListener;


/***/ }),
/* 26 */,
/* 27 */
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
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(25);

module.exports = SaveButtonBar;

function SaveButtonBar(){
    BaseView.call(this, "save-button-group");

    this.addToStoreButton = Factory.createButton("add"); // save to store
    this.saveTrackButton = Factory.createButton("save"); // save only chosen track
    this.saveAllTracksButton = Factory.createButton("save all"); // separate of each other
    this.mergeAllTracksButton = Factory.createButton("merge all"); // merge all track in one and save it

    this._build();
}

inherit(SaveButtonBar, BaseView);

SaveButtonBar.prototype._build = function(){
    var container = this.getContainer();

    this.addToStoreButton.on("click", function(_){
    });
    this.saveTrackButton.on("click", function(_){
    });
    this.saveAllTracksButton.on("click", function(_){
    });
    this.mergeAllTracksButton.on("click", function(_){
    });

    container.append(this.addToStoreButton);
    container.append(this.saveTrackButton);
    container.append(this.saveAllTracksButton);
    container.append(this.mergeAllTracksButton);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(25);

module.exports = PlayButtonBar;

function PlayButtonBar(){
    BaseView.call(this, "play-button-group");

    this.playButton = Factory.createIconButton("ui button", "play icon", "");
    this.pauseButton = Factory.createIconButton("ui button", "pause icon", "");
    this.stopButton = Factory.createIconButton("ui button", "stop icon", "");
    this.prevButton = Factory.createIconButton("ui button", "step backward icon", "");
    this.nextButton = Factory.createIconButton("ui button", "step forward icon", "");

    this._build();
}

inherit(PlayButtonBar, BaseView);

PlayButtonBar.prototype._build = function(){
    var container = this.getContainer();

    this.playButton.on("click", function(_){
    });
    this.pauseButton.on("click", function(_){
    });
    this.stopButton.on("click", function(_){
    });
    this.prevButton.on("click", function(_){
    });
    this.nextButton.on("click", function(_){
    });

    container.append(this.prevButton);
    container.append(this.playButton);
    container.append(this.pauseButton);
    container.append(this.stopButton);
    container.append(this.nextButton);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(2);
var BaseView = __webpack_require__(1);
var UserModal = __webpack_require__(24);

module.exports = UserInfoBar;

function UserInfoBar(){
    BaseView.call(this, "user-info-bar");

    this.userName = null;
    this.joinButton = Factory.createButton("join");

    this._build();
}

inherit(UserInfoBar, BaseView);

UserInfoBar.prototype._build = function(){
    var container = this.getContainer();

    this.joinButton.on("click", function(){
        var userModal = new UserModal();
        userModal.show();
    });

    container.append(this.userName);
    container.append(this.joinButton);

    // eventListener.subscribe("ON_SHOW_PROJECT_LIST", this._fetchProjectList.bind(this));
};

UserInfoBar.prototype.setUserName = function(userName){
    if(userName instanceof Error){
        this.userName = $("<p>anonym</p>");
    } else{
        this.userName = $("<p>" + userName + "</p>");
    }
    this.getContainer().append(this.userName);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var MenuBar = __webpack_require__(9);
var ContentView = __webpack_require__(8);
var PlayerView = __webpack_require__(10);

module.exports = ProjectBaseView;

function ProjectBaseView(){
    BaseView.call(this, "base-view");

    this.menuBar = new MenuBar();
    this.contentView = new ContentView();
    this.player = new PlayerView();

    this._build();
    this.appendToBlock($(".ui.container"));
}

inherit(ProjectBaseView, BaseView);

ProjectBaseView.prototype._build = function(){
    var container = this.getContainer();

    container.append(this.menuBar);
    container.append(this.contentView);
    container.append(this.player);

    this.menuBar.appendToBlock(container);
    this.contentView.appendToBlock(container);
    this.player.appendToBlock(container);

    // eventListener.subscribe("ON_SHOW_PROJECT_LIST", this._fetchProjectList.bind(this));
};


/***/ })
/******/ ]);