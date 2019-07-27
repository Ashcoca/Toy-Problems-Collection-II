/* International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

*/

var uniqueMorseRepresentations = function(words) {
  // Create our object with letters and morse codes to compare
  if (words.length === 0) {
    return 0;
  }
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let mapped = {};
  for (let i = 0; i < alphabet.length; i++) {
    mapped[alphabet[i]] = morseCode[i]
  }
  // Create our transformed words
  let transformed = [];
  for (let i = 0; i < words.length; i++) {
    let morseWord = '';
    let letters = words[i].split('');
    for (let j = 0; j < letters.length; j++) {
      morseWord += mapped[words[i][j]];
    }
    transformed.push(morseWord);
  }
  // Compare our transformed words to get final count
  let count = [...new Set(transformed)];
  return count.length;
};

let myWords = ["rwjje","aittjje","auyyn","lqtktn","lmjwn"]

uniqueMorseRepresentations(myWords)