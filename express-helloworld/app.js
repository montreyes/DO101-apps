var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8089, function () {
  console.log('Example app listening on port 8089!');
});

