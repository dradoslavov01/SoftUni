function solve(n){
    n = Number(n);

    let odd = 0;
    let even = 0
    let oddEndOfSeven = 0;
    let numbersDevide100 = 0;
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0 && i <= 9){
            odd += 1 / n * 100;;
        }if(i % 2 == 0){
            even += 1 / n * 100;;
        }if(i % 2 != 0 && i % 10 == 7){
            oddEndOfSeven += 1 / n * 100; ;
       }if(100 % i == 0){
        numbersDevide100 += 1 / n * 100;
       }
       
    }
    console.log(`${odd.toFixed(2)}% \n${even.toFixed(2)}% \n${oddEndOfSeven.toFixed(2)}% \n${numbersDevide100.toFixed(2)}%`);
  
}
solve(35);