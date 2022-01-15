function solution(string) {
  let answer = "";
  for (let x of string) {
    console.log(x);
    for (let y of answer) {
      console.log(y);
      if (x !== y) answer += x;
    }
  }
  return answer;
}

let string = "ksekkset";
console.log(solution(string));
