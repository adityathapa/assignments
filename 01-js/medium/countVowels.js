/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let strToArr = [...str]; //converting to arr of chars
    let cnt = 0;

    for(let i = 0; i<strToArr.length; ++i)
    {
      if(/[aeiou]/.test(strToArr[i])) ++cnt; //increases counter if the current char is in the specified regex
    }

    return cnt;
}

module.exports = countVowels;