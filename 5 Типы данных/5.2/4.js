const randomInteger = (min, max) => {
  let result = Math.random() * max + 1;
  console.log(result);
  result < min ? (result += min) : result;
  return Math.floor(result);
};
console.log(randomInteger(1, 3));
