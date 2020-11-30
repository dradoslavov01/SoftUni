function solve(input) {
    let days = Number(input.shift());

    let daysWon = 0;
    let moneyWon = 0
    for (let i = 0; i < days; i++) {
        let sport = input.shift();
        let wonGames = 0;
        let loseGames = 0;
        let moneyForTheDay = 0
        while (sport != 'Finish') {
            let type = input.shift();
            if(type == 'win') {
                wonGames++;
                moneyForTheDay += 20;
            }else{
               loseGames++
            }

            sport = input.shift();
        }
       
       if(wonGames > loseGames) {
            daysWon++;
            moneyForTheDay *= 1.1;
       }
       moneyWon += moneyForTheDay;
    }
    let hasWin = daysWon > days / 2;
    if(hasWin) {
        moneyWon *= 1.2
       console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)} `);
    }else{
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
        
    }
    
}
solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]
  );