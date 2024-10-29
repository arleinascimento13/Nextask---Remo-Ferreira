import { showAlert } from "./funcs/alerts.js";

const registerBtn = document.querySelector(".registerBtn");
registerBtn.addEventListener("click", () => {
  showAlert({
    title: "Atenção!",
    description: "Aba de registro desativada.",
    color: "red",
    duration: 5000,
  });
});


