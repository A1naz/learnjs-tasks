const getDateAgo = (date, days) => {
  let result = new Date();
  result.setDate(date.getDate() - days);
  return result.getDate();
};

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(date);
