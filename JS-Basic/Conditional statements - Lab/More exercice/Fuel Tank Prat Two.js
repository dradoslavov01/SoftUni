function solve(gorivo, kolichestvo, karta){
    kolichestvo = Number(kolichestvo);


    let benzin, diesel, gas
    benzin = 2.22;
    diesel = 2.33;
    gas = 0.93
    if(karta === 'Yes'){
        benzin -=  0.18;
        diesel -= 0.12;
        gas -= 0.08;
    }
    
    let benzinPrice, dieselPrice, gasPrice;
    benzinPrice = kolichestvo * benzin;
    dieselPrice = kolichestvo * diesel;
    gasPrice = kolichestvo * gas;

    if(kolichestvo > 20 && kolichestvo <= 25){
        benzinPrice *= 0.92;
        dieselPrice *= 0.92;
        gasPrice *= 0.92;
    }else if(kolichestvo > 25){
        benzinPrice *= 0.9;
        dieselPrice *= 0.9;
        gasPrice *= 0.9;
    }

    if(gorivo === 'Gas'){
        console.log(`${gasPrice.toFixed(2)} lv.`);
        
    }else if(gorivo === 'Diesel'){
        console.log(`${dieselPrice.toFixed(2)} lv.`);

    }else if(gorivo === 'Gasoline'){
        console.log(`${benzinPrice .toFixed(2)} lv.`);
    }

}
solve('Gas',
30,
'Yes');