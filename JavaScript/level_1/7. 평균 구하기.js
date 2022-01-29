function solution(arr) {
  let answer = 0;
  answer = arr.reduce((acc, value) => acc + value, 0) / arr.length;
  return answer;
}

const arr = [1, 2, 3, 4];
console.log(solution(arr));
