const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  arr.forEach((item) => {
    currentSum += item;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  });

  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
