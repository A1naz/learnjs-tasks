const random = (min, max) => {
  let result = Math.random() * max;
  result < min ? (result += min) : result;
  return result;
};
console.log(random(1, 5));
