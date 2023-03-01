let n = 10
mainCycle: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue mainCycle
  }
  console.log(i)
}
