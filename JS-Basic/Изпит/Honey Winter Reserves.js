function solve(input) {
    let needHoney = Number(input.shift());
 
    let banished  = false;
    let totalMadeHoney = 0;
 
    let bee = input.shift();
    while(bee != 'Winter has come') {
        let honeyMade = 0;
 
        for(let i = 1; i <= 6; i++) {
            let honeyPerMonth = Number(input.shift());
            honeyMade += honeyPerMonth;
        }
 
        totalMadeHoney += honeyMade;
 
        if(honeyMade < 0) {
            console.log(`${bee} was banished for gluttony`);
        }
 
        if(totalMadeHoney >= needHoney) {
            banished  = true;
            break;
        }
 
        bee = input.shift();
    }
 
    if (banished ) {
        let honeySurpluss = totalMadeHoney - needHoney;
        console.log(`Well done! Honey surplus ${honeySurpluss.toFixed(2)}.`);
    } else {
        let difference = needHoney - totalMadeHoney;
        console.log(`Hard Winter! Honey needed ${difference.toFixed(2)}.`);
    }
}
solve([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
  ]);