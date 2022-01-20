function solution(string) {
  let answer = string.replace(/[^0-9]/g, "");
  answer = parseInt(answer);
  return answer;
}

let string = "000g0en2T0s8eSoftfjie191022";
console.log(solution(string));
