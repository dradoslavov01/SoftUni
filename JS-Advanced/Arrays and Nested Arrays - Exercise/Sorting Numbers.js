function solve(arr) {
    let output = [];
    arr.sort((a, b) => a - b).forEach((x, i) => {
        output.push(arr[i]);
        output.push(arr[arr.length - 1 - i])
    })
    return output.slice(0, output.length / 2)
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));