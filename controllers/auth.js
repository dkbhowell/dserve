var express = require('express');

module.exports = function(passport){
  var router = express.Router();

  router.use(function timeLog(req, res, next){
    console.log('Auth Router - Time: ', Date.now());
    next();
  });

  router.get('/login', function(req, res){
    console.log('Query');
    console.log(req.query);

    res.render('auth/login');
  });

  // router.post('/login',
  // passport.authenticate('local', { successRedirect: '/',
  //                                  failureRedirect: '/auth/login',
  //                                  failureFlash: true })
  // );

  router.post('/login', function(req, res){
    console.log('Body');
    console.log(req.body);
    // console.log(req);
    var email = req.body.username;
    var pwd = req.body.password;
    console.log('passport obj');
    console.log(passport);
    if(!email || !pwd){
      res.render('auth/login');
    }else{
      console.log ('About to try auth - email: ' + email + ', pwd: ' + pwd);
      passport.authenticate('local', { successRedirect: '/', failureRedirect: '/auth/login' })(req, res);
    }
  });

  return router;
};
