function solution(numer1, denom1, numer2, denom2) {
    
    let lcm = denom1 > denom2 ? denom1 : denom2;
    while(true){
        if(lcm % denom1 === 0 && lcm % denom2 === 0){
            break;
        }
        lcm++;
    }
    const result1 = numer1 * (lcm / denom1);
    const result2 = numer2 * (lcm / denom2);
    
    let answer = [];
    // answer.push(result1 + result2);
    // answer.push(lcm);
    const numer3 = result1 + result2;
    const denom3 = lcm;
    
    let gcd = numer3 < denom3 ? numer3 : denom3;
    while(true){
        if(numer3 % gcd === 0 && denom3 % gcd === 0){
            break;
        }
        gcd--;
    }
    answer.push(numer3 / gcd);
    answer.push(denom3 / gcd);
    return answer;
    
}