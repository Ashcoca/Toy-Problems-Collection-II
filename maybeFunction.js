/*

Write a maybe function that, given a predicate (a function at returns a boolean value) 
and any other function, only calls the latter if the former returns true: maybe(x => x > 100, myFn). 
If the predicate returns true, the value of x should be passed to myFn. If it the predicate returns 
false, x should be returned unchanged.

*/

let test = (num) => {
  return num > 100;
};

let callTest = (num) => { 
  return num * 2;
};

const maybeFunc = (x, predicate, callback) => {
  if (predicate(x)) {
    return callback(x);
  }
  return x;
};


console.log(maybeFunc(101, test, callTest));
