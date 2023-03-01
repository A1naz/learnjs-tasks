const getSecondsToTomorrow = () => {
  let today = new Date();
  let secundsToday =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  return 86400 - secundsToday;
};
console.log(getSecondsToTomorrow());

