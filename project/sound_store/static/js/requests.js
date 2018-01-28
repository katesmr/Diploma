// http://middleearmedia.com/web-audio-api-audio-buffer/

$(document).ready(function(){

	// var context = new (window.AudioContext || window.webkitAudioContext)();

	/*$.ajax({
		method: "GET",
		url: "users/",
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
		url: "users/create/",
		dataType: "json",
		cache: false,
		data: JSON.stringify({"name": "test",
		                      "email": "email"}),
		success: function(data){
			console.log(data);
			console.log("User created.");
		},
		error: function(status){
			console.error(status);
		}
	});*/

	/*$.ajax({
		method: "POST",
		url: "/users/delete/3/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		success: function(data){
			console.log(data);
			console.log("User deleted.");
		},
		error: function(status){
		    if(status.status === 403 || status.status != 200){
                console.log(status.responseText);
            }
			console.error(status);
		}
	});*/

	$.ajax({
		method: "POST",
		url: "/users/update/6/",
		dataType: "json",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		data: JSON.stringify({"name": "new",
		                      "email": "new",}),
		success: function(data){
			console.log(data);
			console.log("User updated.");
		},
		error: function(status){
            if(status.status === 403 || status.status != 200){
                console.log(status.responseText);
            }
			console.error(status);
		}
	});

    /*$.ajax({
		method: "GET",
		url: "sounds/",
		dataType: "json",
		data: {"user_id": 2},
		cache: false,
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});*/

	/*$.ajax({
		method: "POST",
		url: "sounds/test.wav/",
		data: JSON.stringify({"user_id": 1}),
		dataType: "binary",
		cache: false,
		processData: false,
		success: function(data){
			playSound(data);
			console.log("user sound upload successfully");
		},
		error: function(status){
			if(status.status === 403 || status.status != 200){
                console.log(status.responseText);
            }
			console.error(status);
		}
	});*/

	/*var audioSrc = 'static/audio/Hit_Hurt10.wav'

	fetch(audioSrc, function(request){
		var audioData = request.response;
		var blob = new Blob([audioData], {type: 'audio/x-wav'});

		var formdata = new FormData();
		formdata.append('user_audio', blob, 'test.wav');
		formdata.append('user_id', 2);

		$.ajax({
			method: "POST",
			url: "sounds/create/new.wav/",
			data: formdata,
			mimeTypes: "multipart/form-data",
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.error(err);
			}
		});
	});

    $.ajax({
		method: "POST",
		url: "sounds/delete/test (copy).wav/",
		dataType: "text",
		headers: {
			'Content-Type':'text'
		},
		cache: false,
		data: JSON.stringify({"user_id": 2}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "POST",
		url: "sounds/download/test.wav/",
		cache: false,
		data: JSON.stringify({"user_id": 1}),
		dataType: "binary",
        processData: false,
		success: function(data){
			saveData(data, "name.wav");
			console.log("user sound download successfully");
		},
		error: function(status){
		    // show message from server if status equal status from server
            if(status.status === 403 || status.status != 200){
                console.log(status.responseText);
            }
			console.error(status);
		}
	});*/

	/*$.ajax({
		method: "GET",
		url: "projects/",
		dataType: "json",
		data: {"user_id": 2},
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
		url: "projects/test.json/",
		dataType: "json",
		data: {"user_id": 2},
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
		url: "/projects/create/project1.json/",
		dataType: "text",
		headers: {
			'Content-Type':'application/json'
		},
		cache: false,
		data: JSON.stringify({"project": {"stream": ["path", "path"], "name": "", "settings": {}},
		                      "user_id": 2}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "POST",
		url: "/projects/delete/test.json/",
		dataType: "text",
		cache: false,
		data: JSON.stringify({"user_id": 2}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});

	$.ajax({
		method: "POST",
		url: "/projects/update/project1.json/",
		dataType: "text",
		cache: false,
		data: JSON.stringify({"project": {"stream": ["test", "test"], "name": "", "settings": {}},
		                      "user_id": 2}),
		success: function(data){
			console.log(data);
		},
		error: function(status){
			console.error(status);
		}
	});*/
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

function playSound(sound){
	var context = new AudioContext(); // Create and Initialize the Audio Context
    console.log(sound);
	window.addEventListener("keydown",onKeyDown); // Create Event Listener for KeyDown

	function onKeyDown(e){
		switch (e.keyCode) {
			// X
			case 88:
				var playSound = context.createBufferSource(); // Declare a New Sound
				playSound.buffer = sound; // Attatch our Audio Data as it's Buffer
				playSound.connect(context.destination);  // Link the Sound to the Output
				playSound.start(0); // Play the Sound Immediately
			break;
		}
 	}
}
