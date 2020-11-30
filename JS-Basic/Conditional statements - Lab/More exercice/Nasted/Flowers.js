function solve(hrizantemiCount, roziCount, laletaCount, seasons, day){
    hrizantemiCount = Number(hrizantemiCount);
    roziCount = Number(roziCount);
    laletaCount = Number(laletaCount);
    seasons = String(seasons);
    day = String(day)

    let totalCountFlowers = hrizantemiCount + roziCount + laletaCount;

    let priceHrizantemiForSprigAndSummer = hrizantemiCount * 2;
    let priceRoziForSprigAndSumemr = roziCount * 4.1;
    let priceLaletaForSprigAndSummer = laletaCount * 2.5;
    let totalPriceForSpringAndSummer = priceHrizantemiForSprigAndSummer + priceRoziForSprigAndSumemr + priceLaletaForSprigAndSummer ;

    let priceHrizantemiForAutumnAndWinter = hrizantemiCount * 3.75;
    let priceRoziForAutumnAndWinter = roziCount * 4.5;
    let priceLaletaForAutumnAndWinter = laletaCount * 4.15;
    let totalPriceForAutumnAndWinter = priceHrizantemiForAutumnAndWinter + priceRoziForAutumnAndWinter + priceLaletaForAutumnAndWinter;

   let totalPriceForAllSeasons = totalPriceForSpringAndSummer + totalPriceForAutumnAndWinter;

    if(laletaCount > 7 && seasons == 'Spring'){
        totalPriceForSpringAndSummer *= 0.95;
    }
    if(roziCount >= 10 && seasons == 'Winter'){
        totalPriceForAutumnAndWinter *= 0.9;
    }
    if(totalCountFlowers > 20){
        totalPriceForSpringAndSummer = totalPriceForAllSeasons * 0.8;
        totalPriceForAutumnAndWinter = totalPriceForAutumnAndWinter * 0.8;
    }

    if(day == 'Y'){
        totalPriceForSpringAndSummer = totalPriceForSpringAndSummer + (totalPriceForSpringAndSummer * 0.15) ;
        totalPriceForAutumnAndWinter = totalPriceForAutumnAndWinter + (totalPriceForAutumnAndWinter * 0.15) ;
    }
    
    totalPriceForSpringAndSummer = totalPriceForSpringAndSummer + 2;
    totalPriceForAutumnAndWinter = totalPriceForAutumnAndWinter + 2;

    if(seasons == 'Spring'){
        console.log(totalPriceForSpringAndSummer.toFixed(2));
        
    }else if(seasons == 'Summer'){
        console.log(totalPriceForSpringAndSummer.toFixed(2));
    }else if(seasons == 'Autumn'){
        console.log(totalPriceForAutumnAndWinter.toFixed(2));
    }else if(seasons == 'Winter'){
        console.log(totalPriceForAutumnAndWinter.toFixed(2));
    }

}
solve(3,
    10,
    9,
    'Winter',
    'N');