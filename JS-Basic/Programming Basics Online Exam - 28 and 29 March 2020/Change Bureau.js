function solve(input) {
    let bitcoin = Number(input.shift()) * 1168;
    let yuana = (Number(input.shift()) * 0.15) * 1.76;
    let commision = Number(input.shift()) / 100;

    let euro = (bitcoin + yuana) / 1.95;
    let result = euro - (euro * commision);

    console.log(result.toFixed(2));
    
    
}
solve([ '20', '5678', '2.4' ]);