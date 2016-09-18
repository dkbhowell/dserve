var express = require('express');

module.exports = function(passport){
  var mainRouter = express.Router();

  var authRouter = require('./auth')(passport);
  var userRouter = require('./users')(passport);

  mainRouter.use('/auth', authRouter);
  mainRouter.use('/users', userRouter);

  mainRouter.get('/', function(req, res){
    console.log(req.user);
    res.render('index', {user:req.user});
  });

  return mainRouter;
};
