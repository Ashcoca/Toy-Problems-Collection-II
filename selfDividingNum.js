/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

var selfDividingNumbers = function(left, right) {
//     let range = [left];
//     while (left < right) {
//       range.push(left += 1);
//     }
//       let output = [];
//     for (let i = 0; i < range.length; i++) {
//       let num = range[i];
//       let failed = false;
//       let digits = num.toString().split('');
//       for (let j = 0; j < digits.length && !failed; j++) {
//         if (num % Number(digits[j]) === 0 && j === digits.length - 1) {
//           output.push(num)
//         }
//         if (num % Number(digits[j]) !== 0) {
//           failed = true;
//         }
//       }
//     }
//     return output;
//   }
  let output = [];
  for (let i = left; i <= right; i++) {
    let num = i.toString();
    let failed = false;
    for (let j = 0; j < num.length && !failed; j++) {
      if (i % Number(num[j]) === 0 && j === num.length - 1) {
        output.push(i)
      }
      if (i % Number(num[j]) !== 0) {
        failed = true;
      }
    }
  }
  return output;
}
console.log(selfDividingNumbers(1, 22))
