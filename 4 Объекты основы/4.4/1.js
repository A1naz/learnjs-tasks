let calculator = {
  read(firstNum, secondNum) {
    this.a = firstNum;
    this.b = secondNum;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(4, 2);
console.log(calculator.sum());
console.log(calculator.mul());
