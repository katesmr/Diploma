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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Track = __webpack_require__(5);
var AudioGenerator = __webpack_require__(4);

module.exports = function(data){
	console.log(data);
	// var track = new Track(data["oscillator"], data["envelope"]);
	// var audioGenerator = new AudioGenerator(track);
	// audioGenerator.generate("C4");
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


var create_track = __webpack_require__(0);

module.exports = function(){
    $.ajax({
		method: "GET",
		url: "projects/project1.json/",
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var test_requests = __webpack_require__(0);
var project_data = __webpack_require__(2);
var projects_data = __webpack_require__(7);
var project_creation = __webpack_require__(1);
var project_deletion = __webpack_require__(6);

module.exports = {
	//"test_requests": test_requests,
	"project_data": project_data,
	"projects_data": projects_data,
	//"project_creation": project_creation,
	"project_deletion": project_deletion
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = AudioGenerator;

function AudioGenerator(track){
    this.track = track;
}

AudioGenerator.prototype.generate = function(note){
    var synthesizer = new Tone.Synth(this.track.getObject()).toMaster();
    synthesizer.triggerAttack(note);
    synthesizer.triggerRelease();
    //synth.triggerAttackRelease("D3", "4n");
    //var synth2 = new Tone.Synth().toMaster().triggerAttackRelease(-9, "4n");
    //var synth = new Tone.Oscillator({type : "sine" , frequency : 400}).toMaster().start();
    //var synth = new Tone.Oscillator(400, this.track.getOscillatorData()).toMaster().start();
}

AudioGenerator.prototype.generateOscillator = function(stopTime){
    var oscillator = new Tone.Oscillator(this.track.getOscillatorData());
    oscillator.start();
    oscillator.stop(stopTime);
}


/***/ }),
/* 5 */
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


/***/ }),
/* 6 */
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
/* 7 */
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


/***/ })
/******/ ]);