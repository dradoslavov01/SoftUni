function shop(dogs, otherAnimals){
    let dogss = dogs * 2.50;
    let otherAnimalss = otherAnimals * 4;
    let result = dogss + otherAnimalss;
    console.log(`${result.toFixed(2)} lv.`);
    
}
shop(5, 4);