'use strict';
const list = document.querySelector('.js-list');
const inputE = document.querySelector('.js-input');
const button = document.querySelector('.js-button');




function handleClick(){
  fetch(`https://swapi.dev/api/people/?search=${inputE.value}`)
  .then (response => response.json())
  .then(data => {
      const resultsList = data.results;
      for(const elementResult of resultsList){
          list.innerHTML +=`<li> ${elementResult.name} </li>`
      }
      
  })
}

button.addEventListener('click', handleClick)