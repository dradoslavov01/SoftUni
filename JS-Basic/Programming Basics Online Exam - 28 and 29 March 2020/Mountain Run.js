function solve(input) {
    let recordInSeconds = Number(input.shift());
    let distanceInMeters = Number(input.shift());
    let timeInSeconds = Number(input.shift());

    let convertInSeconds = distanceInMeters * timeInSeconds;
    let addedTime = (Math.floor(distanceInMeters / 50)) * 30;
    let totalTime = convertInSeconds + addedTime;
    let needSeconds = totalTime - recordInSeconds;

    if (recordInSeconds <= totalTime) {
        console.log(`No! He was ${needSeconds.toFixed(2)} seconds slower.`);
        
    }else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
        
    }
}
solve([ '1377', '389', '3' ]);

