/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let originalStr = str.toLowerCase().replace(/[^a-z]/g, '');
  let revString = originalStr.split("").reverse().join("");
    if(originalStr===revString){
    return true;
  }
  else{
    return false;
  }
}
let ans = isPalindrome("okay")
console.log(ans);

module.exports = isPalindrome;
