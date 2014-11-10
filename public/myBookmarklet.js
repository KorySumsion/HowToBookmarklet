(function() {

	var v = "2.1.1";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		//tried changing to body instead of head based on stack overflow recommendation that it would run before the body finished . . 
		document.getElementsByTagName("body")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	alert('hello world');

	var p = document.createElement("h1");
	var text = document.createTextNode("hello there, thanks for using me")
	p.appendChild(text)
	document.getElementsByTagName("body")[0].appendChild(p)

})();