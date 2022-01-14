function solution(string) {
  let answer = string;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let string = "BANANA";
console.log(solution(string));
