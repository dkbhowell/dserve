var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var dburl = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(dburl);
var dbconn = mongoose.connection;

dbconn.on('error', console.error.bind(console, 'connection error:'));
dbconn.once('open', function(){
  console.log('DB Connected: ' + dburl);
});

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  name: {
    first: String,
    last: String,
    full: String
  }
});

userSchema.methods.isValidPassword = function(pass){
  return bcrypt.compareSync(pass, this.password);
}

exports.User = mongoose.model('User', userSchema);
