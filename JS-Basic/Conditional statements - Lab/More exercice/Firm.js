function solve(hours, days, workers){
    hours = Number(hours);
    days = Number(days);
    workers = Number(workers);

    let totalHours = Math.floor(((days * 0.9) * 8) + (workers * (2 * days)));
    let remainigHours = totalHours - hours;
    let neededHours = hours - totalHours
    if(totalHours >= hours){
        console.log(`Yes!${remainigHours} hours left.`);
        
    }else{
        console.log(`Not enough time!${neededHours} hours needed.`);
        
    }

}
solve(99,
    3,
    1)
