function solve(recordInSeconds, distanceM, timeInSeconds){
    recordInSeconds = Number(recordInSeconds);
    distanceM = Number(distanceM);
    timeInSeconds = Number(timeInSeconds);

    let ivanTime = distanceM * timeInSeconds;
    let timePlus = (Math.floor(distanceM / 15) * 12.5);
    let totalTime = ivanTime + timePlus;
    let needTime = totalTime - recordInSeconds;

    if(recordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        
    }else{
        console.log(`No, he failed! He was ${needTime.toFixed(2)} seconds slower.`);
        
    }
}
solve(55555.67,
    3017,
    5.03);