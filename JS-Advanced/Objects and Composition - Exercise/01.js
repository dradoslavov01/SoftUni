function solve(input) {
    const obj = {};
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            obj[input[i]] = +input[i + 1];
        }
    }
    return obj
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));

