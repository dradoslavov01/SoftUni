function solve(input) {
    let n = Number(input.shift());
    
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i <= n; i++){
        let num = Number(input.shift());
        if(num > maxNumber){
            maxNumber = num;
        }
      
    }
    console.log(maxNumber);
   
}
solve([ '2', '100', '99' ]);