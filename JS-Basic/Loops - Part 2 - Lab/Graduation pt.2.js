function solve(input) {
    let name = input.shift();

    let counter = 1;
    let sum = 0;
    let failed = 0;
    while (counter <= 12){
        let grade = Number(input.shift());
        
        if(grade >= 4){
            sum += grade;  
        }
       else{
           failed++;
           
        }
        if(failed === 2){
            console.log(`${name} has been excluded at ${counter - 1} grade`)
            break;
        }
        counter++;
    }
    let average = sum / 12;
        if(failed < 2) {
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
        }
    
}
solve([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ])