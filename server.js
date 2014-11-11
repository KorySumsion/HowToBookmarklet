var Express = require('express');



var app = Express();


app.use(Express.static(__dirname + '/public'));





app.listen(8888, function(){
	console.log('serving up the bookmarklet on port 8888')
})