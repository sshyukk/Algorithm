function solution(arr, num) {
  let answer = 0;
  let p1 = (p2 = 0);
  while (p1 < arr.length) {
    let sum = arr[p1];
    p2 = p1 + 1;
    while (sum <= num) {
      if (p2 >= arr.length) break;
      sum += arr[p2++];
      if (sum === num) {
        answer++;
        break;
      }
    }
    p1++;
  }

  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr, 6));
