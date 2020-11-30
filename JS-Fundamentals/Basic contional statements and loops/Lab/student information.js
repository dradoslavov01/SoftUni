function solve(studentName, age, grade) {
    age = Number(age);
    grade = Number(grade);
    let result = `Name: ${studentName}, Age: ${age}, Grade: ${grade.toFixed(2)}`
    console.log(result);
    
}
solve('John', 15, 5.54678);