function solution(string) {
  let answer = [];
  answer = string.filter((value, index) => {
    return string.indexOf(value) === index;
  });
  return answer;
}

let string = ["good", "time", "good", "time", "student"];
console.log(solution(string));
