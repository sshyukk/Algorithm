function solution(str, char) {
  let answer = [];
  let arr = str.split("");
  let temp = [];

  // char의 index 값 추출.
  arr.forEach((value, index) => {
    if (char === value) temp.push(index);
  });
  // index 값 순차적으로 순회.
  // char의 index 값과 비교 후 최소값 추출.
  for (let i = 0; i < arr.length; i++) {
    let minArr = [];
    for (let x of temp) {
      minArr.push(Math.abs(i - x));
    }
    answer.push(Math.min(...minArr));
  }
  return answer;
}

let str = "teachermode";
let char = "e";
console.log(solution(str, char));
