var Express = require('express');
var BodyParser = require('body-parser');


var app = Express();


app.use(Express.static(__dirname + '/public'));
app.use(BodyParser.json());




app.listen(8888, function(){
	console.log('serving up the bookmarklet on port 8888')
})