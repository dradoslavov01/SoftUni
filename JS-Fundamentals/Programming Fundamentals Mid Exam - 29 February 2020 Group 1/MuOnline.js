//split rooms with |
// let  commands = every ele wiil be shifted and splited
// commands[0] = command(heal, dmg, coins) and commands[1] = amount
// no heals if = 100
//if commands[0] = heal {"You healed for {commands[1]} hp.". }
//if commands[0] = chest {"You found {commands[1]} bitcoins."
// everything else rather than heal and chest == monster and commands[1] is the damage taken by it
//if health <= 0 {("You died! Killed by {commands[0]}." )}
//if health >= 0 ("You slayed {commands[0]}.")
//if still alive after all rooms => "You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".

function game(inputArr){
    let splitArr = inputArr.split('|');
    let coins = 0;
    let health = 100;
    let healed = 0;
    
    for(let i = 0; i < splitArr.length; i++){
        let commands = splitArr[i].split(' ');

        if(commands[0] != 'potion' && commands[0] !='chest'){
             health -= (commands[1]);
            if(health > 0){
                console.log("You slayed " + commands[0] + ".");
            }
            if(health <= 0){
                console.log('You died! Killed by ' + commands[0] + "." + '\n' + 'Best room: '  + Number(i + 1));
                break;
            }
        }
        if(commands[0] == 'chest'){
            coins += Number(commands[1]);
            console.log("You found "+ commands[1] + " bitcoins" + ".")
        }
        if(commands[0] == 'potion'){
            
           for (let i = 1; i <= Number(commands[1]); i++) {
                health += 1; 
                healed += 1;

                if(Number(commands[1]) == i || health == 100) {
                    console.log(`You healed for ${healed} hp.`);
                    break;
                }
           }

            console.log(`Current health: ${health} hp.`);
        }
    }

    if(health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


game('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' );
