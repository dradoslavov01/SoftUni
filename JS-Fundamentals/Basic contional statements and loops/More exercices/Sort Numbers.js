function solve (firstNum, secondNum, thirdNum) {

    if (firstNum >= secondNum && secondNum >= thirdNum) {
        console.log(firstNum);
        console.log(secondNum);
        console.log(thirdNum);
    } else if (secondNum >= firstNum && firstNum >= thirdNum) {
        console.log(secondNum);
        console.log(firstNum);
        console.log(thirdNum);
    } else if (thirdNum >= secondNum && secondNum >= firstNum) {
        console.log(thirdNum);
        console.log(secondNum);
        console.log(firstNum);
    }else if (firstNum >= thirdNum && thirdNum >= secondNum) {
        console.log(firstNum);
        console.log(thirdNum);
        console.log(secondNum);
    } else if (secondNum >= firstNum && thirdNum >= firstNum) {
        console.log(secondNum);
        console.log(thirdNum);
        console.log(firstNum);
    } else if (thirdNum >= secondNum && firstNum >= secondNum) {
        console.log(thirdNum);
        console.log(firstNum);
        console.log(secondNum);
    }

}

solve(2, 1, 3);