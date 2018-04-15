// Destructuring
  let dog = {
    name: 'Bob',
    type: 'dog',
    breed: 'corgi',
    owner: {
      name: 'Suky',
      age: 25
    },
    favFood: ['peanut butter', 'ham', 'cheeseburgers']
  }

  // ES5
  let name = dog.name;
  let type = dog.type;
  let breed = dog.breed;

  // ES6 Destructuring
  let { name, type, breed } = dog;
  console.log(name); // 'Bob'

  // Aliasing
  let { name: dogName } = dog;
  console.log(dogName); // 'Bob'

  // Deep Structures
  let { owner: { name } } = dog;
  console.log(name); // 'Suky'

  // Default Values if no prop exists
  let { color = 'brown' } = dog;
  
