// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password generation function

function generatePassword () {

  //Define arrays for uppercase, lowercase, numbers, and symbol characters
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolArray = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
  "<", ">", "`", "~", ";", ":", "?", "[", "]", "{", "}", "."];

  //Define empty arrays for calculations and output
  var userArray = [];
  var resultArray = [];
  
  //Take user input for number of characters
  var numChar = prompt ("Input desired number of characters for password within range 8 - 128");

  //check input for valid range
  if(numChar < 8 || numChar > 128){

    alert("Must input number between 8 and 128, please try again");

    return ;

  }

  // click yes/no for each category of characters
  var upper = confirm("Do you require Uppercase letters for your password?");
  var lower = confirm("Do you require Lowercase letters for your password?");
  var numbers = confirm("Do you require numbers for your password?");
  var symbols = confirm("Do you require special characters for your password?");

  //Check for each category if chosen then concatonate to result array
  if (upper){

    resultArray = resultArray.concat(upperArray);
  
  }
  
  if (lower){

    resultArray = resultArray.concat(lowerArray);
  
  }

  if (numbers){

    resultArray = resultArray.concat(numberArray);
    
  }
  
  if (symbols){

    resultArray = resultArray.concat(symbolArray);

  }

  // Check that at least one category is chosen
  if(!upper && !lower && !numbers && !symbols) {

    alert("Must pick at least one Category, please try again");

    return ;

  }


  //Use random num generation to pick random characters from desired categories
  for(var i = 0; i < numChar; i++) {

    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);

  }

//return generated password
return userArray.join("");

}