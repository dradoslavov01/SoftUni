function solve(arr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let ele of arr) {
        if (ele % 2 === 0) {
            evenSum += ele;
        } else {
            oddSum += ele;
        }
    }
    console.log(evenSum - oddSum);
}
solve([ 1, 2, 3, 4, 5, 6 ]);