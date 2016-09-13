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
