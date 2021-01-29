function solve(arr, sorting) {
    if (sorting === 'asc') {
        arr.sort((a,b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));