function solution(str) {
  let answer = "";
  let flag = 0;
  for (let x of str) {
    if (x === "(") flag += 1;
    if (flag === 0) answer += x;
    if (x === ")") flag -= 1;
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
