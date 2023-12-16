/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //Approach:- Sorting both the string and then comparing them
  //handling edge case by sorting the strings to lowers case
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();
  //1. splitting strings into character array
  let charArray1 = string1.split("");
  let charArray2 = string2.split("");

  //2. sorting the char array
  charArray1.sort();
  charArray2.sort();

  //3. joining the character from char array back to string
  let sortedString1 = charArray1.join("").toLowerCase();
  let sortedString2 = charArray2.join("").toLowerCase();

  if (sortedString1 !== sortedString2) return false;

  return true;
}

module.exports = isAnagram;
