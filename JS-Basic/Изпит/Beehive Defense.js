function solve(beesCount, health, damage) {
    beesCount = Number(beesCount);
    health = Number(health);
    damage = Number(health);

       
    while(true){
 
    beesCount -= damage;
     
    health -= (beesCount * 5);
     
    if(beesCount < 100){
        if(beesCount < 0){
            beesCount = 0
        }
        console.log(`The bear stole the honey! Bees left ${beesCount}.`);
        break;
       
    }
     
    if(health < 0){
        console.log(`Beehive won! Bees left ${beesCount}.`);
        break;
        }
    }
}
