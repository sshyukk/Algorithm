function solution(array) {
  let answer = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) answer.push(array[i]);
  }
  return answer;
}

let array = [7, 3, 9, 5, 6, 12];
console.log(solution(array));
