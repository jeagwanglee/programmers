function solution(numbers) {
    const max1 = Math.max.apply(null, numbers);
    const max1Index = numbers.findIndex((e) => e === max1);
    numbers.splice(max1Index, 1);
    const max2 = Math.max.apply(null, numbers);
    
    return max1 * max2
}