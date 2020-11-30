function solve(input) {
    input = input.map(Number);
    let days = input.shift();
    let countOfPlayers = input.shift();
    let energy = input.shift();
    let waterFofPerson = input.shift();
    let foodForPerson = input.shift();
    let totalWater = waterFofPerson * days * countOfPlayers;
    let totalFood =  foodForPerson * days * countOfPlayers;

    let counter = 0;
    while (days != 0) {
        let energyLoss = input.shift();
        energy -= energyLoss;
        counter++;

        if (counter % 2 == 0 && counter != 1) {
            energy += (energy * 0.05);
            totalWater *= 0.7;
        }

        if (counter % 3 == 0) {
            totalFood -= (totalFood / countOfPlayers);
            energy += (energy * 0.1);
        }

        if (energy <= 0) {
            break;
        }
        days--;
    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);  
    }
}

solve([
    '10',     '7',      '5035.5',
    '11.3',   '7.2',    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3',  '784.20',
    '321.21', '456.8',  '330',
    ''
  ])