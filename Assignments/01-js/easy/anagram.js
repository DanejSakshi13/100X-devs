/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let sorted1 = str1.toLowerCase().split("").sort().join("");
  let sorted2 = str2.toLowerCase().split("").sort().join("");
  if(sorted1===sorted2 && sorted1.length===sorted2.length){
    return true;
  }
  else{
    return false;
  }
}
let ans = isAnagram("gat","tag");
console.log(ans)
module.exports = isAnagram;
