function solve(flowers, flowersCount, budget){
    flowersCount = Number(flowersCount);
    budget = Number(budget);

    let totalRoses = flowersCount * 5;
    let totalDahlias = flowersCount * 3.8;
    let totalTulps =  flowersCount * 2.8;
    let totalNarcissus = flowersCount * 3;
    let totalGladiolus = flowersCount * 2.5;

    let flowersPrice;
 

    if(flowers == 'Roses'){
        flowersPrice = totalRoses;
            if(flowersCount > 80){
                flowersPrice = totalRoses * 0.9;
            }
    }else if(flowers == 'Dahlias'){
        flowersPrice = totalDahlias;
            if(flowersCount > 90){
                flowersPrice = totalDahlias * 0.85;
            }
    }else if(flowers == 'Tulips'){
        flowersPrice = totalTulps;
            if(flowersCount > 80){
                flowersPrice = totalTulps * 0.85;
            }
    }else if(flowers == 'Narcissus'){
        flowersPrice = totalNarcissus;
            if(flowersCount < 120){
                flowersPrice = totalNarcissus * 0.15 + totalNarcissus;
            }
    }else if(flowers == 'Gladiolus'){
        flowersPrice = totalGladiolus;
            if(flowersCount < 80){
                flowersPrice = totalGladiolus * 0.2 + totalGladiolus;
            }
    }

  
    let money = Math.abs(budget - flowersPrice)
  if(budget < flowersPrice){
      console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
      
  }else{
    console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${money.toFixed(2)} leva left.`);
    
  }  
}
solve('Roses', 55, 250);