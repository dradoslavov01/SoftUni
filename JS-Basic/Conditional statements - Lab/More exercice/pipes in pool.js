function solve(v, p1, p2, h){
    v = Number(v);
    p1 = Number(p1) * h;
    p2 = Number(p2) * h;
    h = Number(h);

    let totalL = p1 + p2;
    let V = totalL / v * 100
    let pipeOne, pipeTwo;

    pipeOne = (p1 * 100) / totalL;
    pipeTwo =(p2 * 100) / totalL;
    let moreL = totalL - v;

    if(totalL <= v){
        console.log(`The pool is ${V.toFixed(2)}% full. Pipe 1: ${pipeOne.toFixed(2)}%. Pipe 2: ${pipeTwo.toFixed(2)}%."`);
        
    }else if(totalL > v){
        console.log(`For ${h} hours the pool overflows with ${moreL.toFixed(2)} liters.`);
        
    }
}
solve(1000,
    100,
    120,
    3);