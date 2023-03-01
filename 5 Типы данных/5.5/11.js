const getAverageAge = (arr) => {
  let average =
    arr.reduce((acc, el) => {
      acc += el.age;
      return acc;
    }, 0) / arr.length;
  return average;
};

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
