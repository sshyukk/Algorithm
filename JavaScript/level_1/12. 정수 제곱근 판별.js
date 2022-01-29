function solution(num) {
  let answer = 0;
  if (Math.sqrt(num) === Math.ceil(Math.sqrt(num)))
    answer = (Math.sqrt(num) + 1) * (Math.sqrt(num) + 1);
  else answer = -1;
  return answer;
}

console.log(solution(121));
