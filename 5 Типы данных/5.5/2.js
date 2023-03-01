const filterRange = (arr, a, b) => {
  let newArr = [];
  newArr = newArr.concat(arr);
  return newArr.filter((el) => {
    if (el >= a && el <= b) {
      return el;
    }
  });
};

console.log(filterRange([1, 2, 3, 4], 1, 2));
