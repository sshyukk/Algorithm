function solution(str1, str2) {
  let answer = "YES";
  // 비교를 위해 해쉬맵을 하나만 만든다. 2개를 만들 필요 x.
  // 기준이 되는 해쉬맵의 값을 하나 생성해준다.
  let hash = new Map();
  for (let x of str1) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  // 비교할 다른 string 값을 탐색한다.
  for (let x of str2) {
    if (!hash.has(x)) return "NO";
    if (hash.get(x) <= 0) return "NO";
    hash.set(x, hash.get(x) - 1);
  }

  return answer;
}

let str1 = "AbaAeCe";
let str2 = "baeeACA";
console.log(solution(str1, str2));
