function solve(tripPrice, puzzleCount, dollCount, toyCount, minionCount, truckCount){
    tripPrice = Number(tripPrice);
    puzzleCount = Number(puzzleCount);
    dollCount = Number(dollCount);
    toyCount = Number(toyCount);
    minionCount = Number(minionCount);
    truckCount = Number(truckCount);
    
    let puzzle = 2.6;
    let doll = 3;
    let toy = 4.1;
    let minion = 8.2;
    let truck = 2;

    let totalCount = puzzleCount + dollCount + toyCount + minionCount + truckCount;

    let puzzleTotalPrice = puzzleCount * puzzle;
    let dollTotalPrice = dollCount * doll;
    let toyTotalPrice = toyCount * toy;
    let minionTotalPrice = minionCount * minion;
    let truckTotalPrice = truckCount * truck;

    let totalPrice = puzzleTotalPrice + dollTotalPrice + toyTotalPrice + minionTotalPrice + truckTotalPrice;

    if(totalCount >= 50){
        totalPrice = totalPrice * 0.75;
        
    }
    let petqMoney = totalPrice * 0.9;
    let moneyLeft = petqMoney - tripPrice; 
    let notEnoughMoney = tripPrice - petqMoney
    if(petqMoney >= tripPrice){
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
        
    }else{
        console.log(`Not enough money! ${notEnoughMoney.toFixed(2)} lv needed.`);
        
    }
 
}
solve(320, 8, 2, 5, 5, 1);