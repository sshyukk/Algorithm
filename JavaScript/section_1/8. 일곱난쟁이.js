function solution(array) {
  let answer = array; // 얕은 복사.
  let sum = array.reduce((accmulation, value) => accmulation + value, 0); // 배열의 총 합 구하기.
  for (let i = 0; i < array.length - 1; i++) {
    // 중복 없이 배열을 쌍으로 탐색하기. 조합.
    for (let j = i + 1; j < array.length; j++) {
      if (sum - (array[i] + array[j]) === 100) {
        array.splice(j, 1); // 배열의 앞 쪽에서 spice하는 경우, 인덱스의 값이 바뀌기 때문에 뒤에서부터 제거.
        array.splice(i, 1);
      }
    }
  }
  return answer;
}

let array = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(array));
