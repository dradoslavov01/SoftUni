function solve(arr) {
    let array = arr.map(Number)
    let studentsCount = array.pop();
    let hours = 0;
    let needHours = 0;
    let answered = 0;
    let studentsLeftToAnswer = 0;
    let studentsPerHoud = array.reduce((a, b) => a + b);
   
    while (true) {
        answered += studentsPerHoud;
        hours++;
        needHours++

        if(hours % 3 == 0) {
            needHours += 1;
            hours = 0;
        }
        studentsLeftToAnswer = (studentsCount - answered);

        if(studentsLeftToAnswer < studentsPerHoud && studentsLeftToAnswer != 0) {
            answered += studentsLeftToAnswer;
            studentsLeftToAnswer = (studentsCount - answered);
            needHours += 0.5;
        }

        if (studentsLeftToAnswer == 0 ) {
            break;
        }

       
    }
    console.log(`Time needed: ${Math.ceil(needHours)}h.`);
}

solve(['5','6','4','20'])