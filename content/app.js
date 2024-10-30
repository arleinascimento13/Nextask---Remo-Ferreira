import { showAlert } from "../funcs/alerts.js";

function reloadPage() {
  const root = document.querySelector(".root");
  root.style.display = "flex";
  setTimeout(() => {
    root.classList.add("visible");
  }, 100);
}

reloadPage();

const forgotError = document.querySelector(".forgotPassword");
forgotError.addEventListener("click", () => {
    showAlert({
      title: "Atenção!",
      description: "Aba de mudança em manutenção.",
      color: "red",
      duration: 5000,
    });
})

