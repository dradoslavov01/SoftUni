function solve (num1, operator, num2) {

    let result  = `${num1} ${operator} ${num2}`
    console.log(eval(result).toFixed(2));
}

solve(5,
    '+',
    10)