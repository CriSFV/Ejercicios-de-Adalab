'use strict';
//ejercicio 1: No sé porque me dá 203 de logitud en lugar de 100

let arr =[];

function get100Numbers(){
    for(let i=1; i<=100;i++){
        arr.push(i);
     }
     console.log(arr);
}

get100Numbers();



// ejercicio 2: creo que no está bien, porque tiene que llamar a la función del ejercicio 1

function getReversed100Numbers (){
    arr.reverse();
    console.log(arr);
}


getReversed100Numbers();

// 'use strict';

// let acc = 0;
   
// const myArrayLength = 100;


// function geta100Numbers(){

//     for (let i=0; i<myArrayLength; i++){
//         acc++
//         myArray.push(acc);
//     }
//     return myArray;
   
// }

// function getReversed100Numbers (){
//     const newArray = geta100Numbers();
//     return newArray.reverse();
// }

// console.log(getReversed100Numbers());

// //ejercicio 3

'use strict';
const lostNumbers = [4,8,15,16,23,42];
const myEvenArray = [];
const myMultiplyArray = []; 


function bestLostNumber (){
    for (let i=0; i<lostNumbers.length; i++){
       
        if (lostNumbers [i] % 2 === 0){
            myEvenArray.push (lostNumbers [i]);
        }else if (lostNumbers[i] % 3 === 0){
            myMultiplyArray.push(lostNumbers[i]);
        }

    }const newArray = myEvenArray.concat(myMultiplyArray);
    return newArray;
}
console.log(bestLostNumber());

// // ejercicio 4:
// const tasks = [
//     { name: 'Recoger setas en el campo', completed: true },
//     { name: 'Comprar pilas', completed: true },
//     { name: 'Poner una lavadora de blancos', completed: true },
//     {
//       name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
//       completed: false
//     }
//   ];

//   const list = document.querySelector('.js-list');
//   list.innerHTML = '<li>' + tasks.name + '</li>';

