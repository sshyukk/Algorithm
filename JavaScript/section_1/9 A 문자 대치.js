function solution(string) {
  let answer = "";
  for (let x of string) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let string = "BANANA";
console.log(solution(string));
