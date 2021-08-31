'use strict';
// // elemento de HTML
// const button = document.querySelector('.alert');

// // handler
// function showAlert() {
//   console.log('Alerta');
// }

// // listener sobre el elemento, con tipo de evento y handler
// button.addEventListener('click', showAlert);

//ejercicio 1
// let button = document.querySelector ('.first');
// function ole() { button.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
    
// }
// button.addEventListener ('click', ole);

//ejercicio 2
//si pongo el .value en la primera constante, coge el valor vacío
// const text = document.querySelector('.js_text'); 
// const button = document.querySelector('.js_submit');
// const result = document.querySelector('.result');

// function greetings () {
//  //aquí pedimos el value, porque es cuando está ejecutando el valor
//     result.innerHTML = `Hola ${text.value}`;
// }
// button.addEventListener('click', greetings);


//ejercicio 3

// const paragraph = document.querySelector('.paragraph');
// function addParagraph () {
//     paragraph.innerHTML += ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi delectus laborum voluptatem sint tempore, ut numquam iusto. Dolore totam unde autem atque, dolorem, veniam voluptates accusamus quisquam, maxime voluptasrepellendus';
// }
// paragraph.addEventListener ('mouseover', addParagraph);


//ejercicio 4
const allDocument = document.querySelector('.js_body');


function rainbow (){
    if (window.scrollY <= 250) {
        allDocument.classList.add ('redColor')
        allDocument.classList.remove ('yellowColor')
    }
    else if (window.scrollY >250){
        allDocument.classList.add ('yellowColor')
        allDocument.classList.remove ('redColor')
    }

}
window.addEventListener('scroll', rainbow);

// //ejercicio Sandra
// //container se refiere al div en el que cambiamos color
// //es un div con tantos paragrafos que cambia de color con scroll
// const container = document.querySelector('.js_body');

// function chgBackground() {
//     //podemos crear const activeChg = window.scrollY;
//     //y usarlo en la condicional para activeChg>=250

//     if (window.scrollY >= 250) {
//         container.classList.add('sand')
//         //no necesitamos remove xq no partimos de ninguna clase anterior
//         // container.cl