import { timer } from "./classTimer.mjs";

import { showLoading } from '../funcs/loading.js';
import { showAlert } from "../funcs/alerts.js";

showLoading(7000);
  showAlert({
    title: "Carregando sistema!",
    description: "",
    color: "green",
    duration: 7000,
  });

// const submit = document.querySelector("#submitButton");
// const display = document.querySelector("#timerDisplay");

// submit.addEventListener("click", () => {
//      const name = document.querySelector("#nameInput") || "teste";
//      const hour = parseInt(document.querySelector("#hourInput")) || 0;
//      const min = parseInt(document.querySelector("#minInput")) || 0;
//      const seg = parseInt(document.querySelector("#segInput")) || 0;

//      const t1 = new timer();
//      t1.startTimer(name, [hour, min, seg], display);
// });









// const addCronometroBtn = document.getElementById("addCronometro");
// const popup = document.getElementById("popup");
// const confirmarBtn = document.getElementById("confirmar");
// const cronometrosContainer = document.getElementById("cronometros");

// addCronometroBtn.addEventListener("click", () => {
//   popup.style.display = "block";
// });

// confirmarBtn.addEventListener("click", () => {
//   const horas = parseInt(document.getElementById("horas").value) || 0;
//   const minutos = parseInt(document.getElementById("minutos").value) || 0;
//   const segundos = parseInt(document.getElementById("segundos").value) || 0;
//   const totalSegundos = horas * 3600 + minutos * 60 + segundos;

//   if (totalSegundos > 0) {
//     criarCronometro(totalSegundos);
//     popup.style.display = "none";
//     document.getElementById("horas").value = "";
//     document.getElementById("minutos").value = "";
//     document.getElementById("segundos").value = "";
//   } else {
//     alert("Por favor, insira um valor válido de tempo.");
//   }
// });

// function criarCronometro(segundosIniciais) {
//   const cronometroDiv = document.createElement("div");
//   cronometroDiv.classList.add("cronometro");
//   cronometrosContainer.appendChild(cronometroDiv);

//   let segundosRestantes = segundosIniciais;
//   const timer = setInterval(() => {
//     const horas = Math.floor(segundosRestantes / 3600);
//     const minutos = Math.floor((segundosRestantes % 3600) / 60);
//     const segundos = segundosRestantes % 60;

//     cronometroDiv.innerText = `${horas.toString().padStart(2, "0")}:${minutos
//       .toString()
//       .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

//     if (segundosRestantes > 0) {
//       segundosRestantes--;
//     } else {
//       clearInterval(timer);
//       cronometroDiv.innerText = "Tempo esgotado!";
//     }
//   }, 1000);
// }