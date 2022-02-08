function solution(arr, num) {
  let answer,
    sum = 0;
  for (let i = 0; i < num; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[k] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, 3));
