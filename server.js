var fs = require('fs');
var express = require('express');
var algos = require('./algo');
var engines = require('consolidate');
var userRouter = require('./route/users.js');

var app = express();
var users = [];

// server config
app.use('/users', userRouter);
app.use(express.static('static'));
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// routing
app.get('/', function(req, res) {
  res.render('index', {users: users});
});

app.get('/users', function(req, res){
  var response = ''
  users.forEach(function(user){
    response += '<a href="/' + user.username + '">' + user.name + ' <br>';
  })
  res.send(response)
});

app.get('/:username', function(req, res){
  var username = req.params.username
  res.send(username);
});

app.get('/fibonacci/:number', function(req, res){
  var numfib = req.params.number;
  var fib = algos.fibonacci(numfib);
  res.send('the ' + numfib + ' fibonacci number is ' + fib);
});

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
