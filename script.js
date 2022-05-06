// Assignment code here
// input variables
var choices;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
function generatePassword() {
  // first takes user inputs
  {
    confirmLower = confirm(" Do you want to include lowercasse letters?");
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
    choices = getRandomLower(), + getRandomUpper(), + getRandomNumber(), + getRandomSpecial();
  }
  // 3 options selected
  else if (confirmLower && confirmUpper && confirmNumber) {
    choices = getRandomLower(), + getRandomUpper(), + getRandomNumber();
  }

  else if (confirmLower && confirmUpper && confirmSpecial) {
    choices = getRandomLower(), + getRandomUpper(), + getRandomSpecial();
  }

  else if (confirmLower && confirmNumber && confirmSpecial) {
    choices = getRandomLower(), + getRandomNumber(), + getRandomSpecial();
  }

  else if (confirmUpper && confirmNumber && confirmSpecial) {
    choices = getRandomUpper(), + getRandomNumber(), + getRandomSpecial();
  }
  // 2 options selected
  else if (confirmLower && confirmUpper) {
    choices = getRandomLower(), + getRandomUpper();
  }

  else if (confirmLower && confirmNumber) {
    choices = getRandomLower(), + getRandomNumber();
  }

  else if (confirmLower && confirmSpecial) {
    choices = getRandomLower(), + getRandomSpecial();
  }

  else if (confirmUpper && confirmNumber) {
    choices = getRandomUpper(), + getRandomNumber();
  }

  else if (confirmUpper && confirmSpecial) {
    choices = getRandomUpper(), + getRandomSpecial();
  }

  else if (confirmNumber && confirmSpecial) {
    choices = getRandomNumber(), + getRandomSpecial();
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

  for (var i = 0; i < 8; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  }
};



// character functions
function getRandomLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSpecial() {
  const special = '!@#$%^&*()';
  return special[Math.floor(Math.random() * special.length)];
}

console.log(generatePassword());
{
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


}