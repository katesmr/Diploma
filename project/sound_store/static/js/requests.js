// http://middleearmedia.com/web-audio-api-audio-buffer/

$(document).ready(function(){

	// var context = new (window.AudioContext || window.webkitAudioContext)();
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
		// dataType: "json",
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
		// dataType: "json",
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

    /*$.ajaxSetup({
        beforeSend:function(jqXHR,settings){
            if (settings.dataType === 'binary'){
                settings.xhr().responseType='arraybuffer';
                settings.processData=false;
            }
        }
    })*/

	$.ajax({
		method: "POST",
		url: "user/sound/upload/1/",
		cache: false,
		// async: false,
		data: "test.wav",
		dataType: "binary",
        processData: false,
		success: function(data){
			saveData(data, "name.wav");
		},
		error: function(status){
			console.error(status);
		}
	});
});

function fetch(url, resolve){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
	request.onload = function(){
	    resolve(request);
	}
	request.send()
}

var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        //var blob = new Blob([data], {type: "audio/x-wav"});
        var blob = new Blob([data], {"type": "audio/x-wav"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

// use this transport for "binary" data type
$.ajaxTransport("+binary", function(options, originalOptions, jqXHR){
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType && (options.dataType == 'binary')) ||
       (options.data && ((window.ArrayBuffer && options.data instanceof ArrayBuffer) ||
       (window.Blob && options.data instanceof Blob)))))
    {
        return {
            // create new XMLHttpRequest
            send: function(headers, callback){
                // setup all variables
                var xhr = new XMLHttpRequest(),
                url = options.url,
                type = options.type,
                async = options.async || true,
                // blob or arraybuffer. Default is blob
                dataType = options.responseType || "blob",
                data = options.data || null,
                username = options.username || null,
                password = options.password || null;

                xhr.addEventListener('load', function(){
                    var data = {};
                    data[options.dataType] = xhr.response;
                    // make callback and send data
                    callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders());
                });
                xhr.open(type, url, async, username, password);

                // setup custom headers
                for (var i in headers ) {
                    xhr.setRequestHeader(i, headers[i] );
                }
                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function(){
                jqXHR.abort();
            }
        };
    }
});
