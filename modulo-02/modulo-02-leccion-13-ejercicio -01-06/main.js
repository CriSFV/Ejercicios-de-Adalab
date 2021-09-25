'use strict';
// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const capitalNames = [];

// for (let i = 0; i < names.length; i++) {
//   const capitalName = names[i].toUpperCase();
//   capitalNames.push(capitalName);
// }

// console.log(capitalNames);

// const namesNew = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const capitalNamesNew = namesNew.map((name) => name.toUpperCase());

// console.log(capitalNames);

// //ejercicio 1
// const marks = [5, 4, 6, 7, 9];
// const inflatedMarks = marks.map((mark) => mark + 1);
// console.log(inflatedMarks);

//ejercicio 2
// const namesUsers = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const sayHiUsers = namesUsers.map((name) => `Bienvenida ${name}`);
// console.log(sayHiUsers);

// //ejercicio 3

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

function writeMessage(user) {
  if (user.isPremium === true) {
    `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    `Bienvenida ${user.name}`;
  }
}

const isPremiumUser = users.map((user) => {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
  } else {
    return `Bienvenida ${user.name}`;
  }
});
console.log(isPremiumUser);
console.log(`${isPremiumUser}`);

// ejercicio 6
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const usersPinPar = users.filter(
  (user) => user.pin % 2 === 0 && user.isPremium === true
);
console.log(usersPinPar);

//ejercicio 10
const findUser = users.find((user) => user.pin === 5232);
console.log(findUser);

const findUserPosition = users.findIndex((user) => user.pin === 5232);

users.splice(findUserPosition, 1);
console.log(users);
