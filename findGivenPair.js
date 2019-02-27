/* Find pair with given sum in array
Given an unsorted array of integers find a pair with the given sum.

example:
arr = [8, 7, 2, 5, 3, 1]
sum = 10

Output:
Pair found at index 0, and 2 (8 + 2)
Pair found at index 1, and 4 (7 + 3)

*/

const findGivenPair = (arr, sum) => {
  const start = 0;
  let results = '';
  const helper = (arr, start, sum) => {
    for (let i = start + 1; i < arr.length; i += 1) {
      if (arr[start] + arr[i] === sum) {
        results += `Pair found at index ${start}, and ${i} (${arr[start]}, ${arr[i]}) `;
      }
    }
    if (start !== arr.length) {
      helper(arr, start + 1, sum);
    }
  };
  helper(arr, start, sum);
  if (results.length === 0) {
    return 'Pair not found';
  }
  return results;
};

const array = [8, 7, 2, 5, 3, 1];

const results = findGivenPair(array, 10);
console.log(results);
