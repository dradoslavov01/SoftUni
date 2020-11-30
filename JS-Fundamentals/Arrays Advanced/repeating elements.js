function solve(inputArr) {
    
    let uniqueChars = inputArr.filter((c, index) => {
        return inputArr.indexOf(c) === index;
    });
    return uniqueChars.join(' ')
}
console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));