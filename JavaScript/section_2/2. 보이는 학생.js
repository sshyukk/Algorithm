function solution(array) {
  let answer = 1;
  for (let i = 1; i < array.length; i++) {
    let temp = 0;
    for (let j = 0; j < i; j++) {
      if (array[i] <= array[j]) temp += 1;
    }
    if (temp === 0) answer += 1;
  }
  return answer;
}

let array = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(array));
