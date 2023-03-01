const getWeekDay = (date) => {
  let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  return days[date.getDay()];
};
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));
