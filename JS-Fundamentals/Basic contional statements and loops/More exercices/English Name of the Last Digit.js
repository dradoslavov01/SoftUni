function solve(num) {

    num = String(num)
    let lastLetter = num[num.length - 1];
    
    if(lastLetter == 0) {
        console.log('zero');
    }else if (lastLetter == 1) {
        console.log('one');
    } else if (lastLetter == 2) {
        console.log('two');
    } else if (lastLetter == 3) {
        console.log('three');
    } else if (lastLetter == 4) {
        console.log('four');
    } else if (lastLetter == 5) {
        console.log('five');
    } else if (lastLetter == 6) {
        console.log('six');
    } else if (lastLetter == 7) {
        console.log('seven');
    } else if (lastLetter == 8) {
        console.log('eight');
    } else if (lastLetter == 9) {
        console.log('nine');
    }
}   

solve(512)