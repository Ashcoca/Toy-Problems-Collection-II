/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of 
American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

// Navigator: ENTER_NAME
// Driver: ENTER_NAME
// code here

const keyBoardRow = (words) => {
  const keys = {
    topRow: 'QWERTYUIOPqwertyuiop',
    midRow: 'ASDFGHJKLasdfghjkl',
    botRow: 'ZXCVBNMzxcvbnm',
  };
  const matchingWords = [];
  for (let i = 0; i < words.length; i += 1) {
    const wordLength = words[i].length;
    const wordCount = {
      topCount: 0,
      midCount: 0,
      botCount: 0,
    };
    for (let j = 0; j < wordLength; j += 1) {
      if (keys.topRow.includes(words[i][j])) {
        wordCount.topCount += 1;
      }
      if (keys.midRow.includes(words[i][j])) {
        wordCount.midCount += 1;
      }
      if (keys.botRow.includes(words[i][j])) {
        wordCount.botCount += 1;
      }
    }
    if (wordCount.topCount === wordLength
      || wordCount.midCount === wordLength
      || wordCount.botCount === wordLength
    ) {
      matchingWords.push(words[i]);
    }
  }
  return matchingWords;
};

console.log(keyBoardRow(["Hello", "Alaska", "Dad", "Peace"]));
