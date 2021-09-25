'use strict';
const listE = document.querySelector('.js-list');
const numbers = [1, 2, 3]

for (const eachNumer of numbers) {
   //antes lo pondríamos así: listE.innerHTML += `<li>`
   const newLi=document.createElement('li');

   // hasta aquí solo crea los 3 Li sin contenido
   const liText = document.createTextNode(eachNumer);

   newLi.appendChild(liText); // añado texto dentro de li
   listE.appendChild(newLi); // añado li dentro de ul y del html
}

// (ejemplo clase ejercicio 2)
const newImage = document.createElement('img');
const newParagra = document.createElement('p');
newImage.src=' https://dondiario.com/images/2021/08/29/1630271896.jpeg';
newImage.alt='gatete';
newImage.style.width = '300px';
newImage.style.height = '200px';
newParagra.appendChild(newImage);
listE.appendChild(newParagra);