function solve(input){
    let needMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());

    let days = 0;
    let spendCounter = 0;
    while (spendCounter < 5 && ownedMoney < needMoney){
        
           let command = input.shift();
           let money = Number(input.shift());

           if(command === 'spend'){
            ownedMoney -= money ;

                if(ownedMoney < 0){
                    ownedMoney = 0;
                }
                spendCounter++
            }else{
                ownedMoney += money;
                spendCounter = 0;
            }

           days++;
    }
    if(spendCounter === 5){
        console.log("You can't save the money.");
        console.log(days);
    }
    if(ownedMoney >= needMoney){
        console.log(`You saved the money for ${days} days.`);
        
    }
}
solve(
    [
        '250',   '150',
        'spend', '50',
        'spend', '50',
        'save',  '100',
        'save',  '100'
      ]
      
);