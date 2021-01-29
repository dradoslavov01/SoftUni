function solve() {
    let n1 = 0;
    let n2 = 1;
    let nextN;
    function nextNum() {
        nextN = n1 + n2;
        n1 = n2;
        n2 = nextN;
        return n1;
    }
    return nextNum;
}
let func = solve();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());








