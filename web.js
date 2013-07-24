var express = require('express');
var app = express();
app.use(express.logger());



app.get('/', function(request, response) {


var fs = require('fs')
  , filename = 'index.html';

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  response.send(data);

});


});


/*
app.get('/', function(request, response) {
  response.send('Hello World 3!');
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
