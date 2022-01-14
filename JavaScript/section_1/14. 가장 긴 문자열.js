function solution(array) {
  let answer = array[0];
  for (let x of array) {
    if (x.length > answer.length) answer = x;
  }
  return answer;
}

const array = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(array));
