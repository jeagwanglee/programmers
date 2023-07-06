function solution(my_string) {
    var answer = '';
    const upperCaseString = my_string.toUpperCase();
    for(let i=0; i<my_string.length; i++){
        const currentChar = my_string[i];
        if(currentChar === upperCaseString[i]){
            answer = answer.concat(currentChar.toLowerCase())
        }else{
            answer = answer.concat(currentChar.toUpperCase())
        }
    }
    return answer;
}