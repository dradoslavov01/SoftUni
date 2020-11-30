function solve(input) {
    let waitingPeople = Number(input.shift());
    let wagon = input.shift().split(' ');
    wagon = wagon.map(Number);
    
    for (let i = 0; i <= wagon.length - 1; i++) {    
        if (waitingPeople >= 4) {
            let people =  4 - wagon[i];
            wagon[i] += people;
            waitingPeople -= people;
        } else {
            wagon[i] += waitingPeople;
            waitingPeople -= waitingPeople
        }  
    }
    let lastWagon = wagon[wagon.length - 1]
    if (waitingPeople == 0 && lastWagon < 4) {
        console.log(`The lift has empty spots!\n${wagon.join(' ')}`);
    } else if (waitingPeople > 0 && lastWagon == 4) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${wagon.join(' ')}`);
    } else {
        console.log(wagon.join(' '));
    }
}

solve([
    "20",
    "0 2 0"
   ])