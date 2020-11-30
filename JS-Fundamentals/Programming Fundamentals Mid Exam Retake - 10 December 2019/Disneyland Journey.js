function solve(inputArr) {
    inputArr.map(x => +x)
    let nedeedMoney = inputArr.shift();
    let months = inputArr.shift();
    let moneyEndOfTheMonth = 0;
    let forthMonth = 0;
    let spentMoneyForClothes = 0;

    for (let i = 1; i <= months; i++) {

        if (i % 2 != 0 && i != 1) {
            spentMoneyForClothes = moneyEndOfTheMonth * 0.16;
            moneyEndOfTheMonth -= spentMoneyForClothes;
        }
       
        if (i % 4 == 0) {
            forthMonth += moneyEndOfTheMonth * 0.25;
            moneyEndOfTheMonth += forthMonth;
        }
       
        moneyEndOfTheMonth += (nedeedMoney * 0.25);

    }   
    let result = Math.abs(moneyEndOfTheMonth - nedeedMoney);
    if (moneyEndOfTheMonth >= nedeedMoney) {
        return `Bravo! You can go to Disneyland and you will have ${result.toFixed(2)}lv. for souvenirs.`
    } else {
        return `Sorry. You need ${result.toFixed(2)}lv. more.`
    }
}

console.log(solve([ '3265', '3']));