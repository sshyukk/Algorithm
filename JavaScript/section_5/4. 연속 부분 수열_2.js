function solution(arr, num) {
  let answer = 0;
  let p1 = (p2 = 0);
  while (p1 < arr.length) {
    let sum = arr[p1];
    if (sum <= num) answer++;
    p2 = p1 + 1;
    while (p2 < arr.length) {
      sum += arr[p2++];
      if (sum <= num) answer++;
      else break;
    }
    p1++;
  }

  return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
