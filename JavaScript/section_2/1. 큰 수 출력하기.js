function solution(number, array) {
  let answer = [];
  answer = array.filter((value, index) => {
    return value >= number;
  });
  return answer;
}

let number = 6;
let array = [7, 3, 9, 5, 6, 12];
console.log(solution(number, array));
