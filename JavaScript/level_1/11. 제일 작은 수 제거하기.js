function solution(arr) {
  let answer = [];
  if (arr.length <= 1) {
    answer.push(-1);
    return answer;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== Math.min(...arr)) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));
