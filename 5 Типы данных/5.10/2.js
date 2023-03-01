const topSalary = (salaries) => {
  let maxSalary = 0;
  let richestEmployee = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary <= salary) {
      maxSalary = salary;
      richestEmployee = name;
    }
  }
  return richestEmployee;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
