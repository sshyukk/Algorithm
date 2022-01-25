// 소수 판별 함수.
function isPrime(number) {
  if (number === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(string) {
  array = string.split(" ");
  for (let x of array) {
    let temp = Number(x.split("").reverse().join(""));
    // console.log(temp);
    if (temp === 1) break;
    if (isPrime(temp)) console.log(temp);
  }
}

let string = "32 55 62 20 250 370 200 30 100";
console.log(solution(string));
