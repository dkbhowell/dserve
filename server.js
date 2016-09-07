var fs = require('fs');
var express = require('express');
var algos = require('./algo');
var engines = require('consolidate');
var path = require('path');
var controllers = require('./controllers');

var app = express();

// server config
app.use(controllers);
app.use(express.static('static'));
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/fibonacci/:number', function(req, res){
  var numfib = req.params.number;
  var fib = algos.fibonacci(numfib);
  res.send('the ' + numfib + ' fibonacci number is ' + fib);
});

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
