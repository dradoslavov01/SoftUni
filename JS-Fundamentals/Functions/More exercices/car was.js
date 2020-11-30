function carWash(command) {
    let value = 0;
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'soap') {
            value += 10;
        }
        if(command[i] === 'vacuum cleaner') {
            value += value * 0.25
        }
        if(command[i] === 'water') {
            value += value * 0.2;
        }
        if(command[i] === 'mud') {
            value -= value *0.1;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));