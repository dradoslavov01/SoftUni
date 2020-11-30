function solve (number) {
    
    let isNotPrime = false;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isNotPrime = true;
            }
        }  

    if (isNotPrime) {
        console.log('false');
    } else {
        console.log('true');
    }

}
solve(8);