// Object Desctructuring
//
// const person = {
//   name: 'Ted',
//   age: 21,
//   location: {
//     city: 'Vilnius',
//     temp: 20
//   }
// }

// const {name: firstName = 'Anonymus', age} = person;
// // Same as---
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);


// const {city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature}C in ${city}.`);
// }
//Same as ---
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp}C in ${person.location.city}.`);
// }

// Practice
// const book = {
//   title: 'Harry Potter',
//   author: 'J.K. Rowlings',
//   publisher: {
//     name: 'Stiky Stiky'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array Destructuring
//
// const address = ['Pancakes 123', 'Springfield'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

// Practice
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);