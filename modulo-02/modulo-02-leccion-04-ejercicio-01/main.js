'use strict'

//  function multi (a,b){return (a*b);}
//  let total = multi (4,2);
//  console.log (`${total}`);

//  total = multi(5,3);
//  console.log (`${total}`);
//  // me ha dado NaN porque puse . en lugar de ,

//  total=multi(2,3);
//  console.log (`${total}`);



// ejercicio 2
//  function media (a,b,c,d) {return ((a+b+c+d)/4);}
//  const total = media (7,25,42,8);
//  console.log (`${total}`);
// 20.5

//ejercicio 3
// El precio sin IVA es a, después defino lo que es la const IVA y el total y luego en la consola pido que me lo traduzca
// function price (a){

//     const IVA = a * 0.21;
//     const total = a + IVA;
//     return ( `Precio sin IVA: ${a}, IVA: ${IVA}, Total: ${total}`);
// }

// console.log (price (20));


// ejercicio 4
// function parImpar (a) {
//     const par = a % 2;
//     if ( par === 0 ) { return (`${a} es par`)}
//     if ( par !== 0 ) { return (`${a} es impar`)}
// }
// console.log (parImpar (23));

//ejercicio 5
function getEl(clase){
    if ( clase === document.querySelector(clase)) {return (document.querySelector(clase))}
    else { return (`No existe ningún elemento con clase, id o tag llamado ${clase}`) }
    
}
const btnEl = getEl(".pepito");
console.log (btnEl);
