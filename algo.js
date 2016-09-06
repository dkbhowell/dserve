

exports.fibonacci = function(n){
  var a = 0;
  var b = 1;
  var fib;
  for(var i = 0; i < n; i++){
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}
