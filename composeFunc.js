/*
Write a compose function that returns the result of all the functions passed into it, 
passing the returned value of a function to the function on its left: 

const foo = compose(x => x*2, x => x + 1, x => x - 5); 

foo(100). Here, result should be 192.

*/

// const compose = (...fns) =>
//   fns.reduceRight((prevFn, nextFn) =>
//     (...args) => nextFn(prevFn(...args)),
//     value => value
//   );

const compose = (...fns) => {
  if (fns.length === 1) {
    return 0;
  }
  let curVal = fns[0];
  return curVal += compose(fns.slice(1))
}



const foo = compose(x => x*2, x => x + 1, x => x - 5)

console.log(foo(100))