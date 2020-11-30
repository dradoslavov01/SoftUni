function solve(nKm, time){
    nKm = Number(nKm);

    let taxiDayPrice = 0.7 + nKm * 0.79;
    let taxiNightPrice = 0.7 + nKm * 0.9;
    let bussPrice = nKm * 0.09;
    let trainPrice = nKm * 0.06;

    if(nKm < 20 && time == 'day'){
        console.log(taxiDayPrice.toFixed(2));
        
    }else if(nKm < 20 && time == 'night'){
        console.log(taxiNightPrice.toFixed(2));
        
    }else if(nKm >= 20 && nKm < 100){
        console.log(bussPrice.toFixed(2));
        
    }else if(nKm >= 100){
        console.log(trainPrice.toFixed(2))
    }
}   
solve(7, 'night');