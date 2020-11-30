function solve(inputNum, precisionNum) {

    if(precisionNum > 15) {
        precisionNum = 15
    }
    let roundedNum = inputNum.toFixed(precisionNum);
    let result = parseFloat(roundedNum);
    console.log(result);
}
solve(10.5,4);