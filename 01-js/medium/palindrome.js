/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase();

  //removing spaces and special character from the string
  string = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

  let reverseString = string.split("").reverse().join("");

  if (string !== reverseString) return false;
  return true;
}

module.exports = isPalindrome;
