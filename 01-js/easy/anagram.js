/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //first implementation, sort both of the strings and match both of them
  // if(str1.match(/[ ]+/) || str2.match(/[ ]+/)) return false;

  //converting both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //converts to array of chars, sorts and then joins them again in a str format
  str1 = [...str1].sort().join("");
  str2 = [...str2].sort().join("");

  if(str1 == str2) return true;
  else return false;

}

console.log(isAnagram("Cd", "Dc"));

module.exports = isAnagram;
