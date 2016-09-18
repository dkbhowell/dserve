var express = require('express');
var validator = require('../static/js/misc/validate');
var User = require('../models/db').User;
var bcrypt = require('bcrypt');

module.exports = function(passport){
  var router = express.Router();

  router.use(function timeLog(req, res, next){
    console.log('Auth Router - Time: ', Date.now());
    next();
  });

  router.get('/login', function(req, res){
    res.render('auth/login');
  });

  router.post('/account/create', function(req, res){
    var email = req.body.email;
    var pwd1 = req.body.pass1;
    var pwd2 = req.body.pass2;
    var results = [];
    var errors = [];

    var validEmail = validator.isValidEmail(email);
    var passMatch = pwd1 === pwd2;
    var validPass = validator.isValidPassword(pwd1, 8);
    results.push(validEmail, passMatch, validPass);
    console.log(results);

    if(results.indexOf(false) > -1){
      res.send("Invalid Account Creation Details");
    }

    // values are valid
    // check to see if account exists
    User.findOne({email:email}, function(err, user){
      if(err){
        console.log(err);
        res.send("An Internal Error Occurred (DB)");
      }
      if(user){
        res.send("User Found <br>" + JSON.stringify(user));
      }else{
        // create user
        bcrypt.hash(pwd1, 10, function(err, hash){
          var newUser = new User({
            email: email,
            password: hash
          });
          newUser.save(function(err, newUser){
            if(err){
              res.send("Error Saving to DB");
            }
            res.send("New User Created <br>" + JSON.stringify(newUser));
          });
        });
      }
    });

    // res.render('auth/login', {errors: ["error 1", "error 2"]});
  });

  router.post('/account/login', function(req, res, next){
    var email = req.body.email;
    var pwd = req.body.pass;
    console.log(req.body);
    if(!email || !pwd){
      res.render('auth/login', { errors:["Invalid Email or Password"] } );
    }else{
      console.log ('About to try auth - email: ' + email + ', pwd: ' + pwd);
      passport.authenticate('local', function(err, user, info){
        if(err) { return next(err); }
        if(!user) { return res.redirect('/login'); }
        console.log("user found: logging into session");
        console.log(user);
        console.log(req.logIn);
        req.login(user, function(err){
          if(err) { return next(err); }
          console.log("login user called");
          return res.redirect('/');
        })
      })(req, res, next);
    }
  });

  return router;
};
