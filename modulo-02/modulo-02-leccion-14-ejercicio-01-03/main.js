'use strict';

// //ejercicio 1: contador cada dos segundos (he puesto que sume de dos en dos)
// let counter = 0;

// const incrementAndShowCounter = () => {
//   counter += 2;
//   const time = document.querySelector('.time');
//   time.innerHTML = counter;
// };

// setInterval(incrementAndShowCounter, 2000);

// // ejercicio 2
// let counter = 0;
// const time = document.querySelector('.time');

// const incrementAndShowCounter = () => {
//   counter++;
//   if (counter <= 12) {
//     time.innerHTML = counter;
//   } else {
//     time.innerHTML = '';
//   }
// };

// setInterval(incrementAndShowCounter, 1000);

//ejercicio 3
let counter = 0;
const timePost = document.querySelector('.js-timePost');
const postCounter = () => {
  counter++;
  if (counter < 60) {
    timePost.innerHTML = `Escrito hace ${counter} segundos`;
  } else {
    timePost.innerHTML = `Escrito hace ${parseInt(counter / 60)} minutos`;
  }
};

setInterval(postCounter, 1000);
