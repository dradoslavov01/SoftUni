function solve(juniorsCount, seniorsCount, raceType){
    juniorsCount = Number(juniorsCount);
    seniorsCount = Number(seniorsCount);

    let totalPeople = juniorsCount + seniorsCount;
    let trailTotalPrice = ((juniorsCount * 5.5) + (seniorsCount * 7)) * 0.95;
    let crossToralPrice = ((juniorsCount * 8) + (seniorsCount * 9.5)) * 0.95;
    let downHillTotalPrice = ((juniorsCount * 12.25) + (seniorsCount * 13.75)) * 0.95;
    let roadTotalPrice = ((juniorsCount * 20) + (seniorsCount * 21.5)) * 0.95;

    if(raceType == 'cross-country' && totalPeople >= 50){
        crossToralPrice *= 0.75;
    }
    if(raceType == 'trail'){
        console.log(trailTotalPrice.toFixed(2));
        
    }else if(raceType == 'cross-country'){
        console.log(crossToralPrice.toFixed(2));
        
    }else if(raceType == 'downhill'){
        console.log(downHillTotalPrice.toFixed(2));
        
    }else if(raceType == 'road'){
        console.log(roadTotalPrice.toFixed(2));
        
    }
    if(raceType == 'cross-country' && totalPeople >= 50){
        crossToralPrice * 0.25;
    }
    
}
solve(30, 25, 'cross-country');