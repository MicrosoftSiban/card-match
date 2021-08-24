var express = require('express');
var server = express();
var port = 8086

server.post('/upload', function(request, response) {
    console.log(request);
})

server.listen(port, function() {
    console.log('Express server currently running on port ' + port)
})