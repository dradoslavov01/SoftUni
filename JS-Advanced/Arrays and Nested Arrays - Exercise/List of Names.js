function solve(input) {
    input.sort((a, b) => a.localeCompare(b));
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += `${i + 1}.${input[i]}\n`
    }
    return output
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));