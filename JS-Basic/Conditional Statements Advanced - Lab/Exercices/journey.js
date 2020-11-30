function solve(budget, season){
    budget = Number(budget);

    let destination;
    let typeOfHoliday;

    
    
    if(budget <= 100 && season == 'summer'){
        destination = 'Bulgaria';
        if(season == 'summer'){
            budget *= 0.3;
        }else{
            budget *= 0.7;
        }
    }else if(budget <= 1000){
        destination = 'Balkans';
        if(season ==  'summer'){
            budget *= 0.4;
        }else{
            budget *= 0.8;
        }
    }else if(budget > 1000){
        destination = 'Europe';
        budget *= 0.9;
    }

    if(season == "summer"){
        typeOfHoliday = 'Camp';
    }else{
        typeOfHoliday = 'Hotel';
    }
    if(destination == 'Europe'){
        typeOfHoliday = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfHoliday} - ${budget.toFixed(2)}`);
    
    
}
solve(1500, 'summer');