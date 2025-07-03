import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("Hello Rigo from the console!");
};
//write your code here

let quien = ['Mi perro', 'Mi esposa', 'Mi vecino', 'El gato'];
let accion = ['se comió', 'quemó', 'aplastó', 'destrozó'];
let que = ['mi tarea', 'mi notebook', 'mi informe', 'mi teléfono'];
let cuando = ['anoche', 'en la mañana', 'ayer', 'el fin de semana'];

function generadorExcusas(quien, accion, que, cuando) {
  let numQuien = Math.floor(Math.random() * quien.length);
  let numAccion = Math.floor(Math.random() * accion.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numCuando = Math.floor(Math.random() * cuando.length);
  return quien[numQuien] + " " + accion[numAccion] + " " + que[numQue] + " " + cuando[numCuando];
}

function onLoad() {
  let excusa = document.getElementById('excuse');
  excusa.innerHTML = generadorExcusas(quien, accion, que, cuando);
}

window.onload = onLoad;