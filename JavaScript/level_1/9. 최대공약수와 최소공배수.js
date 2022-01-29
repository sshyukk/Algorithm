function solution(num1, num2) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  // 최대공약수
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) max = i;
  }
  answer.push(max);
  // 최소공배수
  min = max * (num1 / max) * (num2 / max);
  answer.push(min);
  return answer;
}

console.log(solution(2, 5));
