function solve(figure, sideA, sideB){
    sideA = Number(sideA);
    sideB = Number(sideB);

    if(figure == 'square'){
        console.log(Math.pow(sideA, 2).toFixed(3));
        
    } else if(figure == 'rectangle'){
        console.log(sideA * sideB.toFixed(3));
        
    }else if(figure == 'circle'){
        console.log(Math.PI * Math.pow(sideA, 2).toFixed(3));
        
    } else if(figure == 'triangle'){
        console.log((sideA * sideB / 2).toFixed(3));
    }
}
solve('square', 4.5, 20)