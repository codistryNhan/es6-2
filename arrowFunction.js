//  Arrow Functions

  //ES5 function expression
  let say = function(text){
    console.log(text);
  }

  //ES 6
  //
  // -Arrow functions cannot be named explicitly
  // -Cannot be used as constructors
  // -Do not have prototype property
  // -They are bound to their lexical scope, cannot alter meaning of 'this'
  let say2 = (text) => {
    console.log(text);
  }

  // Lexical Scoping
  //
  // -Arrow functions do not create a new scope
  // -The body of an arrow functioon contains
  // 'this', 'arguments', and 'super' of the containing scope
  // -Arrow functions won't be able to change the 'this' context
  //  when using .call, .apply, .bind.
  function puzzle() {
    return function() {
      //Argument context is from anonymous function
      console.log(arguments);
    }
  }

  puzzle('a','b','c')(1, 2, 3);
  //1, 2, 3

  function puzzle2(){
    return () => {
      //Argument context is from puzzle2
      console.log(arguments);
    }
  }

  puzzle2('a','b','c')(1, 2, 3);
  //a, b, c
