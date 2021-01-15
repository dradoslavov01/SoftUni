function solve(arr) {
    let result = [];
    arr.reduce((acc, c) => {
        if (c >= acc) {
            result.push(c)
            acc = c;
        }
        return acc
    }, Number.MIN_SAFE_INTEGER);
    
    return result
    
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24])); 
