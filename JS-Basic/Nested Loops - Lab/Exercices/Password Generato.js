function solve(input) {
    let tournamentsCount = Number(input.shift());
    let startPointCount = Number(input.shift());

    let finalPoints = 0;
    let counter = 0;
    let pointsAvg = 0;
    for (let i = 1; i <= tournamentsCount; i++) {
        let stage = input.shift();
        if(stage == 'F') {
            finalPoints += tournamentsCount + 1200;
            pointsAvg += 1200;
        }else if(stage == 'SF') {
            finalPoints += tournamentsCount + 720;
            pointsAvg += 720;
        }else if( stage == 'W'){
            finalPoints += tournamentsCount + 2000;
            pointsAvg += 2000;
        }
    }
    
    let percentWonTournaments = (counter / tournamentsCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(pointsAvg)} `);
    console.log(percentWonTournaments.toFixed(2) + '%');
    
    
}
solve([
    '4', '750', 'SF',
    'W', 'SF',  'W',
    '',  ''
  ]);