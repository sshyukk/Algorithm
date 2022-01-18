function solution(array) {
  // for (let i = 1; i < array.length; i++) {
  //   let temp = 0;
  //   for (let j = 0; j < i; j++) {
  //     if (array[i] <= array[j]) temp += 1;
  //   }
  //   if (temp === 0) answer += 1;
  // }
  let answer = 1;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      answer += 1;
      max = array[i];
    }
  }
  return answer;
}

let array = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(array));
