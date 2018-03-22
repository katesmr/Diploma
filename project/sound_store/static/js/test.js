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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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


var Observer = __webpack_require__(11);

var eventListener = new Observer;

eventListener.ON_SHOW_PROJECT_LIST = "ON_SHOW_PROJECT_LIST";
eventListener.ON_ADD_PROJECT = "ON_ADD_PROJECT";
eventListener.ON_EDIT_PROJECT = "ON_EDIT_PROJECT";
eventListener.ON_DELETE_PROJECT = "ON_DELETE_PROJECT";
eventListener.DEFINE_USER = "DEFINE_USER";
eventListener.SHOW_TRACK = "SHOW_TRACK";
eventListener.SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";
eventListener.SHOW_INSTRUMENT_VIEW = "SHOW_INSTRUMENT_VIEW";

module.exports = eventListener;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "createButton": createButton,
    "createIconButton": createIconButton,
    "createGridData": createGridData
};

function createButton(className, text){
    return $("<button class='ui button " + className + "'>" + text + "</button>");
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

function createGridData(titleList, callback){
    var i;
    var title;
    var $item;
    var $column;
    var $table = $("<div class='five column stackable ui grid'>");
    for(i = 0; i < titleList.length; ++i){
        title = titleList[i];
        $item = $("<a id='" + title + "'>" + title +"</a>");
        $item.on("click", function (event) {
            var projectName = $(this).attr("id");
            console.log(projectName);
            callback(projectName); // ???????????????
        });
        $column = $("<div class='column'>");
        $column.append($item);
        $table.append($column);
    }
    return $table;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var getProjectData = require("requests/getProjectData");
var transportAudioFile = __webpack_require__(18);
var TrackManager = __webpack_require__(7);

var changeSound = __webpack_require__(13);
var getSound = __webpack_require__(15);
var projectList = __webpack_require__(17);
var deleteProject = __webpack_require__(14);
var getUser = __webpack_require__(16);

var MessageModal = __webpack_require__(21);

module.exports = RequestManager;

function RequestManager(){
    this.messageModal = new MessageModal();
}

RequestManager.prototype.getUser = function(callback){
    getUser(callback);
    /*getUser(function(){
        //projectList("projects/", projectView.showProjectList.bind(projectView));
        projectList("projects/", callback.bind(context));
    });*/
};

RequestManager.prototype.getProjectList = function(callback){
    projectList(callback);
};

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


module.exports = {
    "getAudioContextBuffer": getAudioContextBuffer,
    "merge": merge,
    "BlobToArrayBuffer": BlobToArrayBuffer,
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

function AudioContextToBlob(audioContext){

}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(10);
var AudioHelper = __webpack_require__(6);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//var audioBufferUtils = require("audio-buffer-utils");
var AudioHelper = __webpack_require__(6);
var TrackManager = __webpack_require__(7);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var MenuBar = __webpack_require__(20);
var ContentView = __webpack_require__(19);
var PlayerView = __webpack_require__(23);
var RequestManager = __webpack_require__(4);

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

    var requestManager = new RequestManager();
    requestManager.getUser(this.hideUserOnlyElements.bind(this));

    container.append(this.menuBar.getContainer());
    container.append(this.contentView.getContainer());
    container.append(this.player.getContainer());

    // eventListener.subscribe("ON_SHOW_PROJECT_LIST", this.fetchProjectList.bind(this));
};

ProjectBaseView.prototype.hideUserOnlyElements = function(userName){
    if(userName instanceof Error){
        var $elements = $(".user-only");
        $elements.addClass("disabled");
        // ... add "disable" class to all of these $elements
    }
};


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merger_test = __webpack_require__(8);
var RequestManager = __webpack_require__(4);
var ProjectBaseView = __webpack_require__(9);

module.exports = {
    "merger_test": merger_test
};

var requestManager = new RequestManager();

var projectBaseView = new ProjectBaseView();


// requestManager.uploadSound("test.wav", trackView.createWaveForm);


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "POST", "json");


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "binary");


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "user/");


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRequest = __webpack_require__(5);

module.exports = baseRequest.bind(null, "GET", "json", "projects/");


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var ProjectList = __webpack_require__(25);
var TrackToolView = __webpack_require__(27);
var TrackView = __webpack_require__(30);
var eventListener = __webpack_require__(2);

module.exports = ContentView;

function ContentView(){
    BaseView.call(this, "content-view");

    this.projectList = new ProjectList();
    this.trackToolView = new TrackToolView();
    this.trackView = new TrackView();

    this.sideBar = null;
    //this.trackView = null;

    this._build();
}

inherit(ContentView, BaseView);

ContentView.prototype._build = function(){
    var container = this.getContainer();

    /*if (!eventListener.subscribe(eventListener.ON_SHOW_PROJECT_LIST, this.showProjectList.bind(this))){

        console.error("Unable to subscribe to", eventListener.ON_SHOW_PROJECT_LIST, "event!");
    }*/
    // EXAMPLE:

    eventListener.notify("SHOW_TRACK");

    eventListener.subscribe("ON_SHOW_PROJECT_LIST", this.showProjectList.bind(this));
    eventListener.subscribe("ON_ADD_PROJECT", this.showTrackToolView.bind(this));
    eventListener.subscribe("ADD_TRACK", this.addTrack.bind(this));

    container.append(this.projectList.getContainer());
    container.append(this.trackToolView.getContainer());
    container.append(this.trackView.getContainer());

    this.appendToBlock($(".ui.container"));
};

ContentView.prototype.showProjectList = function(){
    this.hideAll();
    this.getContainer().append(this.projectList.getContainer());
    this.projectList.fetchProjectList();
    this.projectList.show();
};

