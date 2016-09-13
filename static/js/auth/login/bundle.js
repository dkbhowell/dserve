(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// get element references
var loginForm = document.getElementById("login_form");
var loginSubmit = document.getElementById("login_form_submit");

var createForm = document.getElementById("create_form");
var createSubmit = document.getElementById("create_form_submit");

var toggleButton = document.getElementById("btn_toggle_forms");

// add listeners
loginSubmit.onclick = validateLoginForm;
createSubmit.onclick = validateCreateForm;
toggleButton.onclick = toggleForms;

function validateCreateForm(){
  return false;
}

function validateLoginForm(){
  // console.log(document.forms["login_form"])
  console.log("validating login form");
  var email = loginForm.username.value;
  var pass = loginForm.password.value;
  console.log("form values - " + email + ", " + pass);
  var validEmail = valEmail(email);
  var validPass = valPassword(pass);
  var errors = []

  if(!validEmail){
    errors.push("Invalid Email Address");
  }
  if(!validPass){
    errors.push("Invalid Password");
  }
  if(errors.length > 0){
    showErrors(errors);
  }
  return validEmail && validPass;
}

function valEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function valPassword(pass) {
  console.log("length of pass: " + pass.length);
  if(pass.length < 6){
    return false;
  }
  return true;
}

function valPasswords(pass1, pass2) {
  return false;
}

function showErrors(errors){
  var errorParagraph = document.getElementById("errors");
  var errorText = ""
  for (var i = 0; i < errors.length; i++){
    errorText += errors[i] + "<br />"
  }
  errorParagraph.innerHTML = errorText;
}

// after
document.getElementById("form_login").style.display = "block";
document.getElementById("form_create_account").style.display = "none";

function toggleForms(){
  var formRay = [loginForm, createForm]
  for(var i = 0; i < formRay.length; i++){
    var form = formRay[i];
    if(form.style.display == "none"){
      form.style.display = visDisplay;
    }else{
      form.style.display = "none";
    }
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni40LjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3RhdGljL2pzL2F1dGgvbG9naW4vbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBnZXQgZWxlbWVudCByZWZlcmVuY2VzXG52YXIgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbl9mb3JtXCIpO1xudmFyIGxvZ2luU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbl9mb3JtX3N1Ym1pdFwiKTtcblxudmFyIGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9mb3JtXCIpO1xudmFyIGNyZWF0ZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2Zvcm1fc3VibWl0XCIpO1xuXG52YXIgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5fdG9nZ2xlX2Zvcm1zXCIpO1xuXG4vLyBhZGQgbGlzdGVuZXJzXG5sb2dpblN1Ym1pdC5vbmNsaWNrID0gdmFsaWRhdGVMb2dpbkZvcm07XG5jcmVhdGVTdWJtaXQub25jbGljayA9IHZhbGlkYXRlQ3JlYXRlRm9ybTtcbnRvZ2dsZUJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlRm9ybXM7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3JlYXRlRm9ybSgpe1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTG9naW5Gb3JtKCl7XG4gIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmZvcm1zW1wibG9naW5fZm9ybVwiXSlcbiAgY29uc29sZS5sb2coXCJ2YWxpZGF0aW5nIGxvZ2luIGZvcm1cIik7XG4gIHZhciBlbWFpbCA9IGxvZ2luRm9ybS51c2VybmFtZS52YWx1ZTtcbiAgdmFyIHBhc3MgPSBsb2dpbkZvcm0ucGFzc3dvcmQudmFsdWU7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSB2YWx1ZXMgLSBcIiArIGVtYWlsICsgXCIsIFwiICsgcGFzcyk7XG4gIHZhciB2YWxpZEVtYWlsID0gdmFsRW1haWwoZW1haWwpO1xuICB2YXIgdmFsaWRQYXNzID0gdmFsUGFzc3dvcmQocGFzcyk7XG4gIHZhciBlcnJvcnMgPSBbXVxuXG4gIGlmKCF2YWxpZEVtYWlsKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiKTtcbiAgfVxuICBpZighdmFsaWRQYXNzKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgUGFzc3dvcmRcIik7XG4gIH1cbiAgaWYoZXJyb3JzLmxlbmd0aCA+IDApe1xuICAgIHNob3dFcnJvcnMoZXJyb3JzKTtcbiAgfVxuICByZXR1cm4gdmFsaWRFbWFpbCAmJiB2YWxpZFBhc3M7XG59XG5cbmZ1bmN0aW9uIHZhbEVtYWlsKGVtYWlsKSB7XG4gIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmZ1bmN0aW9uIHZhbFBhc3N3b3JkKHBhc3MpIHtcbiAgY29uc29sZS5sb2coXCJsZW5ndGggb2YgcGFzczogXCIgKyBwYXNzLmxlbmd0aCk7XG4gIGlmKHBhc3MubGVuZ3RoIDwgNil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2YWxQYXNzd29yZHMocGFzczEsIHBhc3MyKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9ycyhlcnJvcnMpe1xuICB2YXIgZXJyb3JQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yc1wiKTtcbiAgdmFyIGVycm9yVGV4dCA9IFwiXCJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspe1xuICAgIGVycm9yVGV4dCArPSBlcnJvcnNbaV0gKyBcIjxiciAvPlwiXG4gIH1cbiAgZXJyb3JQYXJhZ3JhcGguaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xufVxuXG4vLyBhZnRlclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtX2xvZ2luXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1fY3JlYXRlX2FjY291bnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5mdW5jdGlvbiB0b2dnbGVGb3Jtcygpe1xuICB2YXIgZm9ybVJheSA9IFtsb2dpbkZvcm0sIGNyZWF0ZUZvcm1dXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBmb3JtUmF5Lmxlbmd0aDsgaSsrKXtcbiAgICB2YXIgZm9ybSA9IGZvcm1SYXlbaV07XG4gICAgaWYoZm9ybS5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKXtcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IHZpc0Rpc3BsYXk7XG4gICAgfWVsc2V7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
