function solution(num) {
  let answer = [];
  while (num !== 0) {
    answer.push(num % 10);
    num = Math.floor(num / 10);
  }
  return answer;
}

let num = 12345;
console.log(solution(num));
