function solve(start, end, devider){
    start = Number(start);
    end = Number(end);
    devider = Number(devider);

    let sum = 0;
    for(let i = start; i <= end; i++){
        if(i % devider == 0){
            sum += i;
        }
    }
    console.log(sum);
    
}
solve(61, 125, 25);