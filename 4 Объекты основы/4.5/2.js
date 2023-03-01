function Calculator() {
  this.read = function (firstNum, secondNum) {
    this.a = firstNum;
    this.b = secondNum;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read(5, 22);

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());
