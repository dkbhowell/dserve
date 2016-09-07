var express = require('express');
var router = express.Router();

var authRouter = require('./auth');
var userRouter = require('./users');

router.use('/auth', authRouter);
router.use('/users', userRouter);

router.get('/', function(req, res){
  res.render('login');
});

module.exports = router;
