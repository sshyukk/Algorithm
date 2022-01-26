function solution(arr1, arr2) {
  let answer = [];
  let temp = [];
  let x = arr1[0].length;
  let y = arr1.length;
  for (let i = 0; i < y; i++) {
    temp = [];
    for (let j = 0; j < x; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

let arr1 = [[1], [2]];
let arr2 = [[3], [4]];
console.log(solution(arr1, arr2));
