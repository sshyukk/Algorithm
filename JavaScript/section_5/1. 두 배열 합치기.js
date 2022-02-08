function solution(array1, array2) {
  let answer = [];
  let n = array1.length;
  let m = array2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (array1[p1] <= array2[p2]) answer.push(array1[p1++]);
    else answer.push(array2[p2++]);
  }
  while (p1 < n) answer.push(array1[p1++]);
  while (p2 < m) answer.push(array2[p2++]);
  return answer;
}

let array1 = [1, 3, 5];
let array2 = [2, 3, 6, 7, 9];
console.log(solution(array1, array2));
