// Rest Parameters
//  Rest takes arguments and puts it into an array.
//ES5
// We aren't sure how many arguments will be called
// we will use slice to get our arguments into an array called list
function printArgs(){
  let list = Array.prototype.slice.call(arguments);
  console.log(list);
}

printArgs(1, 2, 3);
// [ 1, 2, 3 ]

//ES6
// Using ... will automatically put our arguments in an array for us
// This will help us avoid using 'arguments'
function printArgs2(...list){
  console.log(list);
}

printArgs2(1, 2, 3);
// [ 1, 2, 3 ]

//Named Parameters
// We can also extract parameters from the arguments
function printArgs3(one, ...list){
  console.log(one);
  console.log(list);
}

printArgs3(1, 2, 3);
// 1
// [ 2, 3 ]

//Rest Parameters with Arrow functions
// Must include parantheses, even when  its the only parameter
let printArgs4 = (...list) => console.log(list);

printArgs4(1, 2, 3)
// [1, 2, 3]
