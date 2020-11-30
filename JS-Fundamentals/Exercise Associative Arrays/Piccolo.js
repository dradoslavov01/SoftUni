function solve(input) {

  let obj = {};
    
    for (let line of input) {
        let [direction, carName] = line.split(', ')

        if (direction == 'IN') {
            obj[carName] = 1;
        } else {
            delete obj[carName];
        }   
    }

    let keys = Object.keys(obj).sort((a, b) => a.localeCompare(b))

    for (const key of keys) {
        console.log(key);
    }
}
solve (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])