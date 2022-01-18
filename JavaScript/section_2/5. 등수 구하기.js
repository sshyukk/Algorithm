function solution(array) {
  let answer = [];
  for (let x of array) answer.push(1);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) answer[i]++;
    }
  }
  return answer;
}

let array = [87, 89, 92, 100, 76];
console.log(solution(array));
