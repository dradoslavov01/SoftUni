function solve(input) {
    let width = Number(input.shift());
    let height = Number(input.shift());

    let cake = width * height;

    let pieces = 0;
    let piecesTaken = 0;
    let command = input.shift();
    while(command !== 'STOP'){
        piecesTaken += Number(command);

        if (piecesTaken > cake) {
            break;
        }
        command = input.shift();
    }
    if (piecesTaken > cake) {
        let needPices = piecesTaken - cake;
        console.log(`No more cake left! You need ${needPices} pieces more.`);
        
    }else{
        let leftPieces = cake -piecesTaken;
        console.log(`${leftPieces} pieces are left.`);
        
    }

}
solve([ '10', '2', '2', '4', '6', 'STOP' ]);