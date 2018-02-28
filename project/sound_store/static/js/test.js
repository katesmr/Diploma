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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// connect with server
var ProjectModel = __webpack_require__(8);

// url "projects/project0/"
module.exports = function(url, callback){
    $.ajax({
		method: "GET",
		url: url,
		dataType: "json",
		cache: false,
		success: function(data){
		    var model;
		    console.log(data);
			model = new ProjectModel();
			model.createTrackDataList(data);
	        callback(model);
		},
		error: function(status){
			callback(new Error(status));
		}
	});
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
    $.ajax({
		method: "GET",
		url: "projects/",
		dataType: "json",
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
    $.ajax({
		method: "GET",
		url: "sounds/test.wav/",
		dataType: "binary",  // blob????
		cache: false,
		processData: false,
		success: function(data){
			playSound(data);
		},
		error: function(status){
			console.error(status);
		}
	});
};

function playSound(blobObject){
    var audioData;
	//var arrayBuffer;
    var reader = new FileReader();
    var context = new AudioContext();
    reader.onload = function(){
        var arrayBuffer = reader.result;
        console.log(arrayBuffer);
        context.decodeAudioData(arrayBuffer, function(buffer){
            audioData = buffer;
            var freeverb = new Tone.Freeverb().toMaster();
            freeverb.dampening.value = 1000;
            var player = new Tone.Player(audioData).toMaster();
            //routing synth through the reverb
            //player.connect(freeverb);
            //player.start();
            var context = player.context;
            // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
            // get audio data for change audio with Tone
            var oscillator = context.createOscillator();
            oscillator.type = 'square';
            oscillator.connect(context.destination);
            //oscillator.start();
            console.log(oscillator);

            /*var synth = new Tone.Synth({"oscillator" : {"type" : "sine", "frequency" : 400}}).toMaster();
            //synth.frequency.value = 700;
            synth.triggerAttack(synth.frequency.value);
            console.log(synth.frequency);
            synth.triggerRelease(1);*/

            /*var synth = new Tone.Synth({"oscillator" : {"type" : "sine"}}).toMaster();
            synth.oscillator.type = "triangle"; // set type
            synth.oscillator.frequency.value = 200; // don't work
            synth.oscillator.volume.value = 10;
            synth.triggerAttack("C4");
            synth.triggerRelease(1);
            console.log(synth);*/
        });
    };
    reader.readAsArrayBuffer(blobObject);
}


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audioplayer_test = __webpack_require__(12);
var upload_sound_test = __webpack_require__(3);
var getProjectData = __webpack_require__(1);
var getProjectsData = __webpack_require__(2);


module.exports = {
    "audioplayer_test": audioplayer_test,
	"getProjectData": getProjectData
    //"test_requests": test_requests
	//"getProjectsData": getProjectsData
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioGenerator = __webpack_require__(7);
var TrackManager = __webpack_require__(11);

module.exports = AudioPlayer;

function AudioPlayer(projectModel){
    this.projectModel = projectModel;
    this.audioGeneratorList = [];
    this.trackList = [];

    this.trackDataToTrack = function(){
        var i;
        var generator;
        var trackData = this.projectModel.trackDataList;
        for(i=0; i < trackData.length; ++i){
            generator = new AudioGenerator();
            generator.generate(trackData[i]);
            this.audioGeneratorList[i] = generator;
            this.trackList[i] = generator.trackObject;
        }
    };

    this.trackDataToTrack();
}

AudioPlayer.prototype.play = function(note){
    var i;
    for(i = 0; i < this.audioGeneratorList.length; ++i){
        this.audioGeneratorList[i].play(note);
    }
}

AudioPlayer.prototype.pause = function(){}

AudioPlayer.prototype.stop = function(){}

AudioPlayer.prototype.save = function(fileName){
    var resultAudioBuffer;
    if(this.trackList.length === 1){
        resultAudioBuffer = this.trackList[0];
    } else if(this.trackList.length > 1){
        resultAudioBuffer = TrackManager.mergeTracks(this.trackList);
    }
    TrackManager.save(resultAudioBuffer, fileName);
    // call request of saving Project !!!!
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = AudioGenerator;

function AudioGenerator(){
    this.trackObject;
}

AudioGenerator.prototype.generate = function(trackData){
    try{
        console.log(typeof trackData);
        console.log(trackData);
        var param = trackData.getObject();
        var synthesizer = new Tone.Synth(param).toMaster();
        this.trackObject = synthesizer;
    }catch(error){
        console.error(error);
    }
}

AudioGenerator.prototype.play = function(note){
    try{
        this.trackObject.triggerAttack(note);
        this.trackObject.triggerRelease(3);
    }catch(error){
        console.error(error);
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TrackData = __webpack_require__(9);

module.exports = ProjectModel;

function ProjectModel(){
    this.name = name;
    this.trackDataList = [];
}

/*ProjectModel.prototype.setName(name){
    this.name = name;
}

ProjectModel.prototype.setTracks(trackDataList){
    this.trackDataList = trackDataList;
}*/

ProjectModel.prototype.createTrackDataList = function(streamList){
    var i;
    var envelope;
    var oscillator;
    this.trackDataList.length = 0;
	for(i = 0; i < streamList.length; ++i){
	    oscillator = streamList[i]["oscillator"];
	    envelope = streamList[i]["envelope"];
	    this.trackDataList[i] = new TrackData(oscillator, envelope);
	}
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TrackData;

function TrackData(oscillator, envelope){
    this.oscillator = oscillator;
    this.envelope = envelope;
}

TrackData.prototype.getOscillatorData = function(){
    return this.oscillator;
}

TrackData.prototype.getEnvelopeData = function(){
    return this.envelope;
}

TrackData.prototype.setOscillatorData = function(object){
    this.oscillator = object;
}

TrackData.prototype.setEnvelopeData = function(object){
    this.envelope = object;
}

TrackData.prototype.getObject = function(){
    var result = {};
    result["oscillator"] = this.oscillator;
    result["envelope"] = this.envelope;
    return result;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = AudioHelper;

function AudioHelper(){}

AudioHelper.getAudioContextBuffer = function(context){
    var contextConstants = context._constants;
    var audioBufferSourceNode = contextConstants[1];
    var buffer = audioBufferSourceNode.buffer;
    return buffer;
}

AudioHelper.merge = function(context, buffer1, buffer2){
    // add comparison channel numbers
    var i;
    var newLength = buffer1.length + buffer2.length;
    var track = context.createBuffer(buffer1.numberOfChannels, newLength, buffer1.sampleRate);
    for(i = 0; i < track.numberOfChannels; ++i){
        var data = track.getChannelData(i);
        data.set(buffer1.getChannelData(i));
        data.set(buffer2.getChannelData(i), buffer1.length);
    }
    return track;
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(4);
var AudioHelper = __webpack_require__(10);

module.exports = TrackManager;

function TrackManager(){}

// get array with Tone.Synth
TrackManager.mergeTracks = function(trackList){
    var i;
    var nextIndex;
    var currentBuffer;
    var nextBuffer;
    var currentTrack = trackList[0];
    var currentTrackContext = currentTrack._context;
    console.log(currentTrackContext);
    var nextTrackContext;
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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AudioPlayer = __webpack_require__(6);

module.exports = function(result){
    if(result instanceof Error){
        console.error(result);
    } else{
        var audioPlayer = new AudioPlayer(result);
        audioPlayer.play("C5");
    }
    //audioPlayer.save("save");
    /*var i;
    var track;
    var envelope;
    var oscillator;
    var audioGenerator;
	var track_list = [];
	for(i = 0; i < tracks.length; ++i){
	    oscillator = tracks[i]["oscillator"];
	    envelope = tracks[i]["envelope"];
	    track = new Track(oscillator, envelope);
	    console.log("track");
	    console.log(track);
        audioGenerator = new AudioGenerator(track);
	    track_list[i] = audioGenerator.generate("C4");
	}

    var next;
    var buffer1;
    var buffer2;
    var currentTrack = track_list[0];
    var context = currentTrack._context;
    buffer1 = Helper.getAudioContextBuffer(currentTrack._context);
	for(i = 0; i < track_list.length; ++i){
	    next = i + 1;
	    if(next !== track_list.length){
            buffer2 = Helper.getAudioContextBuffer(track_list[next]._context);
            currentTrack = TrackManager.merge(context, buffer1, buffer2);
            buffer1 = currentTrack;  // put new audiobuffer was created from past track
        }
	}
	console.log("-------");
	console.log(currentTrack);*/
};


/***/ })
/******/ ]);