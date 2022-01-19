function solution(string) {
  answer = string.toUpperCase();
  for (let i = 0; i < Math.floor(answer.length / 2); i++) {
    // console.log(string[i], string[string.length - 1 - i]);
    if (answer[i] !== answer[answer.length - 1 - i]) return false;
    else return true;
  }
}

let string = "level";
console.log(solution(string));
