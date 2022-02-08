function isAnagram(map1, map2) {
  // 1. 각 해쉬 맵의 크기가 다르다면 무조건 같지 않다.
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    // 2. 해쉬 맵의 크기는 같지만, 해당하는 키가 없는 경우가 있다. 키가 없다면 false를 리턴한다.
    if (!map2.has(key)) return false;
    // 3. 해쉬 맵의 크기도 같고, 해당하는 키의 값이 있다면, 마지막으로 그 값이 같은지를 비교한다. 벨류가 다르다면 false를 리턴한다.
    if (map2.get(key) !== value) return false;
  }
  return true;
}
function solution(string, target) {
  let answer = 0;
  // 타겟이 되는 해쉬와 스트링 해쉬 둘 다 맵을 만들어준다.
  let sHash = new Map();
  let tHash = new Map();
  // 비교할 타겟 해쉬를 구성한다.
  for (let x of target) {
    if (tHash.has(x)) tHash.set(x, tHash.get(x) + 1);
    else tHash.set(x, 1);
  }
  // 스트링 해쉬를 탐색하기 위해 Sliding Window를 준비한다.
  // 앞 뒤로 하나씩 뺀 나머지 2개 세팅. target.length - 1
  let length = target.length - 1;
  for (let i = 0; i < length; i++) {
    if (sHash.has(string[i])) sHash.set(string[i], sHash.get(string[i] + 1));
    else sHash.set(string[i], 1);
  }
  // Sliding Window를 사용하여 sHash의 값을 순차적으로 비교한다.
  let lt = 0;
  for (let rt = length; rt < string.length; rt++) {
    // sHash의 마지막 요소를 추가하면서 비교를 시작한다.
    if (sHash.has(string[rt])) sHash.set(string[rt], sHash.get(string[rt] + 1));
    else sHash.set(string[rt], 1);
    // sHash와 tHash를 비교한다.
    if (isAnagram(sHash, tHash)) answer++;
    // 왼쪽에 있던 요소를 삭제하여, 다음 루프 때 오른쪽에 있는 요소를 추가할 준비를 한다.
    sHash.set(string[lt], sHash.get(string[lt]) - 1);
    // 해쉬 맵에서는 요소가 없는 경우, 해당하는 key와 value 값을 삭제한다.
    if (sHash.get(string[lt]) <= 0) sHash.delete(string[lt]);
    lt++;
  }
  return answer;
}
let string = "bacaAacba";
let target = "abc";
console.log(solution(string, target));
