function solution(array) {
  //let answer = 0;
  let sum = 0;
  let minNumber = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sum += array[i];
      if (array[i] < minNumber) minNumber = array[i];
    }
  }

  console.log(sum, minNumber);
}

array = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(array));
