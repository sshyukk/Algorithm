function solution(string) {
  let answer = 0;
  for (let x of string) {
    if (x.toUpperCase() === x) answer += 1;
  }

  return answer;
}

console.log(solution("KoreaTimeGood"));
