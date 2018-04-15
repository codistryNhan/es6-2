// Classes

// ES5
// Prototypal Inheritance
// Constructor
function Animal (name) {
  this.name = name;
}

Animal.prototype.yelp = function () {
  console.log('yelp!');
}

Animal.prototype.setName = function (name) {
  this.name = name;
}

Animal.prototype.getName = function () {
  return this.name;
}

// ES6
//  Classes are not hoisted at the top like functions
class Animal {
  constructor (name) {
    this.name = name;
  }

  yelp () {
    console.log('yelp!');
  }

  get name () {
    return this.name;
  }

  set name (name) {
    this.name = name;
  }

}