ContentView.prototype.showTrackToolView = function(){
    this.hideAll();
    this.trackToolView.show();
};

ContentView.prototype.hideAll = function(){
    this.projectList.getContainer().remove();
    //this.projectList.hide();
    this.trackToolView.hide();
    // ... hide all evelements
};

ContentView.prototype.addTrack = function(trackInfo){
    this.sideBar.addTrack(trackInfo);
    this.trackView.addTrack(trackInfo);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(1);
var UserInfoBar = __webpack_require__(28);
var ProjectBar = __webpack_require__(24);
var inherit = __webpack_require__(0);
var eventListener = __webpack_require__(2);

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

    eventListener.notify(eventListener.DEFINE_USER);

    container.append(this.userInfoBar.getContainer());
    container.append(this.projectBar.getContainer());
};


/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(2);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var SaveButtonBar = __webpack_require__(26);
var PlayButtonBar = __webpack_require__(22);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(2);

module.exports = ProjectBar;

function ProjectBar(){
    BaseView.call(this, "projectbar");

    this.showProjectListButton = Factory.createIconButton("ui button user-only", "book icon", "");
    this.addProjectButton = Factory.createIconButton("ui button", "plus icon", "");
    this.editProjectButton = Factory.createIconButton("ui button user-only", "edit icon", "");
    this.deleteProjectButton = Factory.createIconButton("ui button user-only", "trash icon", "");

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var Factory = __webpack_require__(3);
var RequestManager = __webpack_require__(4);
var eventListener = __webpack_require__(2);

module.exports = ProjectList;

function ProjectList(){
    BaseView.call(this, "project-list");

    this.projectList = null;

    this._build();
    this.hide();
}

inherit(ProjectList, BaseView);

ProjectList.prototype._build = function(){
    this.getContainer().append(this.projectList);

    // eventListener.subscribe("ON_SHOW_PROJECT_LIST", this.fetchProjectList.bind(this));
};

//
ProjectList.prototype.fetchProjectList = function(){
    // request to the server:
    var requestManager = new RequestManager();
    requestManager.getProjectList(this.showProjectList.bind(this))
    // requestManager.getProjectLIst(function(){ self.showProjectList() });
};

ProjectList.prototype.showProjectList = function(data){
    var test;
    this.projectList = Factory.createGridData(data, test);
    this.getContainer().append(this.projectList);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(2);

module.exports = SaveButtonBar;

function SaveButtonBar(){
    BaseView.call(this, "save-button-group");

    this.addToStoreButton = Factory.createButton("user-only", "add"); // save to store
    this.saveTrackButton = Factory.createButton("", "save"); // save only chosen track
    this.saveAllTracksButton = Factory.createButton("", "save all"); // separate of each other
    this.mergeAllTracksButton = Factory.createButton("", "merge all"); // merge all track in one and save it

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var BaseView = __webpack_require__(1);
var Factory = __webpack_require__(3);
var RequestManager = __webpack_require__(4);
var eventListener = __webpack_require__(2);

module.exports = TrackToolView;

function TrackToolView(){
    BaseView.call(this, "track-tool-view");

    this.label1 = $("<div class='ui label'>envelope</div>");
    this.label2 = $("<div class='ui label'>TEST</div>");
    this.label3 = $("<div class='ui label'>TEST</div>");

    this._build();
    this.hide();
}

inherit(TrackToolView, BaseView);

TrackToolView.prototype._build = function(){

    this.getContainer().append(this.label1);
    this.getContainer().append(this.label2);
    this.getContainer().append(this.label3);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var UserModal = __webpack_require__(29);
var RequestManager = __webpack_require__(4);
var eventListener = __webpack_require__(2);

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
        eventListener.notify("SHOW_LOGIN_FORM");
    });

    eventListener.subscribe("DEFINE_USER", this._fetchUserName.bind(this));

    container.append(this.userName);
    container.append(this.joinButton);
};

UserInfoBar.prototype._fetchUserName = function(){
    var requestManager = new RequestManager();
    requestManager.getUser(this.setUserName.bind(this));

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var eventListener = __webpack_require__(2);

module.exports = UserModal;

function UserModal(){
    BaseView.call(this, "ui modal");
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

    eventListener.subscribe("SHOW_LOGIN_FORM", this.show.bind(this));

    this._container.append(this.facebookLogIn);
    //this._container.append(this.label);
    this._container.append(this.buttonLogout);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(0);
var Factory = __webpack_require__(3);
var BaseView = __webpack_require__(1);
var RequestManager = __webpack_require__(4);
var eventListener = __webpack_require__(2);

module.exports = WaveForm;

function WaveForm(){
    BaseView.call(this, "waveform");

    $(this.getContainer()).attr("id", "waveform");

    this.waveform = null;

    this._build();
}

inherit(WaveForm, BaseView);

WaveForm.prototype._build = function(){
    eventListener.subscribe("SHOW_TRACK", this._fetchSoundData.bind(this));
};

WaveForm.prototype._fetchSoundData = function(){
    var requestManager = new RequestManager();
    requestManager.uploadSound("test.wav", this.createWaveFormFromFile.bind(this));
};

WaveForm.prototype.createWaveFormFromFile = function(blob){
    this.waveform = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#626262",
        progressColor: "#fff843"
    });
    this.waveform.loadBlob(blob);
};

WaveForm.prototype.createWaveForm = function(audioContext){
    this.waveform = WaveSurfer.create({
        audioContext: audioContext,
        container: "#waveform",
        waveColor: "#626262",
        progressColor: "#fff843"
    });
};


/***/ })
/******/ ]);