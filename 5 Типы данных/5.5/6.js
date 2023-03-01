function Calculator() {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = (str) => {
    str = str.split(' ');
    if (!this.operations[str[1]] || isNaN(str[0]) || isNaN(str[2])) {
      return NaN;
    }
    return this.operations[str[1]](+str[0], +str[2]);
  };

  this.addOperation = (name, fun) => {
    this.operations[name] = fun;
  };
}

let powerCalc = new Calculator();
powerCalc.addOperation('*', (a, b) => a * b);
powerCalc.addOperation('/', (a, b) => a / b);
powerCalc.addOperation('**', (a, b) => a ** b);
powerCalc.addOperation('++', (a, b) => a + b + b);

let result = powerCalc.calculate('3 ++ 3');
console.log(result);
