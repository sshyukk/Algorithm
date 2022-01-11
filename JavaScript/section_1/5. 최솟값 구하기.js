function solution(n) {
  let answer = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] <= answer) answer = n[i];
  }
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
