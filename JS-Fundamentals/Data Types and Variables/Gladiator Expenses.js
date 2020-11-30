function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0
    let brokenArmor = 0;
    let brokenShieldCount = 0;

    for(let i = 1; i <= lostFightsCount; i++) {


        if(i % 2 === 0) {
            brokenHelmet++;
        } 
        if (i % 3 === 0) {
            brokenSword++;
        }
        if(i % 2 === 0 && i % 3 === 0) {
            brokenShield++;
            brokenShieldCount++
        }

        if(brokenShieldCount % 2 === 0 && brokenShieldCount > 0) {
            brokenArmor++;
        }
        
        if(brokenShieldCount % 2 === 0) {
            brokenShieldCount = 0;
        }
    }

    let trashedHelmet = brokenHelmet * helmetPrice;
    let trashedSword = brokenSword * swordPrice;
    let trashedShield = brokenShield * shieldPrice;
    let trashedArmor = brokenArmor * armorPrice;
    let total = trashedHelmet + trashedSword + trashedShield + trashedArmor;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
  
}
solve(7,
    2,
    3,
    4,
    5);