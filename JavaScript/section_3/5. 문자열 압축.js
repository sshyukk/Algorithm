function solution(string) {
  let answer = "";
  let count = 1;
  let length = string.length;
  array = string.split("");
  array.push("");

  for (let i = 0; i < length; i++) {
    if (array[i] === array[i + 1]) count++;
    else {
      answer += array[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }
  return answer;
}

let string = "KKHSSSSSSSE";
console.log(solution(string));
