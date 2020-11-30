function solve(input) {
    let trunkVolume = Number(input.shift());
    let suitcase = input.shift()

    let currentVolume = 0;
    let suitcaseCounter = 0;
    let isFull = false;
    while (suitcase != 'End') {
        let suitcaseVolume = Number(suitcase)
        currentVolume += suitcaseVolume;
        suitcaseCounter++
        if(suitcaseCounter % 3 === 0) {
            suitcaseVolume *= 0.10;
            currentVolume += suitcaseVolume;
        }
        if(currentVolume > trunkVolume) {
            suitcaseCounter--;
            isFull = true;
            break;
        }
        suitcase = input.shift()
    }
    if(isFull){
        console.log('No more space!');
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
    }
    if (trunkVolume >= currentVolume) {
        console.log('Congratulations! All suitcases are loaded!');
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
        
        
    }
}
solve([ '700.5', '180', '340.6', '126', '220', '' ]);