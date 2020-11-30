function solve(degrees, time){
    degrees = Number(degrees);
    let Outfit, Shoes;
    if(degrees >= 10 && degrees <= 18){
        switch(time){
            case 'Morning':
                Outfit = 'Sweatshirt';
                Shoes = 'Sneakers';
                break;
            case 'Afternoon':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
            case 'Evening':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
        }
    }else if(degrees > 18 && degrees <= 24){
        switch(time){
            case 'Morning':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
            case 'Afternoon':
                Outfit = 'T-Shirt';
                Shoes = 'Sandals';
                break;
            case 'Evening':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
        }
    }else{
        switch(time){
            case 'Morning':
                Outfit = 'T-Shirt';
                Shoes = 'Sandals'
                break;
            case 'Afternoon':
                Outfit = 'Swim Suit';
                Shoes = 'Barefoot'
                break;
            case 'Evening':
                Outfit = 'Shirt';
                Shoes = 'Moccasins';
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}
solve(22, 'Afternoon')