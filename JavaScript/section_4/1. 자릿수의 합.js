function solution(string) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let array = string.split(" ");

  for (let x of array) {
    let temp = Number(x);
    let sum = 0;
    // while문은 조건문 반복에서 값이 0이되면 종료되는 상황에 적합
    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    // 각 자릿수의 최대 합을 출력
    if (sum > max) {
      max = sum;
      answer = x;
    }
    // 각 자릿수의 합이 같은 경우
    if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let string = "128 460 603 40 521 137 123";
console.log(solution(string));
