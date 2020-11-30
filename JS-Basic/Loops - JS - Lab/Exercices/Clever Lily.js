function solve(years, washingMachinePrice, toyPrice){
    years = Number(years);
    washingMachinePrice = Number(washingMachinePrice);
    toyPrice = Number(toyPrice);

    let savedMoney = 0;
    let birthdayMoney = 10;
    for(let i = 1; i <= years; i++){
        if(i % 2 != 0){
            savedMoney += toyPrice
        }else{
            savedMoney += birthdayMoney - 1;
            birthdayMoney += 10
        }
    }
  
    let result = Math.abs(savedMoney - washingMachinePrice);

    if(savedMoney >= washingMachinePrice){
        console.log(`Yes! ${result.toFixed(2)}`);
        
    }else{
        console.log(`No! ${result.toFixed(2)}`);
        
    }
  
}
solve(21,
    1570.98,
    3)