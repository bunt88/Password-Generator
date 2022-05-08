// Assignment code here
// input variables
var enter
var password = ""
var choices = []
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
function generatePassword() {
  // first takes user inputs
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));
  }
  else {
    confirmLower = confirm(" Do you want to include lowercase letters?");
    confirmUpper = confirm(" Do you want to include uppercase letters?");
    confirmNumber = confirm(" Do you want to include numbers?");
    confirmSpecial = confirm(" Do you want to include special characters?");
  };
  // no options selected
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choices = alert("You must choose criteria!");
  }
  // all options selected
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    choices = getRandomLower().concat(getRandomUpper(), getRandomNumber(), getRandomSpecial());
  }
  // 3 options selected
  else if (confirmLower && confirmUpper && confirmNumber) {
    choices = getRandomLower().concat(getRandomUpper(), getRandomNumber());
  }

  else if (confirmLower && confirmUpper && confirmSpecial) {
    choices = getRandomLower().concat(getRandomUpper(), getRandomSpecial());
  }

  else if (confirmLower && confirmNumber && confirmSpecial) {
    choices = getRandomLower().concat(getRandomNumber(), getRandomSpecial());
  }

  else if (confirmUpper && confirmNumber && confirmSpecial) {
    choices = getRandomUpper().concat(getRandomNumber(), getRandomSpecial());
  }
  // 2 options selected
  else if (confirmLower && confirmUpper) {
    choices = getRandomLower().concat(getRandomUpper());
  }

  else if (confirmLower && confirmNumber) {
    choices = getRandomLower().concat(getRandomNumber());
  }

  else if (confirmLower && confirmSpecial) {
    choices = getRandomLower().concat(getRandomSpecial());
  }

  else if (confirmUpper && confirmNumber) {
    choices = getRandomUpper().concat(getRandomNumber());
  }

  else if (confirmUpper && confirmSpecial) {
    choices = getRandomUpper().concat(getRandomSpecial());
  }

  else if (confirmNumber && confirmSpecial) {
    choices = getRandomNumber().concat(getRandomSpecial());
  }
  // 1 option selected
  else if (confirmLower) {
    choices = getRandomLower();
  }

  else if (confirmUpper) {
    choices = getRandomUpper();
  }

  else if (confirmNumber) {
    choices = getRandomNumber();
  }

  else if (confirmSpecial) {
    choices = getRandomSpecial();
  };

  for (i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password += pickChoices
  }
};



// character functions
function getRandomLower() {
  var lowerarray = []
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  for (i = 0; i < lower.length; i++) {
    lowerarray.push(lower[i])
  }
  return lowerarray
}

function getRandomUpper() {
  var upperarray = []
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i = 0; i < upper.length; i++) {
    upperarray.push(upper[i])
  }
  return upperarray
}

function getRandomNumber() {
  var numberarray = []
  const number = '0123456789';
  for (i = 0; i < number.length; i++) {
    numberarray.push(number[i])
  }
  return numberarray
}

function getRandomSpecial() {
  var specialarray = []
  const special = '!@#$%^&*()';
  for (i = 0; i < special.length; i++) {
    specialarray.push(special[i])
  }
  return specialarray
}

{
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    function UserInput(password) {
      document.getElementById("#password").textContent = generatePassword()
    }

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword());
  console.log("password: ", password)
}