function solve(input) {
    let n = Number(input.shift());
    let command = input.shift();
    let grades = 0;
    let sumOfGrades = 0;
    while (command != 'Finish') {
       let presentation = command;
       let currentSum = 0;

       for(let i = 0; i < n; i++) {
            let grade = Number(input.shift());
            currentSum += grade;
       }
        sumOfGrades += currentSum;
        grades += n;
        let currentAvg = (currentSum / n).toFixed(2)
        console.log(`${presentation} - ${currentAvg}.`); 
        
        
        command = input.shift();
       
        
    }
    let finalAvg = (sumOfGrades / grades).toFixed(2)
    console.log(`Student's final assessment is ${finalAvg}.`);
}
solve([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish'
  ]
  );