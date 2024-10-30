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

const transition = document.querySelector(".effect");

const changePage = document.querySelector(".loginBtn");

changePage.addEventListener("click", () => {
  transition.style.display = "block";
  setTimeout(() => {
    transition.classList.add("visible");
  }, 10);
  setTimeout(() => {
    window.location.href = "/content/index.html";
  }, 1000);

  //   let target = document.querySelector("#content");
  //   let url = "content/index.html";
  //   let xml = new XMLHttpRequest();

  //   xml.onreadystatechange = () => {
  //     if (xml.readyState == 4 && xml.status == 200) {
  //       target.innerHTML = xml.responseText;
  //     }
  //   };

  //   xml.open("GET", url, true);

  //   xml.send();
});
