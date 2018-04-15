// Destructuring Arrays
let numbers = [1, 2];
let [x, y] = numbers;

console.log(x); // 1
console.log(y); // 2

// Skipping unwanted properties
let name = ['Bob', 'M', 'Doe'];
let [ firstName, , lastName ] = name;
console.log(lastName); // Doe

// Swapping Values
// ES5
let a = 1;
let b = 2;

// Swapping
let temp = a;
a = b;
b = temp;

// ES6 Swapping with Destructuring
[a, b] = [b, a];
