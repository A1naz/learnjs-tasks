// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

function f(x) {
  return console.log(x);
}

function delay(func, delay = 1000) {
  let cache = new Map();
  return function (x) {
    setTimeout(() => {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x);
      cache.set(x, result);
      return result;
    }, delay);
  };
}

// создаём обёртки
let f1000 = delay(f);
let f1500 = delay(f, 1500);

f1000('test'); // показывает "test" после 1000 мс
f1500('test'); // показывает "test" после 1500 мс
