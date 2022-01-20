function solution(string) {
  let answer = "";
  let array = string.toLowerCase().split("");
  for (let x of array) {
    if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) answer += x;
  }
  if (answer.split("").reverse().join("") === answer) return "Yes";
  else return "No";
}

let string = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(string));
