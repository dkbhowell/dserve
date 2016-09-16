var validator = require('validator');

exports.isValidEmail = function(email){
  return validator.isEmail(email);
}

exports.isValidPassword = function(pwd, minLength){
  if(!minLength){
    minLength = 8;
  }

  var length = pwd.length;
  var validLength = length >= minLength;

  var isAlphaNum = validator.isAlphanumeric(pwd);

  if(validLength && isAlphaNum){
    return true;
  }
  return false;
}
