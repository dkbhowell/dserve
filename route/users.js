var express = require('express');
var router = express.Router();
var User = require('../db').User;

router.use(function timeLog(req, res, next){
  console.log('User Router - Time: ', Date.now());
  next();
});

router.get('/', function(req, res){
  User.find({}, function(err, users){
    res.render('index', {users: users});
  });
});


module.exports = router;
