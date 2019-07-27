/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

 

Example 1:

Input: [1,2,3,3]
Output: 3
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5
*/

var repeatedNTimes = function(A) {
  let exponent = A.length / 2;
  let result;
  for (let i = 0; i < A.length; i++) {
    let count = 0
    for (let j = 1; j < A.length; j++) {
      if (A[i] === A[j]) {
        count ++
      }
    }
    if (count === exponent) {
      result = A[i]
    }
    count = 0;
  }
  return result;
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))