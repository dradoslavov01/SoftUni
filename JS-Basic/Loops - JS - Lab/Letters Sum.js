function solve(product, number, budget){
    number = Number(number);
    budget = Number(budget);

    let sum = 0;
    let total = 0;
    let moneyLeft = 0;
    for(let i = 0; i < product.length; i++){
        switch(product[i]){
            case 'a':
                sum += 3;
                break;
            case 'e':
                sum += 3;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 3;
                break;
            case 'u':
                sum += 3;
                break;
            case 'y':
                sum += 3;
                break;
            default:
                sum += 1;
                break;
              
        }
       
    }
    total = sum * number;
    moneyLeft = budget - total;

    if(budget < total){
        console.log(`Cannot buy ${product}. Product value: ${total.toFixed(2)}`);
        
    }else{
        console.log(`${product} bought. Money left: ${moneyLeft.toFixed(2)}`);
    }
    
    
}  
solve('milk', 1.4, 8)