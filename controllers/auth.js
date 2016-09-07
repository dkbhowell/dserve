var express = require('express');
var router = express.Router();
var User = require('../models/db').User;

router.use(function timeLog(req, res, next){
  console.log('User Router - Time: ', Date.now());
  next();
});

router.get('/login', function(req, res){
  res.render('auth/login');
  // var path2 = path.join(__dirname,'static/html/login.html');
  // res.sendFile(path2);
})


module.exports = router;
