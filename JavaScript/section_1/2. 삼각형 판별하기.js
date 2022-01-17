function solution(a, b, c) {
  let answer, maxNumber;
  let sum = a + b + c;

  if (a < b) maxNumber = b;
  else maxNumber = a;
  if (maxNumber < c) maxNumber = c;

  if (maxNumber >= sum - maxNumber) answer = "NO";
  else answer = "YES";

  return answer;
}

console.log(solution(13, 33, 17));
