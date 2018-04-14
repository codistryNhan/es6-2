// Method Definition
  //  method shorthand delaration in ES6

  // ES5
  let dog = {
    name: "Bob",
    breed: "corgi",
    bark: function(){
      console.log("woof");
    }
  }

  // ES6 - omit colon and function
  let dog2 = {
    name: "Bob",
    breed: "corgi",
    bark(){
      console.log("woof");
    }
  }
