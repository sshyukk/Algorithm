function solution(number) {
  let answer;
  if (number % 12 === 0) answer = number / 12;
  else answer = parseInt(number / 12 + 1);
  return answer;
}

console.log(solution(120));
