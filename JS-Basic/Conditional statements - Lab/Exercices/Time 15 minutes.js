function solve(hours, minutes){
    hours = Number(hours);
    minutes = Number(minutes) + 15;

    if (minutes > 59) {
        hours += 1;
        minutes -= 60;
    } 
    
    if (hours > 23) {
        hours -= 24;
    }
    
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}
solve(23, 50)