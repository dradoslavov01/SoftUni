function solve(days, leftFood, foodDayDog, foodDayCat, foodDayTurtle){
    days = Number(days);
    leftFood = Number(leftFood);
    foodDayDog = Number(foodDayDog);
    foodDayCat = Number(foodDayCat);
    foodDayTurtle = Number(foodDayTurtle);

    let totalNeedFood = (days * foodDayDog) + (days * foodDayCat) + ((days * foodDayTurtle) / 1000);
    let remainingFood = leftFood - totalNeedFood;
    let neededFood = totalNeedFood - leftFood;
    if(leftFood >= totalNeedFood){
        console.log(`${Math.floor(remainingFood)} kilos of food left.`);
        
    }else{
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
        
    }

}
solve(5,
    10,
    2.1,
    0.8,
    321);