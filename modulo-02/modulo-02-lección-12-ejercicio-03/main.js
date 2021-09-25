'use strict';

const infoArray = [
  {
    name: 'Cris',
    lastname: 'Fernández',
    phone: '555-589',
  },
  {
    name: 'María',
    lastname: 'Molina',
    phone: '555-8954',
  },
  {
    name: 'usuaria',
    lastname: 'apellido',
    phone: '555-82365',
  },
];
const form = document.querySelector('.js_form');
const select = document.querySelector('.js_input_name');

function getOptionsValue() {
  for (let i = 0; i < infoArray.length; i++) {
    const eachInfoArray = infoArray[i];
    const formOption = document.createElement('option');

    const formOptionText = document.createTextNode(eachInfoArray.name);

    formOption.appendChild(formOptionText);
    formOption.setAttribute('value', i);

    select.appendChild(formOption);
  }
}

getOptionsValue();

function getValue(ev) {
  console.log(ev.target);
  console.log(ev.currentTarget);
  console.log(ev.currentTarget.value);
}

select.addEventListener('change', getValue);
