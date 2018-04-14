/* Object Literals */

// Delcaration
  let animal = {
    name: "Bob",
    type: "dog",
    breed: "corgi"
  }

// Property Value Shorthands
  //  if the property and value have the same name, you can omit the value name.
  let name = 'Bob';
  let breed = 'corgi';

  // Normal way
  let obj = {
    name: name,
    breed: breed
  }

  // Shorthand
  //  omit colon and value name
  let obj2 = {
    name,
    breed
  }

