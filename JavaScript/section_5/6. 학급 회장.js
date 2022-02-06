function solution(str) {
  let answer = [0, 0, 0, 0, 0];
  let temp = str.split("");
  for (let x of temp) {
    answer[x.charCodeAt() - 65]++;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let index = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] >= max) {
      max = answer[i];
      index = i;
    }
  }
  return String.fromCharCode(65 + index);
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
