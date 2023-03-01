const checkSpam = (str) => {
  return str.toLowerCase().includes('viagra') ||
    str.toLowerCase().includes('xxx')
    ? true
    : false;
};

console.log(checkSpam('buy free xxxxx'));
