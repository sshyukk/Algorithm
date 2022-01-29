function solution(num) {
  let answer = Number(
    String(num)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  return answer;
}
let num = 118372;
console.log(solution(num));
