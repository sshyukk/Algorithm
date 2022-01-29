function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
    if (count >= 500) return -1;
  }

  return count;
}

let num = 6;
console.log(solution(num));
