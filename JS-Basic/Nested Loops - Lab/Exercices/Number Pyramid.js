function solve(input) {
    let number = Number(input.shift());
    let counter = 1;
    let stop = false;
    let print = '';
    for(let rows = 1; rows <= number; rows++){
        for(let col = 1; col <= rows; col++) {
            if(counter > number) {
                stop = true;
                break;
            }
            print += counter + ' ';
            counter++
        }
        console.log(print);
        print = '';
        
        if(stop) {
            break;
        }
        
    }

}
solve(['7']); 