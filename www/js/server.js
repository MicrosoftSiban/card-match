var express = require('express')
var path = require('path')
var port = 3000

function send(request, response) {
	var file = request.url
	var workingdirectory = '/home/cabox/workspace/card-match/www'
	
	if(request.url == '/') file = '/html/index.html'
	
	console.log(workingdirectory + file)
	response.sendFile(workingdirectory + file)
}

var server = express()

// IMPROVE: Something breaks with the MIME (abakasam/abakasam #167), write to only have to serve /, include HTML updates
server.get('/', send)
server.get('/html/index.html', send)
server.get('/html/upload.html', send)
server.get('/js/app.js', send)
server.get('/js/application.js', send)
server.get('/js/index.js', send)
server.get('/css/bootstrap.min.css', send)
server.get('/css/navbar-top-fixed.css', send)
server.get('/css/style.css', send)
server.get('/html/cards/flashcards-page-*', send)

server.listen(port, function() {
	console.log('hello')
})