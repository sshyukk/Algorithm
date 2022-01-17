function solution(string) {
  let answer = [];
  for (let i = 0; i < string.length; i++)
    // console.log(i, string.indexOf(string[i]), string[i]);
    if (string.indexOf(string[i]) === i) answer.push(string[i]);
  return answer;
}

let string = ["good", "time", "good", "time", "student"];
console.log(solution(string));
