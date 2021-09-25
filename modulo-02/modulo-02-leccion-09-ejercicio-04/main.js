'use strict';

const task1 = document.querySelector('.js_task1');
const listTask =document.querySelector('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];




 for(let i=0; i<tasks.length;i++){
   if(tasks[i].completed){ 
      const list = `<li class="js-list" id="${i}"> <label> ${tasks[i].name} </label> <input type="checkbox" checked class="js-input"></li>`;
  listTask.innerHTML += list;
}

else{
  const list = `<li class="js-list" id="${i}"> ${tasks[i].name} <input type="checkbox" class="js-input"></li>`;
  listTask.innerHTML += list;
}

}

const listNew =document.querySelectorAll('li');
const allInput = document.querySelectorAll('.js-input');





for(let i=0; i<allInput.length;i++){

  if(allInput[i].checked===true){
 listNew[i].classList.add('task1')
}
else if(allInput[i].checked!==true){
  listNew[i].classList.remove('task1')
 }
}


for (eachInput of allInput){
  eachInput.addEventListener('change',handleClickTast);
}

function handleClickTast (ev){
// console.log(ev.target.parentNode.querySelector('.js-list')); Esto no valdría porque no cambia el completed

}








// //  como completed es un booleano, es mejor poner solo (data.completed)
  //   if(name.completed===true){
  //     const list = `<li class="task1"> ${name.name} <input type="checkbox" class="js-input"></li>`;
  //     listTask.innerHTML += list;
  //   }
  //   else{
  //     const list = `<li> ${name.name} <input type="checkbox" class="js-input"></li>`;
  //     listTask.innerHTML += list;
  //   }

  // }




  // if(tasks[0].completed === true){
  //   task1.classList.add('task1');
  // }else{
  //     task1.classList.remove('task1')
  // }

  // task1.innerHTML = tasks[0].name;

  