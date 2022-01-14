function solution(string) {
  let answer = "";
  for (let x of string) {
    let code = x.charCodeAt();
    if (code >= 97 && code <= 122) {
      code -= 32;
      answer += String.fromCharCode(code);
    } else {
      answer += x;
    }
  }
  return answer;
}

let string = "ItsTimeToStudy";
console.log(solution(string));
