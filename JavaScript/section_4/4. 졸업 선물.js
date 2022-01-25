function solution(array, number) {
  let sum = [];
  for (let x of array) sum.push(x.reduce((acc, value) => acc + value, 0)); //총 비용 값 계산.
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    let temp = sum.slice(); // 깊은 복사.
    let budget = number;
    let count = 0;
    temp[i] -= array[i][0] / 2; // 할인율 적용.
    temp.sort((a, b) => a - b); // 오름차순 정렬.
    for (let x of temp) {
      budget -= x;
      if (budget >= 0) count++;
      else break;
    }
    if (count > max) max = count;
  }
  return max;
}

let array = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
let number = 28;
console.log(solution(array, number));
