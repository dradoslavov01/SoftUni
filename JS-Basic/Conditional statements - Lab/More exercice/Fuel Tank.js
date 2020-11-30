function solve(gorivo, litri){
    litri = Number(litri)

    if(gorivo == 'Diesel' && litri < 25){
        console.log('Fill your tank with diesel!');
        
    }else if(gorivo == 'Diesel' && litri >= 25){
        console.log('You have enough diesel.');
        
    }else if(gorivo == 'Gasoline' && litri >= 25){
        console.log('You have enough gasoline.');
        
    }else if(gorivo == 'Gasoline' && litri < 25){
        console.log('Fill your tank with gasoline!');

    }else if(gorivo == 'Gas' && litri >= 25){
        console.log('You have enough gas.');
        
    }else if(gorivo == 'Gas' && litri < 25){
        console.log('Fill your tank with gas!');
        
    }else{
        console.log('Invalid fuel!');
        
    }
}
solve('Diesel', 20);