function solution(str1, str2) {
  let temp1 = str1.split("");
  let temp2 = str2.split("");
  let answer1 = [],
    answer2 = [];
  for (let x of temp1) {
    answer1[x.charCodeAt()]++;
  }
  for (let x of temp2) {
    answer2[x.charCodeAt()]++;
  }
  let flag = "YES";
  for (let i = 0; i < temp1.length; i++) {
    if (answer1[i] !== answer2[i]) flag = "NO";
  }
  return flag;
}

let str1 = "abaCC";
let str2 = "Caaab";
console.log(solution(str1, str2));
