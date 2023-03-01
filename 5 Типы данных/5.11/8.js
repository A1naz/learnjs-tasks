const formatDate = (date) => {
  let d = new Date() - date;
  let result =
    d < 1000
      ? 'прямо сейчас'
      : d < 60000
      ? `${d / 1000} сек. назад`
      : d < 3600000
      ? `${Math.floor(d / 60000)} минут назад`
      : `${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return result;
};

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
