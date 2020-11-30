function perfectNum(n) {
    let result = 0;
    let isPerfect = false;
    for(let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i;
            
            if(result == n){
                isPerfect = true;
            }
        }
    }
    if(isPerfect) {
        return 'We have a perfect number!'
    } else {
        return "It's not so perfect."
    }
    
}
console.log(perfectNum(28));