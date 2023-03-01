const sumSalaries = (salaries) => {
  let sum = 0;
  for (values of Object.values(salaries)) {
    sum += values;
  }
  return sum;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
