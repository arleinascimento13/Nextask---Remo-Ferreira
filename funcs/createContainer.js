import { addCoins } from "../app/app.js";

function createContainer(infoArray) {
  const [name, [hour, minutes, seconds], level] = infoArray;

  const container = document.createElement("div");
  container.className = "container";

  const textContainer = document.createElement("div");
  textContainer.className = "container-texts";

  const nameElement = document.createElement("p");
  nameElement.textContent = name;

  container.style.setProperty("--border-color", level);

  textContainer.appendChild(nameElement);

  const hourContainer = document.createElement("div");
  hourContainer.className = "container-hour";

  const hourElement = document.createElement("p");
  hourElement.textContent = hour;

  hourContainer.appendChild(hourElement);

  ///////////////////////////

  container.appendChild(textContainer);
  container.appendChild(hourContainer);

  document.body.appendChild(container);

  let remainingSeconds = hour * 3600 + minutes * 60 + seconds;

  const updateTimer = () => {
    if (remainingSeconds <= 0) {
      if (level === "green") {
        addCoins(20);
      }

      if (level === "yellow") {
        addCoins(40);
      }

      if (level === "red") {
        addCoins(60);
      }
      clearInterval(intervalId);

      document.body.removeChild(container);
      return;
    }

    remainingSeconds -= 1;
    const hrs = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    hourElement.textContent = `${String(hrs).padStart(2, "0")}:${String(
      mins
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const intervalId = setInterval(updateTimer, 1000);
}

export { createContainer };
