function solve(array) {
 
    let cards = array.shift().split(':');
    let command = array.shift();
    let deck = [];
 
    while (command !== 'Ready') {
        let commandArray = command.split(' ');
 
        switch (commandArray[0]) {
            case 'Add':
                if (cards.includes(commandArray[1])) {
                    deck.push(commandArray[1]);
                }
                else {
                    console.log(`Card not found.`);
                }
                break;
 
            case 'Insert':
                if (cards.includes(commandArray[1]) && commandArray[2] < cards.length && commandArray[2] >= 0) {
                    deck.splice(Number(commandArray[2]), 0, commandArray[1]);
                }
                else {
                    console.log(`Error!`);
 
                }
                break;
 
            case 'Remove':
                if (deck.includes(commandArray[1])) {
                    let index = deck.indexOf(commandArray[1]);
                    deck.splice(index, 1);
 
                }
                else {
                    console.log(`Card not found.`);
                }
                break;
 
            case 'Swap':
                if (deck.includes(commandArray[1]) && deck.includes(commandArray[2])) {
 
                    let index1 = deck.indexOf(commandArray[1]);
                    let index2 = deck.indexOf(commandArray[2]);
                    let first = commandArray[1];
                    let second = commandArray[2];
 
                    deck[index1] = second;
                    deck[index2] = first;
                }
                break;
 
            case 'Shuffle':
                deck.reverse();
                break;
        }
 
        command = array.shift();
    }
 
 
    console.log(deck.join(' '));
 
}

solve ((["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Pounce",
"Add Bite",
"Add Wrath",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Shuffle deck",
"Ready"]))