// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];




// Function to prompt user for password options
function getPasswordOptions() {

  var length = prompt("choose the amount of characters");

if (length < 8) {
  alert ("The password must contain more than 8 characters");
} 

if (length > 128) {
  alert ("The password length cannot exceed 128 characters");
}
  
var includeLowerCase = confirm("Do you want to include Lowercase letters?");
var includeUpperCase = confirm("Do you want to include Uppercase letters?");
var includeNumbers = confirm("Do you want to include Numbers");
var includeSpecialCharacters= confirm ("Do you want to include Special Characters");

return {
  length: length,
  includeLowerCase: includeLowerCase,
  includeUpperCase: includeUpperCase,
  includeNumbers: includeNumbers,
  includeSpecialCharacters: includeSpecialCharacters,

  
}

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomCharacter = Math.floor(Math.random() * arr.length);

  return arr[randomCharacter];
  

}


// Function to generate password with user input
function generatePassword() {
  var choices = getPasswordOptions();


  var allChars = [];
  if (choices.includeLowerCase) allChars = allChars.concat(lowerCasedCharacters);
  if (choices.includeUpperCase) allChars = allChars.concat(upperCasedCharacters);
  if (choices.includeNumbers) allChars = allChars.concat(numericCharacters);
  if (choices.includeSpecialCharacters) allChars = allChars.concat(specialCharacters);
var password = "";
for (var i = 0; i <choices.length; i++) {
  var randomCharacter = getRandom(allChars)
  password += randomCharacter;
}
return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);