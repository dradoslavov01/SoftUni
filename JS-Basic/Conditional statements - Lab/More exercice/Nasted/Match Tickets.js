function solve(budget, category, peopleCount){
    budget = Number(budget);
    peopleCount = Number(peopleCount);
    category = String(category);
    
    let vip = 499.99;
    let normal = 249.99;

    let procent;
    if(peopleCount >= 1 && peopleCount <= 4){
        procent = budget * 0.75;
    }else if(peopleCount >= 5 && peopleCount <=9){
        procent = budget * 0.6;
    }else if(peopleCount >= 10 && peopleCount <= 24){
        procent = budget * 0.5;
    }else if(peopleCount >= 24 && peopleCount <= 49){
        procent = budget * 0.4;
    }else if(peopleCount >= 50){
        procent = budget * 0.25
    }

    let remaining = budget - procent;
    let bilet;

    if(category == 'Normal'){
        bilet = normal * peopleCount;
    }else if(category == 'VIP'){
        bilet = vip * peopleCount;
    }
    if(bilet < remaining){
        console.log(`Yes! You have ${Math.abs(remaining - bilet).toFixed(2)} leva left.`);
        
    }else{
        console.log(`Not enough money! You need ${Math.abs(remaining - bilet).toFixed(2)} leva.`);
        
    }
}
solve(30000, 'VIP', 49);