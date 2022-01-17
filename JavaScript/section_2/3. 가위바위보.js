function solution(number, array) {
  let answer = [];
  for (let i = 0; i < number; i++) {
    if (array[0][i] > array[1][i]) {
    } else if (array[0][i] < array[1][i]) {
    } else {
      console.log("D");
    }
  }

  return answer;
}
let number = 5;
let array = [
  [2, 3, 3, 1, 3],
  [1, 1, 2, 2, 3],
];
console.log(solution(number, array));
