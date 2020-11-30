function sumAndSubtract(x, y ,z) {

    function sum(a, b) {
        return a + b;
    }

    return sum(x, y) - z;
}
console.log(sumAndSubtract(23,
    6,
    10));