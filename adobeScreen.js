// Input: [5, 4, 8, 2, 7], Key: 12; returns true
// //Return whether two numbers in arr sum to key
// twoSum(arr, key) { 
// }

const twoSum = (arr, key) => {
  // Loop solution
  const starter = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (starter + arr[i] === key) {
      return true;
    }
  }
  return false;
};

console.log(twoSum([5, 4, 8, 2, 7], 12));
