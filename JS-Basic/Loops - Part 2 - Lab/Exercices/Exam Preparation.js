function solve(input) {
    let badGrades = Number(input.shift());

    let counter = 0;
    let sum = 0;
    let grades = 0;
    let lastProblem = '';
    while (counter < badGrades) {
       let problemName = input.shift();
       let recivedGrade = Number(input.shift());

        if(problemName === 'Enough'){
            let average = sum / grades;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${grades}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }else{
            grades++;
            sum += recivedGrade;
            lastProblem = problemName;

                if(recivedGrade <= 4){
                    counter++;
                }
        }   
    }
    if(counter === badGrades){
        console.log(`You need a break, ${badGrades} poor grades.`);
        
    } 

}
solve([ '2', 'Income', '3', 'Game Info', '6', 'Best Player', '4' ]);