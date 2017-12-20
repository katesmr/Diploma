document.addEventListener("DOMContentLoaded", function(){
	
	function postAsync(url, params, callback){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-type", "application/json; character=utf-8");
		xhr.onreadystatechange = function() { 
			if (this.readyState === 4){
				if (this.status === 200) {
					callback(this.status, this.responseText);
				} 
				else {
					callback(this.status, null);
				}
			}
		}
		xhr.send(JSON.stringify(params));
	}

	function getAsync(url, callback){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.setRequestHeader("Content-type", "application/json; character=utf-8");
		xhr.onreadystatechange = function() {
			if (this.readyState === 4){
				if (this.status === 200) {
					callback(this.status, this.responseText);
				}
				else {
					callback(this.status, null);
				}
			}
		}
		xhr.send();
	}
	
	setTimeout(function(){
		postAsync("/sound/", {"path": "test222"}, function(status, responseText){
				if (null === responseText){
					console.log(status);
				} else{
					console.log(responseText);
				}
			});
	}, 2000);

	setTimeout(function(){
		getAsync("/sound/", function(status, responseText){
				if (null === responseText){
					console.log(status);
				} else{
				    console.log("dataaaaaaaaa")
					console.log(responseText);
				}
			});
	}, 2000);

	setTimeout(function(){
		getAsync("/sound/9", function(status, responseText){
				if (null === responseText){
					console.log(status);
				} else{
				    console.log("data3")
					console.log(responseText);
				}
			});
	}, 2000);

}, false);
