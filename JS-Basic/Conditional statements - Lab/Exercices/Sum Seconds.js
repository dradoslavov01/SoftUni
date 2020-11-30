function solve(first, second, third){
    first = Number(first);
    second = Number(second);
    third = Number(third);

    let total = first + second + third;

    let minutes = Math.floor(total / 60);
    let seconds =  total % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
        
    }else{
        console.log(`${minutes}:${seconds}`);
        
    }
}
solve(35, 45, 44);