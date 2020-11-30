function solve(input) {
    let n = Number(input.shift());
    
    let minNumber = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= n; i++){
        let num = Number(input.shift());
        if(num < minNumber){
            minNumber = num;
        }
      
    }
    console.log(minNumber);
   
}
solve([ '2', '100', '99' ]);