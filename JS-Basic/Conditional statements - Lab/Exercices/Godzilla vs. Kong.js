function solve(movieBudget, statistsCount, clotheForOnePrice){
    movieBudget = Number(movieBudget);
    statistsCount = Number(statistsCount);
    clotheForOnePrice = Number(clotheForOnePrice);

    let decor = movieBudget * 0.10;
    let totalClothesPrice = (statistsCount * clotheForOnePrice);


    if(statistsCount > 150){
        totalClothesPrice = totalClothesPrice - (totalClothesPrice * 0.10);
    }
    let totalPrice = (decor + totalClothesPrice);
    let remainigMoney = movieBudget - totalPrice;
    let notEnoughMoney = totalPrice - movieBudget
    if(totalPrice <= movieBudget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${remainigMoney.toFixed(2)} leva left.`);
    }
    if(totalPrice > movieBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${notEnoughMoney.toFixed(2)} leva more.`);
    }    
    
    
}
solve(9587.88, 222, 55.68);