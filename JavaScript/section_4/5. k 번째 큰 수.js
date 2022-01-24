function solution(array, number) {
  let answer = 0;
  let length = array.length;
  let temp = array.sort((a, b) => b - a);
  let count = 0;
  console.log(temp);
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        count++;
        if (number === count) answer = temp[i] + temp[j] + temp[k];
      }
    }
  }

  return answer;
}

let array = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(array, 4));
