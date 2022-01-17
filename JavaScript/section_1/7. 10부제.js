function solution(day, numbers) {
  let answer = 0;
  for (let number of numbers) {
    if (day === number % 10) answer += 1;
  }
  return answer;
}

let day = 3;
let numbers = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(day, numbers));
