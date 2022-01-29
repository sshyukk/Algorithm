function solution(string) {
  let temp = string.split(" ");
  return temp
    .map((element) => {
      let answer = "";
      for (let i = 0; i < element.length; i++) {
        if (i % 2 === 0) answer += element[i].toUpperCase();
        else answer += element[i].toLowerCase();
      }
      return answer;
    })
    .join(" ");
}

let string = "try hello world";
console.log(solution(string));
