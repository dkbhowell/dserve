var validator = require('../../misc/validate');

// get element references
var loginFormDiv = document.getElementById("div_login_form");
var loginForm = document.getElementById("login_form");
var loginSubmit = document.getElementById("login_form_submit");

var createFormDiv = document.getElementById("div_create_form");
var createForm = document.getElementById("create_form");
var createSubmit = document.getElementById("create_form_submit");

var toggleButton = document.getElementById("btn_toggle_forms");

// initial view state
loginFormDiv.style.display = "block";
createFormDiv.style.display = "none";

loginForm.email.placeholder = "email@example.com"
createForm.email.placeholder = "email@example.com"

// add listeners
loginSubmit.onclick = validateLoginForm;
createSubmit.onclick = validateCreateForm;
toggleButton.onclick = toggleForms;

function validateCreateForm(){
  clearErrors();
  // return false;
  var email = createForm.email.value;
  var pass1 = createForm.pass1.value;
  var pass2 = createForm.pass2.value;
  var errors = [];

  var validEmail = validator.isValidEmail(email);
  var pwdSame = pass1 === pass2;
  if (!validEmail){
    errors.push("Invalid email address");
  }
  if(!pwdSame){
    errors.push("Passwords do not match");
  }

  if(errors.length > 0){
    showErrors(errors);
    return;
  }

  var minPassLength = 8;
  var validPwd = validator.isValidPassword(pass1, minPassLength);

  if(!validPwd){
    errors.push("Invalid password: must be alphanumeric and longer than " + minPassLength);
  }

  if(errors.length > 0){
    showErrors(errors);
    return;
  }

  // made it through all checks, values are valid and form should be submitted.
  console.log("Create Form Submitted");
  createForm.submit();
}

function validateLoginForm(){
  clearErrors();
  // console.log(document.forms["login_form"])
  console.log("validating login form");
  var email = loginForm.username.value;
  var pass = loginForm.password.value;
  console.log("form values - " + email + ", " + pass);
  var validEmail = validator.isValidEmail(email);
  var validPass = validator.isValidPassword(pass);
  var validLogin = validEmail && validPass;

  if(validLogin){
      loginForm.submit();
      return;
  }

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

function showErrors(errors){
  var errorParagraph = document.getElementById("errors");
  clearErrors();
  var errorText = "";
  for (var i = 0; i < errors.length; i++){
    errorText += "<li>" + errors[i] + "</li>"
  }
  errorParagraph.innerHTML = errorText;
}

function clearErrors(){
  var errors = document.getElementById("errors");
  errors.innerHTML = "";
}

function toggleForms(){
  var formRay = [loginFormDiv, createFormDiv]
  for(var i = 0; i < formRay.length; i++){
    var form = formRay[i];
    if(form.style.display == "none"){
      form.style.display = "block";
    }else{
      form.style.display = "none";
    }
  }
}
