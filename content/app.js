import { showAlert } from "../funcs/alerts.js";

function reloadPage() {
  const root = document.querySelector(".root");
  root.style.display = "flex";
  setTimeout(() => {
    root.classList.add("visible");
  }, 100);
}

reloadPage(); // NÃO MEXER PQ JÁ TÁ CONFIGURADO COM O CSS

const submitForm = document.querySelector("#submitBtn");
submitForm.addEventListener("click", () => {
  const user = document.querySelector("#usernameInput").value;
  const password = document.querySelector("#passwordInput").value;

  if (
    (user == "remo.ferreira" && password == "bruxodobaralho") ||
    (user == "adm" && password == "123")
  ) {
    window.location.href = "../app/page.html";
  } else {
    showAlert({
      title: "Atenção!",
      description: "Usuário e senha incorretos.",
      color: "red",
      duration: 5000,
    });
  }
});

// erro forgot

const forgotError = document.querySelector(".forgotPassword");
forgotError.addEventListener("click", () => {
  showAlert({
    title: "Atenção!",
    description: "Aba de mudança em manutenção.",
    color: "red",
    duration: 5000,
  });
});
