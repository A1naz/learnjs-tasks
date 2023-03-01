const sortByAge = () => {
  arr.sort((a, b) => a.age - b.age);
};

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };
let ivan = { name: 'Иван', age: 19 };

let arr = [vasya, petya, masha, ivan];

sortByAge(arr);
console.log(arr);
