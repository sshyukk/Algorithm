function solution(arr, num) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > num) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
