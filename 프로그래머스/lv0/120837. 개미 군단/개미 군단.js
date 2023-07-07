function solution(hp) {  
    let answer = 0;
  let remain = hp;
  for (let i = 5; i > 0; i -= 2) {
    answer += parseInt(remain / i);
    remain %= i;
    if (remain === 0) return answer;
  }
}