function solve(numbers) {

    let splited = numbers.split (' ').map(Number);
    
   let average = (splited.reduce((a, b) => a + b) / splited.length).toFixed(2);
    

    let filtered = splited.filter(x => x > average);
    let sliced = filtered.slice(-5);
    let sorted = sliced.sort((a,b) => b - a);

    if(sliced.length >= 5 ) {
        console.log(sorted.join(' '));
    } else {
        console.log('No');
    }

}

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')