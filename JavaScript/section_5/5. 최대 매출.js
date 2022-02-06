function solution(arr, num) {
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp >= answer) answer = temp;
  }
  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
