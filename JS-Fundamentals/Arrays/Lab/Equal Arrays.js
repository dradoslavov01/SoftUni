function solve(firstArr, secondArr) {
    let sum = 0;
    let notEqual;
    let isEqual = false;
    
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);

    }
    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i])
    
    }
    
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i] ) {
            isEqual = true;
            sum += firstArr[i]
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
          
        }
    }
    
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
}
solve([ '1', '2', '3', '4', '5' ], [ '1', '2', '4', '4', '5' ]);