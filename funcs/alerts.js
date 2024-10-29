// alert.js

export function showAlert({
  title,
  description,
  color = "blue",
  duration = 3000,
}) {
  // Cria o contêiner do alerta
  const alertContainer = document.createElement("div");
  alertContainer.style.position = "fixed";
  alertContainer.style.bottom = "20px";
  alertContainer.style.left = "20px";
  alertContainer.style.backgroundColor = "#fff";
  alertContainer.style.color = "#333";
  alertContainer.style.padding = "15px";
  alertContainer.style.borderRadius = "5px";
  alertContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
  alertContainer.style.zIndex = "1000";
  alertContainer.style.width = "250px";
  alertContainer.style.fontFamily = "Arial, sans-serif";
  alertContainer.style.opacity = "0"; // Começa transparente para o fade-in
  alertContainer.style.transition = "opacity 0.5s"; // Define a transição de fade

  // Título do alerta
  const alertTitle = document.createElement("h4");
  alertTitle.textContent = title;
  alertTitle.style.margin = "0";
  alertTitle.style.marginBottom = "8px";
  alertContainer.appendChild(alertTitle);

  // Descrição do alerta
  const alertDescription = document.createElement("p");
  alertDescription.textContent = description;
  alertDescription.style.margin = "0";
  alertDescription.style.fontSize = "14px";
  alertContainer.appendChild(alertDescription);

  // Barra de progresso
  const progressBar = document.createElement("div");
  progressBar.style.height = "5px";
  progressBar.style.width = "0";
  progressBar.style.backgroundColor = color;
  progressBar.style.borderRadius = "5px";
  progressBar.style.marginTop = "10px";
  alertContainer.appendChild(progressBar);

  // Adiciona o alerta ao corpo da página
  document.body.appendChild(alertContainer);

  // Fade-in ao exibir o alerta
  setTimeout(() => {
    alertContainer.style.opacity = "1";
  }, 10); // Pequeno atraso para aplicar o estilo de transição

  // Anima a barra de progresso
  let startTime = null;
  function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    progressBar.style.width = `${progress * 100}%`;

    if (progress < 1) {
      requestAnimationFrame(animateProgress);
    } else {
      // Fade-out antes de remover o alerta
      alertContainer.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(alertContainer);
      }, 500); // Tempo do fade-out
    }
  }

  // Inicia a animação da barra de progresso e o fade-out
  requestAnimationFrame(animateProgress);
}
