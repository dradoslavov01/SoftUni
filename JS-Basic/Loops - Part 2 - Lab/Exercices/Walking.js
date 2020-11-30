function solve(input) {

    let stepsMade = 0;
    let needSteps = 10000;

    while (stepsMade < needSteps) {
        let command = input.shift();

        if (command === 'Going home') {
            stepsMade += Number(input.shift());
            break;
        }

        stepsMade += Number(command);
    }
    if(stepsMade >= needSteps){
        console.log('Goal reached! Good job!');
        
    }else{
        let leftSteps = needSteps - stepsMade; 
        console.log(`${leftSteps} more steps to reach goal.`);
        
    }

}
solve([ '1500', '300', '2500', '3000', 'Going home', '200' ]);