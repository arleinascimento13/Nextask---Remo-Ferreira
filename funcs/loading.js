// loading.js

export function showLoading(duration = 3000) {
  // Cria o overlay de fundo
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.75)"; // Fundo cinza escuro
  overlay.style.zIndex = "999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.5s";

  // Cria o elemento de carregamento (spinner)
  const loader = document.createElement("div");
  loader.style.width = "40px";
  loader.style.height = "40px";
  loader.style.border = "4px solid #fff";
  loader.style.borderTop = "4px solid transparent";
  loader.style.borderRadius = "50%";
  loader.style.animation = "spin 1s linear infinite"; // Animação de rotação
  overlay.appendChild(loader);

  // Estilos para o efeito de rotação (spin)
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
  document.head.appendChild(styleSheet);

  // Adiciona o overlay ao corpo da página
  document.body.appendChild(overlay);

  // Exibe o overlay com fade-in
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 10);

  // Remove o overlay e o loader após o tempo especificado com fade-out
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.head.removeChild(styleSheet); // Remove o estilo de rotação
    }, 500); // Tempo do fade-out
  }, duration);
}
