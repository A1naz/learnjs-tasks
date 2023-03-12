function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let newCounter = makeCounter();

console.log(newCounter.set(10));
console.log(newCounter.decrease());
console.log(newCounter())
