function solution(string) {
  let answer = "";
  for (let x of string) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  return answer;
}

let string = "StuDY";
console.log(solution(string));
