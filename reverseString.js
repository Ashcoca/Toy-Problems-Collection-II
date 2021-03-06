/*
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
*/

const reverseString = (s) => {
  // return s.split('').reverse().join('');
  let reversedString = '';
  // Iterate backwards through string
  for (let i = s.length; i >= 0; i -= 1) {
    reversedString += s[i];
  }
  return reversedString;
};
