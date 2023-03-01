let schedule = {};

let isEmpty = (obj) => {
  for (let key in obj) {
    if (obj) {
      return false;
    }
  }
  return true;
};

console.log(isEmpty(schedule));
