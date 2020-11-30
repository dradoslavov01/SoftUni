function solve(n1, n2, operator){
    n1 = Number(n1);
    n2 = Number(n2);

    let result;
    let type;

    if(operator == '+'){
        result = n1 + n2;
    }else if(operator == '-'){
        result = n1 - n2;
    }else if(operator == '*'){
        result = n1 * n2;
    }else if(operator == '/'){
        result = n1 / n2;
    }else if(operator == '%'){
        result = n1 % n2;
    }

    if(result % 2 == 0){
        type = 'even'
    }else{
        type = 'odd'
    }
    if(operator == '/' && n2 == 0){
        console.log(`Cannot divide ${n1} by zero`);
    }else if(operator == '%' && n2 == 0){
        console.log(`Cannot divide ${n1} by zero`);
    }else if(operator == '+' || operator == '-' || operator == '*'){
        console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
    }else if(operator == '/'){
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
        
    }else if(operator == '%'){
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    }
}
solve(10, 3, '%');