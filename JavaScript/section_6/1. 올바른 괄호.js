function solution(str) {
  let answer = [];
  for (let x of str) {
    if (x === "(") answer.push(x);
    else answer.pop();
  }
  if (answer.length !== 0) return "NO";
  else return "YES";

  return answer;
}

console.log(solution("(()(()))(()"));
