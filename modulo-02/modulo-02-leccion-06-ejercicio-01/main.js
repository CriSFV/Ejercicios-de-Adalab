'use strict'

//ejercicio 1
const presentacion = document.querySelector('.js_presentacion');

const adalaber1 = {

};
adalaber1.name ='susana',
adalaber1.age= 34 ,
adalaber1.studies= 'periodista',

 presentacion.innerHTML=(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.studies}.` );

 const adalaber2 = {
};
 adalaber2.name ='Rocío',
 adalaber2.age= 25 ,
 adalaber2.studies= 'actriz',

 presentacion.innerHTML+=(`<br>  Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.studies}` );


//ejercicio 2
 adalaber1.run = function(){
      console.log('Estoy corriendo');
 }
 adalaber1.run = () =>  console.log('Estoy corriendo'); 
adalaber1.runAMarathon = function (distance){
    console.log (`Estoy corriendo un maratón de ${distance}`)
};
adalaber1.runAMarathon(50);
/// misma funcion arrow. El parametro distance, se puede poner sin () porque solo es uno. 
adalaber1.runAMarathon = distance =>    console.log (`Estoy corriendo un maratón de ${distance}`);
adalaber1.runAMarathon(30);


//ejercicio 3
// adalaber1 = {};
// adalaber1.name = 'María';
// adalaber1.showBio = function (){
//     return 'Mi nombre es' + this.name `tengo ${adalaber1.age} y soy ${adalaber1.studies}`;
// }
// console.log(adalaber1.showBio());