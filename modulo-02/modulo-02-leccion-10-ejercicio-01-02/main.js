'use strict';
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     document.body.innerHTML = data.result;
//   });

//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => document.body.innerHTML = data.result);





  //ejercicio1
  //no cambia si añado ?lenght2
  fetch("https://api.rand.fun/number/integer")
  .then(pepino => pepino.json())
  .then(data => {
      document.querySelector('.js-result2').innerHTML = data.result
  });

//   function getEmoji() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(response => response.json())
//       .then(pepino => {
//           const img =document.querySelector('.js-img');
//           img.src= pepino.message;
//       });
//   }


//   document.querySelector('.js-emoji').addEventListener("click", getEmoji);


  //ejercicio 2

  function getEmoji() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
    
      .then(pepino => {
     
          const img =document.querySelector('.js-img');
          img.src= pepino.message;
      });
  }


  document.querySelector('.js-emoji').addEventListener("click", getEmoji);
