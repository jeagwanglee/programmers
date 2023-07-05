function solution(slice, n) {
    var answer = 0;
    let quotient = parseInt(n / slice);
    if(n % slice === 0 ){
        answer = quotient;
    }else{
        answer = quotient+1;
    }
    return answer;
}