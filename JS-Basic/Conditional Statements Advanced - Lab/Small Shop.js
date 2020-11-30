function solve(product, city, count){
    count = Number (count);

    if(city == 'Sofia'){
        switch(product){
            case 'coffee':
                console.log(0.5 * count);
                break;
            case 'water':
                console.log(0.8 * count);
                break;
            case 'beer':
                console.log(1.2 * count);
                break;
            case 'sweets':
                console.log(1.45 * count);
                break;
            case 'peanuts':
                console.log(1.6 * count);
                break;
                
        }
    }else if(city == 'Plovdiv'){
        switch(product){
            case 'coffee':
                console.log(0.4 * count);
                break;
            case 'water':
                console.log(0.7 * count);
                break;
            case 'beer':
                console.log(1.15 * count);
                break;
            case 'sweets':
                console.log(1.30 * count);
                break;
            case 'peanuts':
                console.log(1.5 * count);
                break;
                
        }
    }else if(city == 'Varna'){
        switch(product){
            case 'coffee':
                console.log(0.45 * count);
                break;
            case 'water':
                console.log(0.7 * count);
                break;
            case 'beer':
                console.log(1.1 * count);
                break;
            case 'sweets':
                console.log(1.35 * count);
                break;
            case 'peanuts':
                console.log(1.55 * count);
                break;
                
        }
    }
}
solve('coffee', 'Varna', 2);