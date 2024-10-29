// var timer = /** @class */ (function () {
//   function timer(nome, timervalue) {
//     this.nome = nome;
//     this.timervalue = timervalue;
//   }
//   return timer;
// })();

class timer {
  constructor() {
  }

  setValues(name, values) {
    this.name = name
    this.values = values
  }

  startTimer(name, values, display) {

    this.setValues(name, values)

    let hour = values[0];
    let min = values[1];
    let seg = values[2];

    let timer = setInterval(() => {
      if (seg === 0) {
        if (min === 0) {
          if (hour === 0) {
            clearInterval(timer);
            "times over";
            return
          }
          hour--;
          min = 59;
          seg = 59;
        } else {
          min--;
          seg = 59;
        }
      } else {
        seg--;
      }
      display.textContent = `${hour}:${min}:${seg}`;
    }, 1000);
  }
}

export { timer };
