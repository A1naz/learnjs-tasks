const camelize = (str) => {
  return str
    .split('-')
    .map((el, i) => {
      return i === 0 ? el : el[0].toUpperCase() + el.slice(1);
    })
    .join('');
};

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
