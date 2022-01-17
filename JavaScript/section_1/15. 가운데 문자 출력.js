function solution(string) {
  let answer = "";
  if (string.length % 2 === 1) {
    // 문자열이 홀수일 때
    answer += string[Math.floor(string.length / 2)];
  } else {
    // 문자열이 짝수일 때
    answer += string[Math.floor(string.length / 2)];
    answer += string[Math.floor(string.length / 2) - 1];
  }
  return answer;
}

let string = "study";
console.log(solution(string));
