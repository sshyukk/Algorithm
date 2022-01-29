function solution(x, n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x + i * x);
  }
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
