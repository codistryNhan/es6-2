//Spread Operator
// The spread operator is used to cast any iterable object
// into an array

// Spread takes items, such as an array, and spreads it out individually
let a = [1, 2, 3];
console.log(...a);
// 1, 2, 3 - Not an array!

// Create an array!
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c);
// [1, 2, 3, 4, 5, 6]
