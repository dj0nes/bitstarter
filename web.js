var express = require('express');
var app = express();
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PROT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
