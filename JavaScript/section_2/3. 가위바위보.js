function solution(array) {
  let answer = [];
  let A = array[0];
  let B = array[1];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer.push("D");
    else if (A[i] === 1 && B[i] === 3) answer.push("A");
    else if (A[i] === 2 && B[i] === 1) answer.push("A");
    else if (A[i] === 3 && B[i] === 2) answer.push("A");
    else answer.push("B");
  }
  return answer;
}

let array = [
  [2, 3, 3, 1, 3],
  [1, 1, 2, 2, 3],
];
console.log(solution(array));
