var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.status(200).send('Hello, world!').end();
});
var port=process.env.PORT || 8080;

app.listen(port, function(){
  console.log('App listening on '+port);
  console.log('Press Ctrl+C to quit.');
});
