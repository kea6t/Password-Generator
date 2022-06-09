// Assignment Code
var generateBtn = document.querySelector("#generate");

// object for acceptance criteria
var acceptance = {
  lettersUpperCase: " 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ",
  lettersLowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  specialCharacters: " '~', '`', '!', '@', '#', '$', '%', '-', '_', '&', '*', '=', '+', '?', '.', '/', ",
  numerical: "1 2 3 4 5 6 7 8 9 0"

};
// makes the property of acceptance object arrays for lower case and numbers
var alphabetLowerArr = acceptance.lettersLowercase.split('');
var numArr = acceptance.numerical.split('');

// Variable declarations
var lengthPass = "";
var passwordChar = "";
var upperCaseLetter = "";
var lowerCaseLetter = "";
var numChar = "";
var specialChars = "";

console.log(acceptance.lettersLowercase);


var generatePassword = function () {
  // conditions for accepted criteria of password length
  while (lengthPass === "" || lengthPass === null || lengthPass <= 7 || lengthPass >= 60) {
    // ask the user for password length
    lengthPass = window.prompt("How many characters would you like for your password? 'Must be 8 characters minimum and maximum of 60 characters.'");
    if (lengthPass <= 7 || lengthPass >= 60) {
      window.alert("You need to provide a valid answer! Please try again.")
    }
    if (isNaN(lengthPass)) {
      window.alert("Please enter a valid number! Try again.")
    }
  }// end of while loop

  // alerts the player of their password length change
  window.alert("Your password length is: " + lengthPass);

  while (passCriteria !== true) {
    window.alert("You must have at least one from the following criteria: Lower case, Upper Case, Numerical case, and Special Character.");

    // upper case confirmation message
    passCriteria.upperCaseLetter = window.confirm("Click OK if you want to add upper case characters to your password");
    // if they click ok
    if (passCriteria.upperCaseLetter === true) {
      // this will add upper case array to passwordChar array 
      passCriteria.passwordChar += acceptance.lettersUpperCase;
      window.alert("Nice! Your password will have uppercase characters.")
    } else {
      // alerts the user of no upper case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }

    // lower case confirmation message
    passCriteria.lowerCaseLetter = window.confirm("Click OK if you want to add lower case character in your password. ");
    // if they click OK
    if (passCriteria.lowerCaseLetter === true) {
      // this will add lower case array to passwordChar array
      passCriteria.passwordChar += alphabetLowerArr;
      window.alert("Nice! Your password will have lowercase characters.")
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }

    passCriteria.numChar = window.confirm("Click OK if you want to add number character in your password. ");
    // if they click OK 
    if (passCriteria.numChar === true) {
      // this will add numArr to passwordChar array
      passCriteria.passwordChar += numArr;
      window.alert("Nice! Your password will have number characters.")
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }

    passCriteria.specialChars = window.confirm("Click OK if you want to add special character in your password. ");
    if(passCriteria.specialChars === true) {
      passCriteria.passwordChar += acceptance.specialCharacters;
      window.alert("Nice! Your password will have special characters.")
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }
    // if (passCriteria !== true) {
    //   window.alert("Please select a character to select from the list of characters");
    // } else {
      break;
    //}
    console.log(passCriteria.passwordChar);
    break;
  }
  var randPass = "";
  for (var i = 0; i < lengthPass.length; i++) {
    randPass += passCriteria.passwordChar[Math.floor(Math.random() * passCriteria.passwordChar.length)];
    console.log(randPass); 
  }
  return randPass; 
}

var passCriteria = [
  {
    passwordChar,
    upperCaseLetter,
    lowerCaseLetter,
    numChar,
    specialChars
  }
];

// function to collect accepted criteria for password
function writePassword() {
  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
