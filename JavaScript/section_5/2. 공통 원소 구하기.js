function solution(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  while (p1 < arr1.length && p2 < arr2.length) {
    // 각 배열의 원소 값이 다를 경우
    if (arr1[p1] !== arr2[p2]) {
      if (arr1[p1] < arr2[p2]) p1++;
      else p2++;
    }
    // 각 배열의 원소 값이 같을 경우
    else {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
