function solve(input) {
    let minutesWalkADay = Number(input.shift());
    let countWalk = Number(input.shift());
    let caloriesTaken = Number(input.shift());

    let totalMinutesWalk = minutesWalkADay * countWalk;
    let totalCaloriesBurned = totalMinutesWalk * 5;
    let percentCaloriesTaken = caloriesTaken * 0.5;

    if(totalCaloriesBurned >= percentCaloriesTaken){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);
        
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);
        
    }

}
solve([ '15', '2', '500', '' ]);