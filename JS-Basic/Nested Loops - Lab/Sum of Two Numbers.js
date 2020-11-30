function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let counter = 0;
    let fNumber = 0;
    let sNumber = 0;
    let isFound =  false;

    for(let i = start; i <= end; i++){
        fNumber = i;
        for(let j = start; j <= end; j++){
            sNumber = j;
            counter++;
            if(i + j == magicNumber) {
                console.log(`Combination N:${counter} (${fNumber} + ${sNumber} = ${magicNumber})`);
                
                isFound = true;
                break;
            }
        }
        if(isFound) {
            break;
        }
    }
    if(fNumber + sNumber != magicNumber) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
        
    }
}
solve(['1', '10', '5']);