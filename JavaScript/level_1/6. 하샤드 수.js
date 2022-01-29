function solution(num) {
  let answer = 0;
  let temp = String(num).split("");
  for (let x of temp) {
    answer += Number(x);
  }
  if (num % answer === 0) return true;
  else return false;
}

let num = 12;
console.log(solution(num));
