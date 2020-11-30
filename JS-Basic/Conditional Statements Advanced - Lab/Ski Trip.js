function solve(daysForStay, typeOfRoom, eveluation){
    daysForStay = Number(daysForStay) - 1;
    let price = 0;

    if(typeOfRoom == 'room for one person'){
        price = ((daysForStay) * 18);
    }else if(typeOfRoom == 'apartment'){
        if(daysForStay < 10){
            price = ((daysForStay) * 25) * 0.7;
        }else if(daysForStay >= 10 && daysForStay <= 15){
            price = ((daysForStay) * 25) * 0.65;
        }else if(daysForStay > 15){
            price = ((daysForStay) * 25) * 0.5;
        }
    }else if(typeOfRoom == 'president apartment'){
        if(daysForStay < 10){
            price = ((daysForStay) * 35) * 0.9;
        }else if(daysForStay >= 10 && daysForStay <= 15){
            price = ((daysForStay) * 35) * 0.85;
        }else if(daysForStay > 15){
            price = ((daysForStay) * 35) * 0.8;
        }
    }
    if(eveluation == 'positive'){
        price = price * 0.25 + price

    }else{
        price *= 0.9;
    }
    console.log(price.toFixed(2));
    
}
solve(2, 'apartment', 'positive');