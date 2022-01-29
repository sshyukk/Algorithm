function solution(num) {
  let answer = 0;
  let temp = String(num).split("");
  for (let x of temp) {
    answer += Number(x);
  }
  return answer;
}

let num = 123;
console.log(solution(num));
