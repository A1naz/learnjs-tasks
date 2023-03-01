const copySorted = (arr) => {
  let newArr = [].concat(arr);
  return newArr.sort();
};

arr = ['HTML', 'JavaScript', 'CSS'];
console.log(copySorted(arr));
console.log(arr);
