function solution(array) {
  let answer = 0;
  let score = 0;
  // 0번 문제가 없기 때문에 1번 문제는 처음에 지정해준다.
  if (array[0] === 1) answer = 1;
  // 문제를 맞추었을 때를 2가지로 나눈다.
  // 문제를 맞추고 이전 문제도 맞추었을 경우. 문제를 맞추었지만 이전 문제는 틀렸을 경우.
  // 마지막으로 틀렸을 때 누적 값을 초기화한다.
  for (let i = 1; i < array.length; i++) {
    if (array[i] === 1 && array[i - 1] === 0) {
      score++;
      answer += score;
    } else if (array[i] === 1 && array[i - 1] === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  }
  return answer;
}

let array = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(array));
