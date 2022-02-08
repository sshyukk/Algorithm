function solution(str) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let hash = new Map();
  for (let x of str) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
  }
  // 해쉬 맵은 키벨류의 값이 배열의 형태로 들어간다.
  for (let [key, value] of hash) {
    if (value >= max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
