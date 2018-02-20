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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Track = __webpack_require__(9);
var AudioGenerator = __webpack_require__(8);

module.exports = function(tracks){
    var i;
    var track;
    var envelope;
    var oscillator;
    var audioGenerator;
	var track_list = [];
	for(i = 0; i < tracks.length; ++i){
	    oscillator = tracks[i]["oscillator"];
	    envelope = tracks[i]["envelope"];
	    track = new Track(oscillator, envelope);
	    console.log(track);
        audioGenerator = new AudioGenerator(track);
	    audioGenerator.generate("C4");
	}
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
    $.ajax({
		method: "POST",
		url: "projects/create/project1.json/",
		dataType: "text",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		data: JSON.stringify({"oscillator": {"type" : "sine", "frequency" : 400, "volume": 5},
                              "envelope": {"attack" : 0.02, "decay" : 0.1, "sustain" : 0.2, "release" : 0.9}}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
    $.ajax({
		method: "POST",
		url: "projects/delete/project1.json/",
		dataType: "text",
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


var toWav = __webpack_require__(6);

module.exports = function(){
    var s1 = new Tone.Synth({"oscillator": {"type": "square", "frequency": 800},
                             "envelope": {"sustain": 0.5, "release": 0.9, "decay": 0.1, "attack": 0.05}}).toMaster();
    var s2 = new Tone.Synth({"oscillator": {"type": "sine", "frequency": 400, "volume": 20}}).toMaster();
    s1.triggerAttack("C4");
    s1.triggerRelease("8n");
    s2.triggerAttack("C4");
    s2.triggerRelease("8n");

    console.log(s1.context);
    console.log(s2.context);

    function getBuffer(context){
        var context_constants = context._constants;
        var audiobuffer_source_node = context_constants[1];
        var buffer = audiobuffer_source_node.buffer;
        console.log(buffer);
        return buffer;
    }

    function concatenateAudioBuffers(context, buffer1, buffer2) {
        if (!buffer1 || !buffer2) {
            console.log("no buffers!");
            return null;
        }
        if (buffer1.numberOfChannels != buffer2.numberOfChannels) {
            console.log("number of channels is not the same!");
            return null;
        }
        if (buffer1.sampleRate != buffer2.sampleRate) {
            console.log("sample rates don't match!");
            return null;
        }
        var tmp = context.createBuffer(buffer1.numberOfChannels, buffer1.length + buffer2.length, buffer1.sampleRate);
        for (var i=0; i<tmp.numberOfChannels; ++i) {
            var data = tmp.getChannelData(i);
            data.set(buffer1.getChannelData(i));
            data.set(buffer2.getChannelData(i), buffer1.length);
        }
        return tmp;
    };

    var buf1 = getBuffer(s1.context);
    var buf2 = getBuffer(s2.context);
    var new_audio = concatenateAudioBuffers(s1.context, buf1, buf2);
    console.log(new_audio);

    saveData(new_audio, "test.wav");
};

var saveData = (function(){
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function(audiobuffer, fileName){
        console.log(audiobuffer);

        var arrbuff = toWav(audiobuffer, {float32: true})
        console.log(arrbuff);

        var blob = new Blob([arrbuff], {"type": "audio/x-wav"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create_track = __webpack_require__(0);

module.exports = function(){
    $.ajax({
		method: "GET",
		url: "projects/project0.json/",
		dataType: "json",
		cache: false,
		success: function(data){
			create_track(data);
		},
		error: function(status){
			console.error(status);
		}
	});
};


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var test_requests = __webpack_require__(0);
var project_data = __webpack_require__(4);
var projects_data = __webpack_require__(5);
var project_creation = __webpack_require__(1);
var project_deletion = __webpack_require__(2);
var merger = __webpack_require__(3);

module.exports = {
	//"test_requests": test_requests,
	//"project_data": project_data,
	"merger": merger,
	//"projects_data": projects_data,
	//"project_creation": project_creation,
	//"project_deletion": project_deletion
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = AudioGenerator;

function AudioGenerator(track){
    this.track = track;
}

AudioGenerator.prototype.generate = function(note){
    try{
        var param = this.track.getObject();
        console.log("param");
        console.log(param);
        var synthesizer = new Tone.Synth(param).toMaster();
        synthesizer.triggerAttack(note);
        synthesizer.triggerRelease("2n");
    } catch(error){
        console.error(error);
    }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Track;

function Track(oscillator, envelope){
    this.oscillator = oscillator;
    this.envelope = envelope;
}

Track.prototype.getOscillatorData = function(){
    return this.oscillator;
}

Track.prototype.getEnvelopeData = function(){
    return this.envelope;
}

Track.prototype.setOscillatorData = function(object){
    this.oscillator = object;
}

Track.prototype.setEnvelopeData = function(object){
    this.envelope = object;
}

Track.prototype.getObject = function(){
    var result = {};
    result["oscillator"] = this.oscillator;
    result["envelope"] = this.envelope;
    return result;
}


/***/ })
/******/ ]);