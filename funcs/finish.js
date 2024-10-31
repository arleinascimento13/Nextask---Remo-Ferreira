function createContainer() {

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
