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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "createButton": createButton,
    "createFacebookButton": createFacebookButton,
    "createList": createList
};

function createButton(name){
    return $("<button class='ui button'>" + name + "</button>");
}

function createFacebookButton(){
    return $("<button class='ui facebook button'>" +
             "<i class='facebook icon'></i>Facebook</button>");
}

function createList(listData){
    var i;
    var $list = $("<div class='ui link list'>");
    for(i = 0; i < listData.length; ++i){
        $list.append("<a id=" + i + " class='item'>" + listData[i] + "</a>");
    }
    return $list;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var getProjectData = require("requests/getProjectData");
var projectList = __webpack_require__(9);
var deleteProject = __webpack_require__(7);
var getUser = __webpack_require__(8);
var MessageModal = __webpack_require__(10);

module.exports = RequestManager;

function RequestManager(){}

RequestManager.getProjectData = function(streamList){};

RequestManager.deleteProject = function(projectName){
    var url = "projects/delete/";
    var fullUrl = url + projectName + '/';
    deleteProject(fullUrl, MessageModal);
};

RequestManager.getUser = function(callback){
    getUser("user/", callback);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
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
    this._container = $("<div class='base-container " + classNames + "'>");
}

BaseView.prototype.getContainer = function(){
    return this._container;
};

BaseView.prototype.show = function(){
    this._container.show();
};

BaseView.prototype.hide = function(){
    this._container.hide();
};

BaseView.prototype._build = null;

BaseView.prototype.appendToBlock = function(blockName){
    $(blockName).append(this._container);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ProjectView
var ButtonFactory = __webpack_require__(0);
var ProjectListFactory = __webpack_require__(0);
var RequestManager = __webpack_require__(1);

var blockName = ".project-bar";

module.exports = {
    "fullProjectList": fullProjectList,
    "initButton": initButton
};

function fullProjectList(list){
    console.log(1);
    console.log(list);
    var $projectList = ProjectListFactory.createList(list);
    $(blockName).append($projectList);
    //return $projectList;
}

function initButton(){
    var $addButton = ButtonFactory.createButton("add");
    var $editButton = ButtonFactory.createButton("edit");
    var $deleteButton = ButtonFactory.createButton("delete");

    $(blockName).append($deleteButton);

    $addButton.on("click", function(event){

    });

    $editButton.on("click", function(event){

    });

    $deleteButton.on("click", function(event){
        var projectName = "project_DELETE";  // test
        RequestManager.deleteProject(projectName);
    });
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherit = __webpack_require__(2);
var Factory = __webpack_require__(0);
var BaseView = __webpack_require__(3);

module.exports = UserModal;

function UserModal(){
    BaseView.call(this, "ui modal");
    this.isJoin = false;
    this.facebookLogIn = Factory.createFacebookButton();
    this.label = $("<div class='ui pointing below label'>Join without registration");
    this.button = Factory.createButton("join");
    this.buttonLogout = Factory.createButton("Logout");

    this.facebookLogIn.on("click", function(event){
        location.href = "/accounts/facebook/login/";
        console.log("q");
        //RequestManager.projectList(ProjectView.fullProjectList);
    });

    this.buttonLogout.on("click", function(event){
        location.href = "/accounts/logout/";
        console.log("logout");
    });

    this._build();
}

inherit(UserModal, BaseView);

UserModal.prototype._build = function(){
    this._container.append(this.facebookLogIn);
    this._container.append(this.label);
    this._container.append(this.button);
    this._container.append(this.buttonLogout);
};

UserModal.prototype.show = function(){
    this._container.modal("show");
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merger_test = __webpack_require__(12);

var RequestManager = __webpack_require__(1);
var ProjectView = __webpack_require__(4);

var UserModal = __webpack_require__(5);


$(".ui.button.join").on("click", function(event){
    var userModal = new UserModal();
    userModal.show();
    // check with request if user registered
});

RequestManager.getUser(ProjectView.fullProjectList);


module.exports = {
    "merger_test": merger_test
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(url, messageModalObject){
    $.ajax({
		method: "POST",
		url: url,
		dataType: "text",
		cache: false,
		success: function(data){
            new messageModalObject(data);
		},
		error: function(status){
			console.error(status);
            new messageModalObject("Project doesn't exist.");
		}
	});
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var projectList = __webpack_require__(9);

module.exports = function(url, callback){
    $.ajax({
        method: "GET",
        url: url,
        dataType: "json",
        cache: false,
        success: function(data){
            console.log(data);
            projectList("projects/", callback);
        },
        error: function(status){
            console.error(status);
        }
    });
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(url, callback){
    $.ajax({
		method: "GET",
		url: url,
		dataType: "json",
		cache: false,
		success: function(data){
			callback(data);
		},
		error: function(status){
			console.error(status);
		}
	});
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//MessageModal
var inherit = __webpack_require__(2);
var BaseView = __webpack_require__(3);

function MessageModal(message){
    BaseView.call(this, "ui basic modal");
    this.text = $("<p>" + message + "</p>");
    this.okButton = $("<i class='check circle outline'></i>");

    this._build();
    this.show();
}

inherit(MessageModal, BaseView);

MessageModal.prototype.show = function(){
    this._container.modal("show");
};

MessageModal.prototype._build = function(){
    this._container.append(this.text);
    this._container.append(this.okButton);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//module.exports = AudioHelper;
module.exports = {
    "getAudioContextBuffer": getAudioContextBuffer,
    "merge": merge
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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//var audioBufferUtils = require("audio-buffer-utils");
var AudioHelper = __webpack_require__(11);
var TrackManager = __webpack_require__(14);

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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(13);
var AudioHelper = __webpack_require__(11);

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
}

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


/***/ })
/******/ ]);