/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
*/

var reverseVowels = function(s) {
  // loop through string, record vowels, loop again, replace vowels
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  const stringVowels = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      stringVowels.push(s[i]);
    }
  }
  let string = ""
  for (let j = 0; j < s.length; j++) {
    if (vowels.includes(s[j])) {
      string += stringVowels.pop();
    } else {
      string += s[j]
    }
  }
  return string;
};

reverseVowels("hello")