'use strict';

const searchButton = document.querySelector('.js-button');
const userName = document.querySelector('.js-textinput');

const info = document.querySelector('.js-info');

function quitarClick(ev) {
  ev.preventDefault();
}
userName.addEventListener('submit', quitarClick);

function hadleSearch() {
  const userNameValue = userName.value;
  fetch(`https://api.github.com/users/${userNameValue}`)
    .then((response) => response.json())
    .then((data) => {
      info.innerHTML = `<ul> Resultados: 
       <li>Nombre: ${data.name}</li>
       <li>Número de repos ${data.public_repos}</li>
       <li>Foto <img src="${data.avatar_url}" alt="Avatar"</li>
       </ul>`;
    });
}

searchButton.addEventListener('click', hadleSearch);
console.log(searchButton);
const buttonReset = document.querySelector('.js-button-reset');

// para hacer botón de reset
function handleReset() {
  info.innerHTML = '';
}

buttonReset.addEventListener('click', handleReset);
