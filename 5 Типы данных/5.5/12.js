const unique = (arr) => {
  let result = [];
  arr.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings));
