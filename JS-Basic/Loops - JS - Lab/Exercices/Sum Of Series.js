function solve(n){
    n = Number(n);
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i * i;
        
    }
    console.log(sum);
}
solve(7);