/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', 
then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.
*/


// Navigator: ENTER_NAME
// Driver: ENTER_NAME
// code here

const rotateString = (stringA, stringB) => {
  if (stringA.length !== stringB.length || !stringA || !stringB) {
    return false;
  }
  return (stringA + stringA).indexOf(stringB) !== -1;
  // Recursive solution
  // const helper = (string, count) => {
  //   const letter = string.charAt(0);
  //   let sliced = string.substring(1);
  //   sliced += letter;
  //   if (sliced === stringB) {
  //     return true;
  //   }
  //   return helper(sliced, count += 1)
  // };
  // return helper(stringA, 1);
};


console.log(rotateString('abcde', 'cdeab'));
