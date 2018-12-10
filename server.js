var express = require("express");
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  app.use(express.static(__dirname + '/'));
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/*.html', function (req, res) {
  app.use(express.static(__dirname + '/'));
  var requestUrlPath = req.url.split('/').pop();
  res.sendFile(path.join(__dirname + '/' + requestUrlPath));
});

var port = process.env.PORT || 1234;
app.listen(port);

console.log("Listening in port "+ port);
