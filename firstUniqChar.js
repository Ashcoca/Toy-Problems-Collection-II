// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

const firstUniqChar = (string) => {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[num] === string[i]) {
      num ++;
      break;
    }
    if (i === string.length) {
      return num;
    }
  }
  return -1;
};