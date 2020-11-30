function solve(start, end, n){
    start = Number(start);
    end = Number(end);
    n = Number(n);

    for(let i = start; i <= end; i++){
        
        if(i % (Math.pow(n, 2)) == 0){
            console.log(`Very special number: ${i}`);
            
        }else if(i % n == 0){
            console.log(`Special number: ${i}`);
        }else{
            console.log(i);
            
        }
    }
}
solve(1, 25, 3)
