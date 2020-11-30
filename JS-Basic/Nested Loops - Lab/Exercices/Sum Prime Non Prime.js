function solve(input) {
    let command = input.shift();
    let counter = 0;
    let prime = 0;
    let nonPrime = 0;
    while (command != 'stop') {
        let num = Number(command) 
        
        if(num < 0 ) {
            console.log('Number is negative.');
            command = input.shift();
            continue;
        }

        let isPrime = true;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) {
               isPrime = false;
               break;
            }
        }
        if(isPrime) {
            prime += num;
        }else{
            nonPrime += num;
        }


        command = input.shift();
        counter++
     
    }   
    
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
    

}
solve([
  '3',    '9',
  '0',    '7',
  '19',   '4',
  'stop'
]
);