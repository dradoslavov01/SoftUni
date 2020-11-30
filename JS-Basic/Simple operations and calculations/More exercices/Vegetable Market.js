function solve(kgPriceVegetables, ksPriceFruits, totalKsVegetables, totalKgFruits) {
    kgPriceVegetables = Number(kgPriceVegetables);
    ksPriceFruits = Number(ksPriceFruits);
    totalKsVegetables = Number(totalKsVegetables);
    totalKgFruits = Number(totalKgFruits);

    let vegatablesPrice = kgPriceVegetables * totalKsVegetables;
    
    let fruitsPrice = ksPriceFruits * totalKgFruits;
    
    
    let total = vegatablesPrice + fruitsPrice;
    let evro = total / 1.94;

    console.log(evro.toFixed(2));
    
    
}
solve(0.194, 19.4, 10, 10);