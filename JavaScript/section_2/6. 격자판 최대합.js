function solution(array) {
  let total = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  //행의 최대 합.
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total += array[i][j];
    }
    if (total > maxSum) maxSum = total;
    total = 0;
  }
  // 열의 최대 합.
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total += array[j][i];
    }
    if (total > maxSum) maxSum = total;
    total = 0;
  }
  // 대각선 최대 합.
  for (let i = 0; i < array.length; i++) {
    total += array[i][i];
    if (total > maxSum) maxSum = total;
  }
  total = 0;
  // 대각선 최대 합.(역순)
  for (let i = 0; i < array.length; i++) {
    total += array[i][array.length - i - 1];
    if (total > maxSum) maxSum = total;
  }
  total = 0;
  return maxSum;
}

let array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(array));
