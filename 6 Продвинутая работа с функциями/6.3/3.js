// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(val) {
  return (a, b) => (a[val] > b[val] ? true : false);
}

users.forEach((user) => console.log(user.name));
console.log(users.sort(byField('age')));
users.forEach((user) => console.log(user.name));
console.log(users.sort(byField('name')));
