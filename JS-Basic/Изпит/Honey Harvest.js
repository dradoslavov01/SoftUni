function solve(typeFlower, count, seasson) {
    count = Number(count);

    let honey = 0;
    if(seasson == 'Spring') {
        if(typeFlower == 'Sunflower' || typeFlower == 'Mint') {
            honey = count * 10;
        }else if(typeFlower == 'Daisy' || typeFlower == 'Lavender'){
            honey = count * 12;
        }
        if(typeFlower == 'Daisy' || typeFlower == 'Mint'){
            honey += (honey * 0.1)
        }

    }else if(seasson == 'Summer') {
        if (typeFlower == 'Sunflower' || typeFlower == 'Daisy' || typeFlower == 'Lavender') {
            honey = count * 8;
            
        }else{
            honey = count * 12;
        }
        honey += (honey * 0.1)
    }else if(seasson == 'Autumn'){
        if(typeFlower == 'Sunflower') {
            honey = count * 12;
        }else{
            honey = count * 6;
        }
        honey *= 0.95;
    }
    console.log(`Total honey harvested: ${honey.toFixed(2)}`);
    
}
solve('Daisy',
    '15',
    'Spring');