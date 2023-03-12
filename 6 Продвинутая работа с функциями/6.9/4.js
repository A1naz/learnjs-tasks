function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let cd = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (cd) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    cd = true;

    setTimeout(function () {
      cd = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
f1000(4); // (ограничение, 1000 мс ещё нет)
