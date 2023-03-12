// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.

function printNumbersInt(from, to) {
  let cur = from;

  let timerId = setInterval(() => {
    console.log(cur);
    if (cur == to) {
      clearInterval(timerId);
    }
    cur++;
  }, 1000);
}

// Используя рекурсивный setTimeout.

function printNumbersSet(from, to) {
  let cur = from;

  setTimeout(function go() {
    console.log(cur);
    if (cur < to) {
      setTimeout(go, 1000);
    }
    cur++;
  }, 1000);
}

printNumbersInt(5, 10);
printNumbersSet(5, 10);
