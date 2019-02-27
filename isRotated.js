/*
Is one string a rotated version of another?

example :

String 1: 'hello world'
String 2: 'orldhello w'
--> true
*/

const isRotated = (str1, str2) => {
  let newString;
  const helper = (string) => {
    const temp = string[0];
    newString = string.substring(1);
    newString += temp;
    if (newString === str1) {
      return false;
    }
    if (newString === str2) {
      return true;
    }
    return helper(newString);
  };
  return helper(str1);
};

let string1 = 'hello world'
let string2 = 'orldhello w'

let test = isRotated(string1, string2);

console.log(test);
