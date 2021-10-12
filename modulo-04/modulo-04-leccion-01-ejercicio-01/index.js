const fs = require('fs');

// // ejercicio 01

// function add(a, b) {
//   a = 3;
//   b = 2;
//   return a + b;
// }
// console.log(add());

// // ejercicio 2

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

const fileContent = JSON.stringify(myObject);

console.log(fileContent);

const callback = (err) => {
  if (err) {
    console.log('error:', err);
  } else {
    console.log('Ok');
  }
};
fs.writeFile('./output.txt', fileContent, callback);
