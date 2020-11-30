function solve([desiMoney, monthCount, needMoney]){
    desiMoney = Number(desiMoney);
    monthCount = Number(monthCount);
    needMoney = Number(needMoney);

    let desiNeedMoney = desiMoney * 0.30;
    let savedMoney = desiMoney - (desiNeedMoney + needMoney);
    let forthreeMonths = monthCount * savedMoney;
    let procent = savedMoney / desiMoney * 100;

    console.log(`She can save ${procent.toFixed(2)}%`);
    console.log(forthreeMonths.toFixed(2));
    
    
}
solve(1500, 3, 800);