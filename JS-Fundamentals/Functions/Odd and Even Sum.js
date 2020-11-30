function oddAndEven(num) {
    let arr = String(num).split('');
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = Number(arr[i])

        if (number % 2 == 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    return `Odd sum: = ${evenSum}, Even sum: = ${oddSum}`
}
console.log(oddAndEven(1000435));