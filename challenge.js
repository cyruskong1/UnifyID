/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
  var email
  //for inputs 
  var inputs = document.getElementsByTagName('input');

    for(var i = 0; i < inputs.length; i++) {
      if(inputs[i].type.toLowerCase() == 'email' || inputs[i].id.toLowerCase() == 'email'  || inputs[i].id.toLowerCase() == 'username'|| inputs[i].class == 'email' || inputs[i].name.toLowerCase() == 'email') {
        email = inputs[i];
      }
    }
    console.log('got username');
    return email;
    

  //for select fields

  // var select = document.getElementsByTagName('select');
  // if(select) {
  //   console.log('no inputs, selecting')
  //   console.log('select', select);
  //   email = select;
  // }


  // return email;
  // console.log($("#email"))
  // return $("#email");
}

function getPasswordField() {
  var password

  var inputs = document.getElementsByTagName('input');

  for(var i = 0; i < inputs.length; i++) {
    console.log('type of class', typeof inputs[i].id);
    if(inputs[i].type.toLowerCase().includes('pass') || inputs[i].id.toLowerCase().includes('pass') || inputs[i].name.includes('pass')) {
      console.log('input', i, inputs[i]);
      password = inputs[i];
      console.log('password', password)
      break;
    }
  }
  console.log('got password');
  return password;
//return $("#pass");
}

function getFormField() {
  return getPasswordField().closest('form');
}

function getSubmitButton() {
  var submit;
  var login = document.getElementsByTagName('input');
console.log('login array', login)
  for(var i = 0; i < login.length; i++) {
     if(login[i].id.toLowerCase().includes('sign') || login[i].id.toLowerCase().includes('log') || login[i].value.toLowerCase().includes('log') || login[i].name.toLowerCase().includes('log')) {
      console.log('submit', i, login[i]);
      submit = login[i];
      console.log('submit', submit);
      break;
    }
  }
  console.log('got submit button');
  return submit;
  //return $("#loginbutton");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
