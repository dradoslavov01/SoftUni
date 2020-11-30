function solve(input) {
    let pens = Number(input.shift()) * 5.8;
    let markers = Number(input.shift()) * 7.2;
    let cleanProduct = Number(input.shift()) * 1.2;
    let discount = Number(input.shift()) / 100;

    let totalProducts = pens + markers + cleanProduct;
    let result = totalProducts - (totalProducts * discount);

    console.log(result.toFixed(3));
    
}
solve([ '4', '2', '5', '13' ]);