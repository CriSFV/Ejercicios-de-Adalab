'use strict';

const palettesContainer = document.querySelector('.js-palettes-container');

let palettes = [];
let favoritesPalettes = [];

function handlePalette(ev) {
  const paletteEvent = ev.currentTarget.id;
  favoritesPalettes = console.log(ev.currentTarget.id);
}

function listenPalettes() {
  const listPalettes = document.querySelectorAll('.js-palette');
  for (const paletteEl of listPalettes) {
    paletteEl.addEventListener('click', handlePalette);
  }
}

function paintPalettes() {
  let html = '';
  for (const palette of palettes) {
    console.log(palette);
    html += `<li class="palettes js-palette" id="${palette.id}">`;
    html += `<h2>${palette.name}</h2>`;
    html += `<div class="palette__colors">`;
    for (const palleteColor of palette.colors) {
      html += `<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  palettesContainer.innerHTML = html;
  listenPalettes();
}

fetch(
  'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json'
)
  .then((response) => response.json())
  .then((data) => {
    palettes = data.palettes;
    paintPalettes();
  });
