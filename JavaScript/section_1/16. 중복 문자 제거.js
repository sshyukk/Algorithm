function solution(string) {
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i], string.indexOf(string[i]), i);
    if (i === string.indexOf(string[i])) answer += string[i];
  }
  return answer;
}

let string = "ksekkset";
console.log(solution(string));
