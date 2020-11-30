function solve(age, sex){
    age = Number(age);

    if(sex == 'm' && age >= 16){
        console.log('Mr.');
    }else if(sex == 'm' && age < 16){
        console.log('Master');
        
    }if(sex == 'f' && age >= 16){
        console.log('Ms.');
    }else if(sex == 'f' && age <16){
        console.log('Miss');
        
    }
}
solve(12, 'f');
