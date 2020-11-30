function solve(budget, season){
    budget = Number(budget);

    let clas, car, price;

    if(budget <= 100){
        clas = 'Economy class';
            if(season == "Summer"){
                car = 'Cabrio';
                price = budget * 0.35;
            }else{
                car = 'Jeep';
                price = budget * 0.65;
            }
    }else if(budget > 100 && budget <= 500){
        clas = 'Compact class';
            if(season == 'Summer'){
                car = 'Cabrio';
                price = budget * 0.45;
            }else{
                car = 'Jeep';
                price = budget * 0.8;
            }
    }else{
        clas = 'Luxury class';
        car = 'Jeep';
        price = budget * 0.9;
            
    }
    console.log(clas);
    console.log(`${car} - ${price.toFixed(2)}`);
        
}
solve(1010, 'Summer');