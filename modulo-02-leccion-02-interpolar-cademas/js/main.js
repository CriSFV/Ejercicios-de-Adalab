'use strict';

const element = document.querySelector('#element');
const textToShow = 'Hey, this is important.';


// ES6
element.innerHTML = `
<div class="popup">
  <span>${textToShow}</span>
</div>`;

// ejercicio 8 // no sabemos hacerlo
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const perretas = document.querySelector ('.js_perretas');

//perretas.innerHTML = `<ul class= "listaPerretes"> <li src=${firstDogImage} </li> </ul>`;
perretas.innerHTML = 
`<ul class = "listaPerretes"> 
          <li>
            <a href = "${firstDogImage}">
          </li>`
  </ul>
  `;