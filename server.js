var fs = require('fs');
var express = require('express');
var algos = require('./algo');
var engines = require('consolidate');
var path = require('path');
var controllers = require('./controllers');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/db').User;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('static'));
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

passport.use('local', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'pass'
  },
  function(username, password, done) {
    console.log('Auth attempt start...')
    User.findOne({email: username}, function(err, user) {
      if (err) { return done(err); }
      if (!user){
        console.log('AUTH: Incorrect Username');
        return done(null, false);
      }
      if(!user.validPassword(password)){
        console.log('AUTH: Incorrect Password');
        return done(null, false)
      }
      console.log('AUTH: Valid Username and Password');
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// server config
//app.use(express.session({ secret: 'keyboard cat!' }));
app.use(passport.initialize());
// app.use(passport.session());

app.use(controllers(passport));

app.get('/fibonacci/:number', function(req, res){
  var numfib = req.params.number;
  var fib = algos.fibonacci(numfib);
  res.send('the ' + numfib + ' fibonacci number is ' + fib);
});

var server = app.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});
