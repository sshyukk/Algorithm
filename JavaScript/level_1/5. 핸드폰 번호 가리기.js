function solution_1(num) {
  let answer = "";
  let len = num.length;
  for (let i = 0; i < len - 4; i++) answer += "*";
  for (let i = 4; i >= 1; i--) answer += num[len - i];
  return answer;
}

function solution_2(num) {
  let answer = "";
  answer = "*".repeat(num.length - 4) + num.slice(-4);
  return answer;
}

let num = "01048549652";
console.log(solution_2(num));
