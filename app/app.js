import { createPopup } from "../funcs/createpopup.js";
import { showAlert } from "../funcs/alerts.js";
import { createContainer } from "../funcs/createContainer.js";

// showLoading(7000);
// showAlert({
//   title: "Carregando sistema!",
//   description: "",
//   color: "green",
//   duration: 7000,
// });

const submit = document.querySelector(".new-activity");
const popup = document.querySelector(".popup-bg");
const inputs = document.querySelectorAll(".inputslayout .numberInput");
const inputName = document.querySelector(".labelInputName #nameInput");
const optionValue = document.querySelector("#selectOptions");
let totalCoins = document.querySelector(".totalValueCoins");

submit.addEventListener("click", () => {
  popup.style.display = "flex";
});

const confirm = document.querySelector(".add-timer");
confirm.addEventListener("click", () => {
  let arrayValues = [];
  inputs.forEach((input) => {
    arrayValues.push(Number(input.value));
  });

  console.log(arrayValues);

  const [hour, minutes, seconds] = [
    arrayValues[0],
    arrayValues[1] + arrayValues[2],
    arrayValues[3] + arrayValues[4],
  ];

  if (minutes >= 60 || seconds >= 60 || inputName.value === "") {
    return alert("Insira um valor válido!");
  }

  arrayValues = [
    [inputName.value],
    [hour, minutes, seconds],
    optionValue.value,
  ];

  showAlert({
    title: "Timer criado!",
    color: "green",
    duration: 5000,
  });
  createContainer(arrayValues);
  popup.style.display = "none";
});

const reward1 = document.querySelector(".reward1");
const reward2 = document.querySelector(".reward2");
const reward3 = document.querySelector(".reward3");

reward1.addEventListener("click", () => {
  if (totalCoins.textContent < 20) {
    alert("Você não pode comprar!");
  } else {
    totalCoins.textContent = totalCoins.textContent - 20;
    createPopup("Agora você pode descançar!", "src/remophoto.png", 20);
  }
});

function addCoins(x) {
  let totalCoins = document.querySelector(".totalValueCoins");
  let currentCoins = Number(totalCoins.textContent);
  currentCoins += x;
  totalCoins.textContent = currentCoins;
}

export { addCoins };
