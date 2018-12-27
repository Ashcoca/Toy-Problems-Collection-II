/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*/

const strStr = (haystack, needle) => {
  // Handle edge case
  if (!needle) {
    return 0;
  }
  // Use this variable to make it more readable
  const diff = haystack.length - needle.length;
  for (let i = 0; i <= diff; i += 1) {
    // Starting from i we see if we slice letters = the length of the needle and see if it matches
    if (needle === haystack.slice(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
};
