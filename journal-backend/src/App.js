var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');



});
app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

//todo: legg inn mongodb tilkobling og lag ett endepunkt for test av database.