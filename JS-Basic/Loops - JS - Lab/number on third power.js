function solve(n){
    n = Number(n);

    for(let i = 1; i <= n; i++){
        let A = i;
        let B = Math.pow(i ,3);
        
        if(n % 2 != 0){
            if(A % 2 != 0){
                console.log(`Current number: ${A}. Cube: ${B}`);
                
            }
        }else if(n % 2 == 0){
            if(A % 2 == 0){
                console.log(`Current number: ${A}. Cube: ${B}`);
                
            }
        }
    }
}
solve(10);