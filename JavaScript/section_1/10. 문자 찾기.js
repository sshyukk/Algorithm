function solution(string) {
  let answer = 0;
  let input = prompt("문자열을 입력하세요", "G");
  for (let x of string) {
    if (x === input) answer += 1;
  }

  return answer;
}

let string = "COMPUTERPROGRAMMING";
console.log(solution(string));
