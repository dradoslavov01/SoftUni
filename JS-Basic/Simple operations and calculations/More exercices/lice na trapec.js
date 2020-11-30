function solve(b1, b2, h) {
    b1 = Number(b1);
    b2 = Number(b2);
    h =  Number(h);

    let result  = (b1 + b2) * h / 2;
    
    console.log(result.toFixed(2));
}
solve(8, 13, 7);