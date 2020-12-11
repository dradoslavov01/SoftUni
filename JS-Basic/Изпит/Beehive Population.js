function solve(population, years){
    population = Number(population);
    years = Number(years)
    for (let i = 1; i <= years; i++) {
    
    let beesGain = Math.floor((population / 10) * 2);
    if(beesGain % 2 != 0){
        beesGain -= 1
    }
    population += beesGain
    if(i % 5 == 0){
            let noBees = Math.floor((population / 50) * 5);
            if(noBees % 5 != 0){
                noBees -= noBees % 5;
            }
            population -= noBees
        }
    
    let lostBees = Math.floor((population / 20) * 2);
    if(lostBees % 2 != 0){
        lostBees -= 1
    }
    population -= lostBees; 
    
    }
    
    
    console.log(`Beehive population: ${population}`);
    }
solve('100', '6');