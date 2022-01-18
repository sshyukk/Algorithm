function solution(array) {
  let answer = 0,
    temp = [];
  let number = array.length;
  // 배열 재설정.
  for (let i = 0; i < number; i++) {
    array[i].push(0);
    array[i].unshift(0);
  }
  array.push(Array.from({ length: number + 2 }, () => 0));
  array.unshift(Array.from({ length: number + 2 }, () => 0));
  // 배열 탐색.
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length - 1; j++) {
      temp = [
        array[i][j],
        array[i - 1][j],
        array[i][j - 1],
        array[i + 1][j],
        array[i][j + 1],
      ];
      if (Math.max(...temp) === array[i][j]) answer++;
    }
    temp = [];
  }
  return answer;
}

let array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(array));
