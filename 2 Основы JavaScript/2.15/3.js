function pow(x, n) {
  if (n < 1) return 'Введите натуральное число n';
  let a = x;
  for (let i = 1; i < n; i++) {
    x *= a;
  }
  return x;
}
