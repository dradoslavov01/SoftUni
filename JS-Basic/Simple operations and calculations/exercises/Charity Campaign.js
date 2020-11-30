function company(daysCount, cookersCount, cakesCount, wafflesCount, pancakesCount){

    daysCount = Number(daysCount);
    cookersCount = Number(cookersCount);
    cakesCount = Number(cakesCount);
    wafflesCount = Number(wafflesCount);
    pancakesCount = Number(pancakesCount);

    let cake = 45;
    let waffle = 5.8;
    let pancake = 3.2;

    let cakes = cakesCount * cake;
    let waffles = wafflesCount * waffle;
    let pancakes = pancakesCount * pancake;

    let totalForADay = (cakes + waffles + pancakes) * cookersCount;
    

    let totalForACompany = totalForADay * daysCount;
    let leftMoney = totalForACompany / 8; 
    let solve = totalForACompany - leftMoney

    console.log(solve.toFixed(2));
    

}
company(20, 8, 14, 30, 16);