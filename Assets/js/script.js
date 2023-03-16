// Assignment Code
var generateBtn = document.querySelector("#generate");
var output = document.querySelector('output');


//  added 
function generatePassword() {
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialcharacters = ['!', '@', '#', '$', '%', '^', '*', '(', ')'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var optionsSelection = getOptions()

  // added
  var passwordOptions = [];
  var passwordList = [];

  // added
  if (optionsSelection.lowercaseOption) {
    passwordOptions = passwordOptions.concat(lowercase);
  }

  if (optionsSelection.uppercaseOption) {
    passwordOptions = passwordOptions.concat(uppercase);
  }

  if (optionsSelection.specialcharactersOption) {
    passwordOptions = passwordOptions.concat(specialcharacters);
  }

  if (optionsSelection.numbersOption) {
    passwordOptions = passwordOptions.concat(numbers)
  }


  // added for loop
  for (var index = 0; index < optionsSelection.amount; index++) {
    var ramdomSelection = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];

    passwordList.push(ramdomSelection)
  }

  return passwordList
}

// Write password to the #password input

//  asking user what they want in their password
function getOptions() {
  var lowercaseSelection = confirm('Would you like lowercase?');
  var uppercaseSelection = confirm('Would you like uppercase?');
  var specialCharatesSelection = confirm('Would you like special charactes?');
  var numSelection = confirm('Would you like numbers?');
  var amountSelecton = prompt('Choose number that is between 1 - 128');
  var parsedAmount = parseInt(amountSelecton);

  //  taking the users responses and setting them as values in an object
  var options = {
    lowercaseOption: lowercaseSelection,
    uppercaseOption: uppercaseSelection,
    specialcharactersOption: specialCharatesSelection,
    numbersOption: numSelection,
    amount: parsedAmount
  };

  return options


}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password.join("").replace(",", "");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




