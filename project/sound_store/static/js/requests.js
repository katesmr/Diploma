$(document).ready(function(){

	var context = new (window.AudioContext || window.webkitAudioContext)();
	var audioSrc = 'static/audio/Hit_Hurt10.wav'

	fetch(audioSrc, function(request) {
		var audioData = request.response;
		var blob = new Blob([audioData], {type: 'audio/x-wav'});

		var formdata = new FormData();
		formdata.append('useradio', blob, 'test.wav');

		$.ajax({
			url: "user/sound/save/2/",
			type: "POST",
			data: formdata,
			mimeTypes: "multipart/form-data",
			contentType: false,
			cache: false,
			processData: false,
			success: function(){
				console.log("successfully submitted");
			},
			error: function(err){
				console.error(err);
			}
		});
	});

	/*$.ajax({
		method: "GET",
		url: "user/all/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "GET",
		url: "/user/sounds/1/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "POST",
		url: "user/create/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		data: JSON.stringify({"name": "name",
		                      "email": "email",
		                      "gender": "female",
		                      "birthday": "1987-12-06"}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "POST",
		url: "/user/delete/4/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

    $.ajax({
		method: "POST",
		url: "user/sound/remove/2/",
		dataType: "text",
		headers: {
			'Content-Type':'text'
		},
		cache: false,
		data: "audio.wav",
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});*/

	$.ajax({
		method: "POST",
		url: "user/sound/upload/1/",
		dataType: "text",
		headers: {
			'Content-Type':'text'
		},
		cache: false,
		data: "audio.wav",
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});
});

function fetch (url, resolve){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
	request.onload = function(){
	    resolve(request);
	}
	request.send()
}
