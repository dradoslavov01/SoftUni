function solve(num, enterance, source){
    num = Number(num);

    if(enterance == 'mm'){
        num = num / 1000;
        
    }else if (enterance == 'cm'){
        num = num / 100;
    }
    if(source == 'mm'){
        num = num * 1000;
    }else if(source == 'cm'){
        num = num * 100;
    }
    console.log(num.toFixed(3));
    
}
solve(150, 'm', 'cm')