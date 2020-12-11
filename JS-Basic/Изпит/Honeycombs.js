function solve(bee, flowers) {
    bee = Number(bee);
    flowers = Number(flowers);

    let totalHoney = bee * flowers * 0.21;
    let copperHoney = totalHoney / 100
    let reminder = totalHoney % 100;
    
    console.log(`${Math.floor(copperHoney)} honeycombs filled.`);
    console.log(`${reminder.toFixed(2)} grams of honey left.`);
    
    
    
}
solve('11', '120')