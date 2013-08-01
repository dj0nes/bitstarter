var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";

app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});


http.createServer(app).listen(app.get('port'), function(){ 
            console.log('Server started at ' + app.get('port')); 
      });
