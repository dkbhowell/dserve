var express = require('express');
var User = require('../models/db').User;




module.exports = function(passport){
  var router = express.Router();

  router.use(function timeLog(req, res, next){
    console.log('User Router - Time: ', Date.now());
    next();
  });

  router.get('/', function(req, res){
    User.find({}, function(err, users){
      res.render('users/index', {users: users});
    });
  });

  return router;
};
