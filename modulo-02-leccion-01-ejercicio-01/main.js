"use strict";

//ejercicio 1
document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

const address = "Calle marroquina";
const principalAddress = "Avenida Pablo Neruda";

//ejercicio 3 / Hola + mundo
const title = document.querySelector(".title");
//title.innerHTML = title.innerHTML + ' mundo';
title.innerHTML = title.innerHTML + " mundo";

//Ejercicio 4 / Seleccionando adalabers
const subtitle = document.querySelector(".subtitle");
const first = document.querySelector(".li1");
const second = document.querySelector(".li2");

subtitle.innerHTML = subtitle.innerHTML + " " + second.innerHTML;

// Ejercicio 5 / Protege ese password. Revisar con pair o clase

const password = document.querySelector(".pass");
password.innerHTML = "**********";

// Ejercicio 6/

const article = document.querySelector("div");
const articleContent =
  '<h1 class=pepito> Lorem impsum </h1><img src="http://via.placeholder.com/350x150"" <br> <p>lorem impsumsit amet, consectetur adipisicing elit</p>';
article.innerHTML = articleContent;



//Ejercicio 7
