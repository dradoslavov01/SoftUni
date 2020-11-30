function solve(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let printLine = '';
    for(let i = firstNumber; i <= secondNumber; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNum = i.toString();
        for(let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if(j % 2 === 0){
                evenSum += currentDigit
            }else{
                oddSum += currentDigit;
            }
            
        }
        if(oddSum === evenSum) {
            printLine += i + ' ';
        }
    }
    log
    
}
solve(['100000', '100050']);