function solve(n) {
    n = Number(n);
    
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
          
            if (counter === n) {
                break;
            }
            sum += i;
            counter ++;
            console.log(i);
        }
        
    }
    console.log(`Sum: ${sum}`);
}
solve(5);