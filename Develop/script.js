// Assignment Code
var generateBtn = document.querySelector("#generate");

// object for acceptance criteria
var acceptance = {
    lettersUpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lettersLowercase: "abcdefghijklmnopqrstuvwxyz",
    specialCharacters: "~`!@#$%-_&*=+?./",
    numerical: "0123456789"
};
// makes the property of acceptance object arrays for lower case and numbers
// var alphabetLowerArr = acceptance.lettersLowercase.split('');
// var alphabetSpecChar = acceptance.specialCharacters.split('');

// Variable declarations
var lengthPass = "";


//console.log(acceptance.lettersLowercase);


var generatePassword = function () {
  // conditions for accepted criteria of password length
  while (lengthPass === "" || lengthPass === null || lengthPass <= 7 || lengthPass >= 128) {
    // ask the user for password length
    lengthPass = window.prompt("How many characters would you like for your password? 'Must be 8 characters minimum and maximum of 128 characters.'");
    if (lengthPass <= 7 || lengthPass >= 60) {
      window.alert("You need to provide a valid answer! Please try again.");
    }
    if (isNaN(lengthPass)) {
      window.alert("Please enter a valid number! Try again.");
    }
  }// end of while loop

  // alerts the player of their password length change
  window.alert("Your password length is: " + lengthPass);

  while (passCriteria !== true) {
    window.alert("You must have at least one from the following criteria: Lower case, Upper Case, Numerical case, and Special Character.");

    // ask the user if they want special characters for their password.
    passCriteria.upperCaseLetter = window.confirm("Click OK if you want to add upper case characters to your password");
    // if they click ok
    if (passCriteria.upperCaseLetter === true) {
      // this will add upper case array to passwordChar array 
      passCriteria.passwordChar += acceptance.lettersUpperCase;
      window.alert("Nice! Your password will have uppercase characters.");
    } else {
      // alerts the user of no upper case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }

    // ask the user if they want lower case characters for their password.
    passCriteria.lowerCaseLetter = window.confirm("Click OK if you want to add lower case character in your password. ");
    // if they click OK
    if (passCriteria.lowerCaseLetter === true) {
      // this will add lower case array to passwordChar array
      passCriteria.passwordChar += acceptance.lettersLowerCase;
      window.alert("Nice! Your password will have lowercase characters.");
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }
    // ask the user if they want number characters for their password.
    passCriteria.numChar = window.confirm("Click OK if you want to add number character in your password. ");
    // if they click OK 
    if (passCriteria.numChar === true) {
      // this will add numArr to passwordChar array
      passCriteria.passwordChar += acceptance.numerical;
      window.alert("Nice! Your password will have number characters.");
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }
    // ask the user if they want special characters for their password.
    passCriteria.specialChars = window.confirm("Click OK if you want to add special character in your password. ");
    // if they click OK 
    if(passCriteria.specialChars === true) {
      // this will add numArr to passwordChar array
      passCriteria.passwordChar += acceptance.specialCharacters;
      window.alert("Nice! Your password will have special characters.");
    } else {
      // alerts the user of no lower case character chosen
      window.alert("Fine! You can chose whatever characters you want.");
    }
    // if (passCriteria !== true) {
    //   window.alert("Please select a character to select from the list of characters");
    // } else {
      break;
  }
  var randPass = "";
  for (var i = 0; i < lengthPass; i++) {
    randPass += passCriteria.passwordChar[Math.floor(Math.random() * passCriteria.passwordChar.length)];
    console.log(randPass);
    console.log(randPass.length);
  }
  return randPass; 
}

var passCriteria = [
  {
    passwordChar: "",
    upperCaseLetter: "",
    lowerCaseLetter: "",
    numChar: "",
    specialChars: ""
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
