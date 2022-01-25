function solution(array1, array2) {
  let answer;
  let temp = [...array1, ...array2].sort((a, b) => a - b);
  console.log(temp);
  return answer;
}

let array1 = [1, 3, 5];
let array2 = [2, 3, 6, 7, 9];
console.log(solution(array1, array2));
