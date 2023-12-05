/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const isLetterPresent = str1
    .toLowerCase()
    .split("")
    .map((letter) => str2.toLowerCase().includes(letter));
  const res = isLetterPresent.every((i) => i === true);
  return res;
}

// function isAnagram(str1, str2) {
//   let a = str1.toLowerCase();
//   let b = str2.toLowerCase();
//   if (str1.length !== str2.length) return false;
//   const res = a.split("").sort().join("") === b.split("").sort().join("");
//   return res;
// }

module.exports = isAnagram;
