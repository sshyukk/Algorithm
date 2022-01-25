function solution(array) {
  let answer = 0,
    temp = [];
  let people = array[0].length;
  let exams = array.length;

  for (let i = 1; i <= people; i++) {
    for (let j = 1; j <= people; j++) {
      // 멘토와 멘티의 모든 경우의 수 출력.
      console.log(i, j);
      let count = 0;
      // 시험 횟수 순회.
      for (let k = 0; k < exams; k++) {
        let mentor = (mentee = 0);
        // 각 학생 별로 순위 지정.
        for (let s = 0; s < people; s++) {
          if (i === array[k][s]) mentor = s;
          if (j === array[k][s]) mentee = s;
        }
        // 멘토가 멘티보다 시험 등수가 높을 때.
        if (mentor < mentee) count++;
      }
      // 멘토, 멘티의 관계가 이상이 없을 때 정답 출력.
      if (count === exams) {
        temp.push([i, j]);
        answer++;
      }
    }
  }
  console.log(temp);
  return answer;
}

let array = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(array));
