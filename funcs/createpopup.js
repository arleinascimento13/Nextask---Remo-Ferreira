function createPopup(title, imageUrl, timer) {
  const bgContainer = document.createElement("div");
  bgContainer.className = "popupsleep-bg";

  const popupContainer = document.createElement("div");
  popupContainer.className = "popupsleep";

  const titleElement = document.createElement("h2");
  titleElement.className = "sleeptitle";
  titleElement.textContent = title;

  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.className = "popupimg";

  const timerElement = document.createElement("p");
  timerElement.className = "popuptimer";

  popupContainer.appendChild(titleElement);
  popupContainer.appendChild(imgElement);
  popupContainer.appendChild(timerElement);

  bgContainer.appendChild(popupContainer);

  document.body.appendChild(bgContainer);

  let remainingSeconds = timer * 60;

  const updateTimer = () => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      return;
    }

    remainingSeconds -= 1;
    const hrs = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    timerElement.textContent = `${String(hrs).padStart(2, "0")}:${String(
      mins
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const intervalId = setInterval(updateTimer, 1000);
}

export { createPopup };
