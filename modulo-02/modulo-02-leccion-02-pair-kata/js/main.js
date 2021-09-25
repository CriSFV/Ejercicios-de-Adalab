'use strict';

// Objetivo:
//   Debéis poner el texto que está en el span de la derecha del primer div
// dentro del span del segundo div, transformando el texto en mayúsculas y
// usando unicamente JavaScript (podéis poner clases en las etiquetas del HTML).
// Pista: buscad en MDN los métodos de strings.
//
// Pasos:
//
// 1. Traer el <span> con el texto original a una constante.
const wtext = document.querySelector('.js_wtext'); 
// 2. Traer el <span> donde se escribirá el texto modificado.
const rtext = document.querySelector('.js_rtext');
// 3. Obtener el texto que contiene el original.
const text = wtext.innerHTML;
// 4. Transformar el texto original a mayúsculas.
const upperText = text.toLocaleUpperCase();

// 5. Poner el texto transformado en el <span> destino.
rtext.innerHTML = upperText;


