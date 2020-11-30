function solve(freeDays){
    freeDays = Number(freeDays);

    let tomPlayInYears = 30000;
    let year = 365;
    let playInWork = 63;
    let playInFree = 127

    let playInfreeDays = freeDays * playInFree;
    let playInWorkDays = (year - freeDays) * playInWork;
    let realTimeForPlay = playInfreeDays + playInWorkDays;
    let difference = Math.abs(tomPlayInYears - realTimeForPlay);
    let hours = Math.floor(difference / 60);
    let minutes = difference - (hours * 60);

    if(tomPlayInYears < realTimeForPlay){
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }else{

        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
    
    
    
}
solve(20);