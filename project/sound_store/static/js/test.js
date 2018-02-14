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
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toWav = __webpack_require__(6)

module.exports = function(){
	/*var conductor = new BandJS();
	conductor.setTimeSignature(4,4);
	conductor.setTempo(120);
	var piano = conductor.createInstrument();
	piano.note('quarter', 'C4');
    piano.note('quarter', 'D4');
    piano.note('quarter', 'E4');
    piano.note('quarter', 'F4');
    var player = conductor.finish();
    player.play();

    var context = conductor.audioContext;
    */
    var synth = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    //synth.triggerAttackRelease("C4", "8n");
    var synth2 = new Tone.Synth({
        "oscillator" : {
            "type" : "pwm",
            "modulationFrequency" : 0.2
        },
        "envelope" : {
            "attack" : 0.02,
            "decay" : 0.1,
            "sustain" : 0.2,
            "release" : 0.9
        }
    }).toMaster();

    //synth2.triggerAttackRelease("D3", "8n");

    var cntxt = synth2.context;
    console.log(synth2);
    console.log(cntxt);
    var context_constants = cntxt._constants;
    var audiobuffer_source_node = context_constants[1];
    var buffer = audiobuffer_source_node.buffer;
    // console.log(cntxt._constants[1].buffer);
    console.log(buffer);

    saveData(buffer, "test.wav");
};

var saveData = (function(){
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function(audiobuffer, fileName){
        console.log(audiobuffer);

        //var buff = audiobuffer.getChannelData(audiobuffer.numberOfChannels - 1);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
	$.ajax({
		method: "GET",
		url: "sounds/download/new.wav/",
		cache: false,
		dataType: "binary",
        processData: false,
		success: function(data){
			saveData(data, "test.wav");
		},
		error: function(status){
			console.error(status);
		}
	});
};

var saveData = (function(){
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function(data, fileName){
        var blob = new Blob([data], {"type": "audio/x-wav"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
	$.ajax({
		method: "GET",
		url: "sounds/",
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


module.exports = function(msg){
	console.log(msg);
};



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(){
	$.ajax({
		method: "GET",
		url: "sounds/test.wav/",
		dataType: "binary",
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
    console.log(blobObject);
	var audioData;
	var context = new AudioContext(); // Create and Initialize the Audio Context
    var reader = new FileReader();
    // event handler executed when the load readAsArrayBuffer
    reader.onload = function() {
       // reader.result contains the contents of blob as a typed array
        var arrayBuffer = reader.result;
        context.decodeAudioData(arrayBuffer, function(buffer) {
            audioData = buffer;
        });

        window.addEventListener("keydown",onKeyDown); // Create Event Listener for KeyDown
        function onKeyDown(e){
            switch (e.keyCode) {
                // X
                case 88:
                    console.log("+");
                    var playSound = context.createBufferSource(); // Declare a New Sound
                    playSound.buffer = audioData; // Attatch our Audio Data as it's Buffer
                    playSound.connect(context.destination);  // Link the Sound to the Output
                    playSound.start(0); // Play the Sound Immediately
                break;
            }
        }
    };
    // convert blob to ArrayBuffer for playing on page
    reader.readAsArrayBuffer(blobObject);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var test_requests = __webpack_require__(3);
var get_sounds = __webpack_require__(2);
var upload_sound = __webpack_require__(4);  // require = import
var download_sound = __webpack_require__(1);
var audio_generation_test = __webpack_require__(0);

module.exports = {
	"test_requests": test_requests,
	"get_sounds": get_sounds,
	"upload_sound": upload_sound,
	"download_sound": download_sound,
	"audio_generation_test": audio_generation_test
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


/***/ })
/******/ ]);