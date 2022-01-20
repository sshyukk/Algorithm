function solution(string) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  console.log(answer);
  let array = string.split(" ");
  for (let x of array) {
    console.log(x);
    let sum = 0;
    let temp = x.split("");
    console.log(temp);
    sum = temp.reduce(
      (accumulation, value) => accumulation + parseInt(value),
      0
    );
    console.log(sum);
    if (sum > max) {
      max = sum;
      answer = x;
    }
  }
  return answer;
}

let string = "128 460 603 40 521 137 123";
console.log(solution(string));
